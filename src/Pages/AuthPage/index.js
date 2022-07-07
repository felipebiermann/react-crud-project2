import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar2 } from "../../components/NavBar2";
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
      navigate(`/api-page/${user._id}`);
      toast("Access Released", {
        icon: "👏",
      });
    } else {
      toast("Invalid Password", {
        icon: "😕",
      });
    }
  }

  return (
    <>
      <section id="banner">
        <Toaster position="top-center" reverseOrder={false} />
        <NavBar2 />
        <h3 style={{ color: "white" }}>Login to your Account</h3>
        <div className="form-row align-items-center">
          <form style={{ width: "100px", margin: "10px" }}>
            <label htmlFor="user-input" style={{ color: "white" }}>
              Login:
            </label>
            <input
              type="string"
              name="login"
              value={user.login}
              id="login-input"
            />
            <br />
            <label htmlFor="password-input" style={{ color: "white" }}>
              Password:
            </label>
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
              Enter
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
