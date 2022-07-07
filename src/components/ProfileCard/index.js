export function ProfileCard(props) {
  // console.log(props.game);
  return (
    <>
      <div
        className="card text-black flex-column mb-4 p-1 d-flex text-center"
        style={{ width: "18rem" }}
      >
        <div>
          <div>
            <img
              src={`https://www.freetogame.com/g/${props.game.id}/thumbnail.jpg`}
              className="card-img-top"
              alt={props.thumbnail}
            />
            <h5
              className="card-title mb-1"
              style={{ textAlign: "center" }}
            >{`${props.game.title}`}</h5>
            {/* <h6 className="card-body">{`Descrição: ${props.short_description}`}</h6> */}
            {/* <button
            // to={`/profile/${props.id}`}
            className="btn btn-dark"
            style={{ textAlign: "center" }}
            onClick={props.funcaoPassadaPorProps}
          >
            Adicionar Jogo!
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
