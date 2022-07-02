import { Link } from "react-router-dom";
// import { Cards } from "../../components/Cards";
// import axios from "axios";
// import { useEffect, useState } from "react";

export function Home() {
  return (
    <>
      <nav
        className="navbar navbar-dark bg-dark"
        style={{
          color: "white",
          backgroundColor: "rgb(25, 33, 41)",
          padding: "0px 0 14px 0",
        }}
      >
        <ul
          className="nav-bar-ul"
          style={{
            width: "1200px",
            margin: "0 auto",
            marginLeft: "90%",

            fontSize: "10px",
          }}
        >
          <li
            className="nav-bar-li"
            style={{
              float: "left",
              listStyleType: "none",
              textAlign: "center",
              width: "33%",
            }}
          >
            <Link
              to="/login-page"
              className="nav-bar-item"
              style={{
                color: "white",
                fontSize: "2em",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className="container, navbar navbar-dark bg-dark"
        style={{ textAlign: "center" }}
      >
        <h1
          style={{
            margin: "0px",
            fontFamily: "Blippo, fantasy",
            letterSpacing: "2px",
            color: "white",
            textAlign: "center",
          }}
        >
          TESTANDO
        </h1>
      </div>
    </>
  );
}
