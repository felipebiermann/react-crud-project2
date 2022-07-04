import { useEffect, useState } from "react";
import axios from "axios";
import { GameCards } from "../../components/GameCards";
import { NavBar } from "../../components/NavBar";
// import { Link } from "react-router-dom";

export function ApiPage() {
  const [apiPage, setApiPage] = useState([]);
  const [search, setSearch] = useState("");
  console.log(apiPage);

  useEffect(() => {
    function fetchApiPage() {
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        headers: {
          "X-RapidAPI-Key":
            "2e1963f918mshc6c6cff5fbca51bp150da1jsn1478ea2d476b",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          const arrayMenor = response.data.slice(-100);
          setApiPage(arrayMenor);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    fetchApiPage();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <NavBar />
        <h1
          style={{ color: "white", textAlign: "center", marginBottom: "100px" }}
        >
          JOGOS
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "50px",

            justifyContent: "space-between",
          }}
        >
          {apiPage.map((currentElement) => {
            return (
              <div>
                <GameCards
                  title={currentElement.title}
                  id={currentElement.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
