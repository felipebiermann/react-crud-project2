import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { Toaster, toast } from "react-hot-toast";

export function EditProfile() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user: "",
    password: "",
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
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user-input">Login:</label>
          <input
            type="string"
            name="user"
            onChange={handleChange}
            value={form.user}
            id="user-input"
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
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}
