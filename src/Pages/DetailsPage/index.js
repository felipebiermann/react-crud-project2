import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { ProfileCard } from "../../components/ProfileCard";

export function DetailsPage(props) {
  const numbPass = [props.password].slice(-4);
  // console.log(numbPass);
  const { _id } = useParams();

  // const [games, setGames] = useState([]);
  const [loginPage, setLoginPage] = useState([]);
  const navigate = useNavigate();
  // console.log([...loginPage.games]);

  useEffect(() => {
    async function fetchLoginPage() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/react-crud-project2/${_id}`
        );

        setLoginPage([...response.data.games]);
        console.log(response.data.games);
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
      <NavBar />
      <h1 style={{ color: "white" }}>Seja bem vindo, {loginPage.userName}!</h1>
      <h4 style={{ color: "white" }}>Suas informações:</h4>
      <ul>
        <li style={{ color: "white" }}>Login: {loginPage.login}</li>
        <li style={{ color: "white" }}>Password: *******</li>
      </ul>
      <h4 style={{ color: "white" }}>Jogos Favoritos:</h4>{" "}
      {loginPage.map((current) => {
        return (
          <ProfileCard
            style={{ marginLeft: "500px" }}
            userName={current.userName}
            id={current._id}
            games={current.data}
          />
        );
      })}
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
