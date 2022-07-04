import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <h1>Essa página não existe</h1>
      <Link to="/" className="btn btn-success">
        Voltar para o início.
      </Link>
    </>
  );
}
