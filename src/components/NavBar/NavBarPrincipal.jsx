import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import "../../css/NavBar.css";

const NavBarPrincipal = () => {
  const { name, role, logout, token } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const refHambuerguer = useRef(null);

  const handleLogut = () => {
    logout();
    navigate("/");
  };

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
            <Link to="/cart-shopping" className="nav__link">
              <img src="/cart4.svg" />
            </Link>
            {token ? (
              <Link onClick={handleLogut} className="nav__link">
                Cerrar Sesión
              </Link>
            ) : (
              <Link to="/login" className="nav__link">
                Iniciar Sesion
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBarPrincipal;
