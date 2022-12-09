import { Link } from "react-router-dom";
import "../../css/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container footer">
          <div className="footer__title">
            <Link to='/'>
              <h1 className="nav__logo nav__logo-footer">
                Nacho Store
              </h1>
            </Link>
          </div>
          <div className="footer__contacts">
            <div className="footer__contact">
              <a href=" https://wa.me/+51922286671?text=Quiero%20que%20me%20aclare%20algunas%20dudas" >
                <div className="footer__link">
                  <i className="bi bi-whatsapp"></i>
                  922286671
                </div>
              </a>
            </div>
            <div className="footer__contact">
              <div className="footer__link">
                <i className="bi bi-envelope-fill"></i>
                bryamtalledog@gmail.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
