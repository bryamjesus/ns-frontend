import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/NavBar.css";

const NavBarPrincipal = () => {
  const [active, setActive] = useState(false);
  const handleActiveBar = (e) => {
    e.preventDefault();
    console.log(e);
    setActive(!active);
  };

  const handelMenuActive = (e) => {
    
  };

  return (
    <>
      <nav className="nav">
        <div className="container nav__content">
          <Link to="/">
            <h1 className="nav__logo">Nacho Store</h1>
          </Link>

          <img
            src="./public/icon-hamburger.svg"
            alt="Icono de navegacion"
            className="nav__hamburguer"
            onClick={handleActiveBar}
          />

          <div
            onClick={handleActiveBar}
            className={`nav__links ${active ? "active" : ""}`}
          >
            <Link to="/login" className="nav__link">
              Iniciar Sesion
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBarPrincipal;
