import React from "react";
import style from "./style.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function LogOut() {
    localStorage.setItem("user", JSON.stringify(false));
    navigate("/");
  }
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerContainer}>
          <Link className={style.logo} to={"/layout"}>
            LO<span>GO</span>
          </Link>
          <nav>
            <ul className={style.list}>
              <li>
                <NavLink className={style.listLink} to={"home"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={style.listLink} to={"infos"}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className={style.listLink} to={"infos"}>
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={LogOut} className="logout">
              Log out
            </button>
            <Link to={"/signup"} className="signUp">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
