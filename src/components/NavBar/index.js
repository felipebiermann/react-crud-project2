import { Link } from "react-router-dom";
import NavBarIMG from "../../assets/Home-Download-PNG.png";
export function NavBar() {
  return (
    <>
      <Link to={"/"}>
        <img
          className="mt-3 mx-2"
          src={NavBarIMG}
          style={{ cursor: "pointer", width: "35px" }}
        />
      </Link>
    </>
  );
}
