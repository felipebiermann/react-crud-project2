import { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

export function ApiPage() {
  const [apiPage, setApiPage] = useState([]);
  console.log(apiPage);

  //   const options = {
  //     method: "GET",
  //     url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
  //     params: { id: "452" },
  //     headers: {
  //       "X-RapidAPI-Key": "2e1963f918mshc6c6cff5fbca51bp150da1jsn1478ea2d476b",
  //       "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });

  //   useEffect(() => {
  //     async function fetchApiPage() {
  //       try {
  //         const response = await axios.get(
  //           "https://www.freetogame.com/api/games?api_key=2e1963f918mshc6c6cff5fbca51bp150da1jsn1478ea2d476b"
  //         );
  //         setApiPage(response.data.results);
  //         console.log(response);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //     fetchApiPage();
  //   }, []);

  return (
    <>
      <select>
        {apiPage.map((currentElement) => {
          return (
            <option value={currentElement.title}>{currentElement.title}</option>
          );
        })}
      </select>
    </>
  );
}
