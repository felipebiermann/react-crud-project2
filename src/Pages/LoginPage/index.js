import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavBar } from "../../components/NavBar";
// import { Toaster, toast } from "react-hot-toast";

export function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userName: "",
    login: "",
    password: "",
    // games:[],
  });
  console.log(form);

  function handleChange(e) {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        "https://ironrest.herokuapp.com/react-crud-project2",
        form
      );

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <NavBar />

      <div className="form-row align-items-center">
        <form
          onSubmit={handleSubmit}
          style={{ width: "100px", margin: "10px" }}
        >
          <label htmlFor="Nome-input">Seu Nome:</label>
          <input
            type="string"
            name="userName"
            onChange={handleChange}
            value={form.userName}
            id="Nome-input"
          />

          <div>
            <label htmlFor="user-input">Login:</label>
            <input
              type="string"
              name="login"
              onChange={handleChange}
              value={form.login}
              id="login-input"
              style={{ width: "100px" }}
            />
            <div>
              <br />
              <label htmlFor="password-input">Senha:</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={form.password}
                id="password-input"
                style={{ width: "100px" }}
              />
            </div>
          </div>

          <button
            className="btn btn-primary d-flex flex-column"
            onClick={handleSubmit}
            type="submit"
            style={{ margin: "10px" }}
          >
            Criar
          </button>
        </form>
      </div>
    </>
  );
}
