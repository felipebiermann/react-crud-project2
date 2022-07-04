import { Link } from "react-router-dom";

export function GameCards(props) {
  console.log(props);
  return (
    <div className="card text-black flex-column mb-4 p-1 d-flex text-center">
      <div>
        <div>
          <img
            src={`https://www.freetogame.com/g/${props.id}/thumbnail.jpg`}
            className="card-img-top"
            alt={props.thumbnail}
          />
          <h5
            className="card-title"
            style={{ textAlign: "center" }}
          >{`${props.title}`}</h5>
          {/* <h6 className="card-body">{`Descrição: ${props.short_description}`}</h6> */}

          <Link
            to={`/profile/${props.id}`}
            className="btn btn-dark"
            style={{ textAlign: "center" }}
          >
            Adicionar Jogo!
          </Link>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="d-flex p-3 flex-column mb-10">
      <div className="card" style={{ width: "18rem" }}></div> */
}
