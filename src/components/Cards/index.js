import { Link } from "react-router-dom";
import gamesJoystick from "../../assets/games.png";

export function Cards(props) {
  console.log(props);
  return (
    <div
      className="card mx-4 mt-4 d-flex text-center justify-content-around"
      style={{ width: "18rem" }}
    >
      <div className="card border-light mb-3  ">
        <h5 className="card-title text-center">{`Acesso: ${props.userName}`}</h5>
        <img class="card-img-top" src={gamesJoystick} alt="Card image cap" />
        <Link to={`/auth-page/${props.id}`} className="btn btn-dark mt-5">
          Acessar Perfil!
        </Link>
      </div>
    </div>
  );
}
