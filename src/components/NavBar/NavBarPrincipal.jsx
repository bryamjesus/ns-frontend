import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/NavBar.css";

const NavBarPrincipal = () => {
  const [active, setActive] = useState(false);
  const refHambuerguer = useRef(null);

  useEffect(() => {
    // console.log(2)
    // const handelMenuActive = (e) => {
    //   console.log(e.path[0].className);
    //   console.log(active);
    //   if (
    //     active &&
    //     e.path[0].className !== "nav__links active" &&
    //     e.path[0].className !== "nav__hamburguer"
    //   ) {
    //     console.log("Ingeso")
    //     setActive(false);
    //   }
    //   e.preventDefault();
    // };
    // document.addEventListener("click", handelMenuActive, true);
    // return () => document.body.removeEventListener("click", handelMenuActive);
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="container nav__content">
          <Link to="/">
            <h1 className="nav__logo">Nacho Store</h1>
          </Link>

          <img
            src="./icon-hamburger.svg"
            alt="Icono de navegacion"
            className="nav__hamburguer"
            onClick={() => setActive((prev) => !prev)}
          />

          <div
            ref={refHambuerguer}
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
