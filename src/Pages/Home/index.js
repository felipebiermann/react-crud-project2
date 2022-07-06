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
            padding: "0px 14px",
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
                <button
                  className="btn btn-outline-success"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Toque para criar sua conta."
                >
                  {" "}
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
              marginRight: "8px",
              marginLeft: "613px",
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
