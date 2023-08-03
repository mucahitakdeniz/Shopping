import logo from "../assets/logo.png";
import basket from "../assets/basket.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <Link rel="stylesheet" to="/">
          <img src={logo} className="logo" alt="logo" />{" "}
        </Link>

        <h2>Clarus Shopping</h2>
      </div>
      <div>
        <Link rel="stylesheet" to="/basket">
          <img src={basket} className="basketLogo" alt="basket" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
