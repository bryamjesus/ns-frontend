import { Link } from "react-router-dom";

const NavBarPrincipal = () => {
  return(
    <>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  )
};
export default NavBarPrincipal;
