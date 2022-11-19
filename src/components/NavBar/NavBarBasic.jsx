import { Link } from "react-router-dom";

const NavBarBasic = () => {
  return (
    <>
      <nav className="nav">
        <div className="container nav__content">
          <Link to="/">
            <h1 className="nav__logo">Nacho Store</h1>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBarBasic;
