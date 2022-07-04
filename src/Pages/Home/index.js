import { Link } from "react-router-dom";
import { Cards } from "../../components/Cards";
import axios from "axios";
import { useEffect, useState } from "react";
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
      <div>
        <nav
          className="navbar navbar-dark bg-dark"
          style={{
            color: "white",

            padding: "0px 0 14px 0",
          }}
        >
          <ul className="nav-bar-ul justify-content-end">
            <li
              className="nav-bar-li text-right mt-1 "
              style={{
                listStyleType: "none",
              }}
            >
              <Link to="/login-page">
                <button className="btn btn-outline-success ">
                  CRIAR CONTA
                </button>
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className="container, navbar navbar-dark bg-dark"
          style={{ textAlign: "center" }}
        >
          <h1
            style={{
              fontFamily: "Blippo, fantasy",
              letterSpacing: "2px",
              marginRight: "10px",
              marginLeft: "570px",
              text: "center",
              color: "white",
              textAlign: "center",
            }}
          >
            Game Academy
          </h1>
        </div>
        {crudComunnity.map((currentCrud) => {
          return (
            <Cards
              style={{ marginLeft: "500px" }}
              userName={currentCrud.userName}
              id={currentCrud._id}
            />
          );
        })}
      </div>
    </>
  );
}
