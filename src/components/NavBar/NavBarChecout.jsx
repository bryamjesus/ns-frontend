import { Link } from "react-router-dom";
import "../../css/NavBar.css";

const NavBarCheckout = () => {
  return (
    <>
      <nav className="nav">
        <div className="container nav__content">
          <Link to="/">
            <h1 className="nav__logo">Nacho Store</h1>
          </Link>
          <div>
            <Link to='/cart-shopping'>Cancelar</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarCheckout;
