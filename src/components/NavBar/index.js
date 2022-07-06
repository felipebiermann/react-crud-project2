import { Link } from "react-router-dom";
import NavBarIMG from "../../assets/Home-Download-PNG.png";
import ProfileIMG from "../../assets/profileimg2.png";
import { useParams } from "react-router-dom";

export function NavBar() {
  const { _id } = useParams();
  return (
    <>
      <Link to={"/"}>
        <img
          className="mt-3 mx-2"
          src={NavBarIMG}
          style={{ cursor: "pointer", width: "35px" }}
        />
      </Link>
      <Link to={`/profile/${_id}`}>
        <img
          className="mt-3 mx-2"
          src={ProfileIMG}
          alt="profileimg"
          style={{ cursor: "pointer", width: "35px" }}
        />
      </Link>
      ;
    </>
  );
}
