import { Link } from "react-router-dom";
import NavBarIMG from "../../assets/navbar.png";
export function NavBar() {
  return (
    <>
      <Link to={"/"}>
        <img src={NavBarIMG} style={{ cursor: "pointer", width: "35px" }} />
      </Link>
    </>
  );
}
