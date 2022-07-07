import { Link } from "react-router-dom";
import { Cards } from "../../components/Cards";
import axios from "axios";
import { useEffect, useState } from "react";
import GameAcademy from "../../assets/game-academy-cinza.png";
import "../../assets/app.css";
export function Home() {
  const [crudComunnity, setCrudComunnity] = useState([]);
  console.log(crudComunnity);

  useEffect(() => {
    async function fetchCrud() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/react-crud-project2"
      );
      setCrudComunnity([...response.data]);
    }
    fetchCrud();
  }, []);

  return (
    <>
      <section id="banner">
        <img src={GameAcademy} className="logo" />

        <div className="banner-text">
          <h1 className="text">Game Academy</h1>
          <div className="animation">
            <p className="first">Make Your Game List.</p>
          </div>
          <div className="banner-btn">
            <a href="http://localhost:3000/login-page">
              <span></span>
              <b>Create Account</b>
            </a>
          </div>
        </div>

        {crudComunnity.map((currentCrud) => {
          return <Cards userName={currentCrud.userName} id={currentCrud._id} />;
        })}
      </section>
    </>
  );
}
