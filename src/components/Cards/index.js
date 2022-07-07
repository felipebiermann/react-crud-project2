import { Link } from "react-router-dom";
import gamesJoystick from "../../assets/cara.jpg";

export function Cards(props) {
  console.log(props);
  return (
    <div
      className="card m-1 mb-4 p-1 "
      style={{
        width: "18rem",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <div className="card border-light ">
        <h5 className="card-title text-center">{`Profile: ${props.userName}`}</h5>
        <img class="card-img-top" src={gamesJoystick} alt="Card image cap" />
        <Link to={`/auth-page/${props.id}`} className="btn btn-dark mt-3 ">
          Access Profile!
        </Link>
      </div>
    </div>
  );
}
