import { Link } from "react-router-dom";

export function Cards(props) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <h5
            className="card-title"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
              marginLeft: "50px",

              color: "",
              marginLeft: "50%",
            }}
          >{`Acesso ${props.user}`}</h5>

          <Link to={`/login/${props._id}`} className="btn btn-primary">
            Acessar Perfil!
          </Link>
        </div>
      </div>
    </div>
  );
}
