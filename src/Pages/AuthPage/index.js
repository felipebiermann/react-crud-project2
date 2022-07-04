import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { Toaster, toast } from "react-hot-toast";

export function AuthPage() {
  const navigate = useNavigate();

  const { _id } = useParams();
  const [form, setForm] = useState({
    userName: "",
    login: "",
    password: "",
    games: [],
  });
  console.log(form);
  const [user, setUser] = useState({
    userName: "",
    login: "",
    password: "",
    games: [],
  });

  useEffect(() => {
    async function fetchEdit() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/react-crud-project2/${_id}`
        );

        setUser({ ...response.data });
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

  function handleAuth(senha) {
    console.log(senha);
    console.log(form.password);
    if (senha === user.password) {
      navigate(`/api-page/${_id}`);
    } else {
      toast.error("senha invalida");
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <NavBar />
      <h3>Edite seu Perfil</h3>
      <div className="form-row align-items-center">
        <form style={{ width: "100px", margin: "10px" }}>
          <label htmlFor="Nome-input">Seu Nome:</label>
          <input
            type="string"
            name="userName"
            value={user.userName}
            id="Nome-input"
          />
          <label htmlFor="user-input">Login:</label>
          <input
            type="string"
            name="login"
            value={user.login}
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
            onClick={() => {
              handleAuth(form.password);
            }}
            type="button"
            style={{ margin: "10px" }}
          >
            Logar
          </button>
        </form>
      </div>
    </>
  );
}
