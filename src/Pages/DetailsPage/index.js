import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { ProfileCard } from "../../components/ProfileCard";

export function DetailsPage(props) {
  // console.log(numbPass);
  const { _id } = useParams();

  // const [games, setGames] = useState([]);
  const [loginPage, setLoginPage] = useState({
    userName: "",
    login: "",
    games: [],
  });
  const navigate = useNavigate();
  // console.log(loginPage);

  useEffect(() => {
    async function fetchLoginPage() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/react-crud-project2/${_id}`
        );

        setLoginPage({ ...response.data });
        // console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchLoginPage();
  }, [_id]);
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
      <section id="banner">
        <NavBar />
        <h1 style={{ color: "white" }}>Welcome, {loginPage.userName}!</h1>
        <h4 style={{ color: "white" }}>Your Account:</h4>
        <ul>
          <li style={{ color: "white" }}>Login: {loginPage.login}</li>
          <li style={{ color: "white" }}>Password: *******</li>
        </ul>
        <h4 style={{ color: "white" }}>Favorites Games:</h4>{" "}
        {loginPage.games.map((current) => {
          console.log(current);
          return (
            <div key={current.id}>
              {" "}
              <ProfileCard
                style={{ marginLeft: "500px" }}
                game={current}
              />;{" "}
            </div>
          );
        })}
        {
          <Link to={`/edit-profile/${_id}`} className="btn btn-primary">
            Edit Profile
          </Link>
        }
        <button className="btn btn-danger" onClick={handleDelete}>
          Delet Profile
        </button>
      </section>
    </>
  );
}
