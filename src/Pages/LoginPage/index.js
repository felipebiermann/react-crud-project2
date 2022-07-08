import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavBar2 } from "../../components/NavBar2";
import { useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

export function LoginPage() {
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
        console.log(response);
        setUser({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchEdit();
  }, [_id]);

  function handleChange(e) {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  async function handleSubmit(e) {
    toast("Account Created", {
      icon: "😎",
    });
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
      <div className="form-row align-items-center mx-auto" id="banner">
        <Toaster position="top-center" reverseOrder={false} />
        <NavBar2 />
        <div className="d-flex mx-auto ">
          <form
            onSubmit={handleSubmit}
            style={{ width: "100px", margin: "10px" }}
          >
            <label htmlFor="Nome-input" style={{ color: "white" }}>
              Your Name:
            </label>
            <input
              type="string"
              name="userName"
              onChange={handleChange}
              value={form.userName}
              id="Nome-input"
            />

            <div>
              <label htmlFor="user-input" style={{ color: "white" }}>
                Login:
              </label>
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
                <label htmlFor="password-input" style={{ color: "white" }}>
                  Password:
                </label>
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
              className="btn btn-primary d-flex flex-column "
              onClick={handleSubmit}
              type="submit"
              style={{ margin: "10px" }}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
