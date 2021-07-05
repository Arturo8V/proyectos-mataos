import React from "react";
import { Link } from "react-router-dom";
import { setUserContext, userContext } from "./user";

function Nav() {
  const userInfo = React.useContext(userContext);
  const setUserInfo = React.useContext(setUserContext);
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navMainMenu"
        aria-controls="navMainMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navMainMenu" class="navbar-collapse collapse">
        <div class="navbar-lef navbar-nav ml-auto">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/Login" className="nav-item nav-link active">
            Login
          </Link>
          <Link to="/Noticias" className="nav-item nav-link">
            Noticias
          </Link>
          <Link to="/Estadisticas" className="nav-item nav-link">
            Estadísticas
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
