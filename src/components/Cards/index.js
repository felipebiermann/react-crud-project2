import { Link } from "react-router-dom";

export function Cards(props) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div
          className="card"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",

            color: "",
            marginRight: "-15%",
            marginLeft: "80%",
            marginBottom: "10%",
            marginTop: "10%",
          }}
        >
          <h5
            className="card-title"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
              marginRight: "60%",
              color: "",
              marginLeft: "50%",
            }}
          >{`Acesso: ${props.user}`}</h5>

          <Link to={`/login/${props._id}`} className="btn btn-primary">
            Acessar Perfil!
          </Link>
        </div>
      </div>
    </div>
  );
}
