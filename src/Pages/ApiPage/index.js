import { cloneElement, useEffect, useState } from "react";
import axios from "axios";
import { GameCards } from "../../components/GameCards";
import { NavBar } from "../../components/NavBar";
import { Toaster, toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

export function ApiPage() {
  const [apiPage, setApiPage] = useState([]);
  // const [search, setSearch] = useState("");
  // console.log(apiPage);
  const { _id } = useParams();

  // const [game, setGame] = useState([]);
  const [user, setUser] = useState({
    userName: "",
    login: "",
    password: "",
    games: [],
  });

  console.log("esse é o user", user);

  //Fazer um GET no ID que entrar na pagina "useEffect".
  //Fazer com que o obj do GAME clicado, entre no user.games, fazer um spread.
  //botão adicionar

  useEffect(() => {
    async function fetchId() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/react-crud-project2/${_id}`
        );
        console.log("esse é o ID", _id);
        console.log("essa é a resposta", response.data);
        setUser({ ...response.data });
        // setGame({ ...response.data.games });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchId();
  }, []);

  function handleClick(titulo) {
    // console.log(handleClick);
    //o handleClick serve para enviar as informaçoes para a API. No setUser definimos o usuario e suas propriedades.
    //o problema é que no inicio, "games" é vazio. E precisamos adicionar o titulo do jogo referente ao card mapeado.
    //pra isso precisamos enviar os dados do card para a função. Como fazer isso?

    //selectedItem foi mapeado pelo cartão e o botão clicado.

    setUser({ ...user, games: [...user.games, titulo.title] });
    handleSubmit();

    toast.success("Jogo Adicionado à sua Lista.", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  }

  async function handleSubmit() {
    // console.log(handleSubmit);
    // e.preventDefault();

    try {
      const clone = { ...user };
      delete clone._id;
      await axios.put(
        `https://ironrest.herokuapp.com/react-crud-project2/${_id}`,
        clone
      );
      console.log(_id);
      // console.log(clone);
    } catch (error) {
      console.log(error);
      console.log(_id, user);
    }
  }

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
      <section id="banner2">
        <Toaster />
        <div>
          <NavBar />

          <h1
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "100px",
            }}
          >
            Favorite Games List!
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
              // console.log(currentElement);
              return (
                <div>
                  <GameCards
                    title={currentElement.title}
                    id={currentElement.id}
                    // Estamos mapeando o objeto e suas propriedades.
                    // setSelectedItem={setSelectedItem}

                    //currentElement é o JOGO
                    // handleSubmit={handleSubmit}
                    // funcaoPassadaPorProps={handleClick}
                  />
                  <button
                    className="btn btn-success"
                    type="button"
                    // onClick={handleClick}

                    onClick={() => {
                      // setSelectedItem(currentElement);
                      handleClick(currentElement);
                      //Ação de enviar os dados mapeados para a variavel selectedItem
                    }}
                    style={{
                      textAlign: "center",
                      marginLeft: "120px",
                      marginBottom: "50px",
                    }}
                  >
                    Adicionar Jogo!
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
