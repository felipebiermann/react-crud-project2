import { Cards } from "../../components/Cards";
import axios from "axios";
import { useEffect, useState } from "react";
import GameAcademy from "../../assets/game-academy-cinza.png";
import "../../assets/app.css";
export function Home() {
  const [crudComunnity, setCrudComunnity] = useState([]);
  // console.log(crudComunnity);

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
        <img src={GameAcademy} className="logo" alt="#" />

        <div className="banner-text">
          <h1 className="text">Make Your Game List.</h1>
          <div className="animation">
            <p className="first">Here, you can find your Favorite Games.</p>
          </div>
          <div className="banner-btn">
            <a href="https://game-academy.netlify.app/login-page">
              <span></span>
              <b>Create Account</b>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          {crudComunnity.map((currentCrud) => {
            return (
              <div key={currentCrud.userName}>
                {" "}
                <Cards userName={currentCrud.userName} id={currentCrud._id} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
