import { Link } from "react-router-dom";

export function Cards(props) {
  console.log(props);
  return (
    <div className="row">
      <div className="col-sm-6">
        <div
          className="card text-white bg-success mb-3"
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
          >{`Acesso: ${props.userName}`}</h5>

          <Link to={`/profile/${props.id}`} className="btn btn-outline-dark">
            Acessar Perfil!
          </Link>
        </div>
      </div>
    </div>
  );
}
