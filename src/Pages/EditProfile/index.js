import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
// import { Toaster, toast } from "react-hot-toast";

export function EditProfile() {
  const navigate = useNavigate();

  const { _id } = useParams();
  const [form, setForm] = useState({
    userName: "",
    login: "",
    password: "",
  });
  console.log(form);

  useEffect(() => {
    async function fetchEdit() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/react-crud-project2/${_id}`
        );

        setForm({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchEdit();
  }, []);

  function handleChange(e) {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const clone = { ...form };
      delete clone._id;
      await axios.put(
        `https://ironrest.herokuapp.com/react-crud-project2/${_id}`,
        clone
      );

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <NavBar />
      <h3>Edite seu Perfil</h3>
      <div className="form-row align-items-center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="Nome-input">Seu Nome:</label>
          <input
            type="string"
            name="userName"
            onChange={handleChange}
            value={form.userName}
            id="Nome-input"
          />
          <label htmlFor="user-input">Login:</label>
          <input
            type="string"
            name="login"
            onChange={handleChange}
            value={form.login}
            id="login-input"
          />
          <br />
          <label htmlFor="password-input">Senha:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            id="password-input"
          />

          <button
            className="btn btn-primary d-flex flex-column"
            onClick={handleSubmit}
            type="submit"
            style={{ margin: "10px" }}
          >
            Editar
          </button>
        </form>
      </div>
    </>
  );
}
