import { Link } from "react-router-dom";
import gamesJoystick from "../../assets/cara.jpg";

export function Cards(props) {
  console.log(props);
  return (
    <div
      className="card mx-4 mt-4 d-flex flex-column mx-auto d-block flex-column "
      style={{ width: "18rem" }}
    >
      <div className="card border-light ">
        <h5 className="card-title text-center">{`Acesso: ${props.userName}`}</h5>
        <img class="card-img-top" src={gamesJoystick} alt="Card image cap" />
        <Link to={`/auth-page/${props.id}`} className="btn btn-dark mt-5">
          Acessar Perfil!
        </Link>
      </div>
    </div>
  );
}
