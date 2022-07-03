import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function DetailsPage() {
  const { _id } = useParams();
  const [loginPage, setLoginPage] = useState([]);
  const navigate = useNavigate();
  console.log(loginPage);

  useEffect(() => {
    async function fetchLoginPage() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/react-crud-project2/${_id}`
        );

        setLoginPage(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchLoginPage();
  }, []);
  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/react-crud-project2/${_id}`
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Perfil {loginPage.user}</h1>
      <ul>
        <li>Login: {loginPage.user}</li>
        <li>Password: {loginPage.password}</li>
      </ul>
      {
        <Link to={`/edit-profile/${_id}`} className="btn btn-primary">
          Editar Perfil
        </Link>
      }
      <button className="btn btn-danger" onClick={handleDelete}>
        Deletar Perfil
      </button>
    </>
  );
}
