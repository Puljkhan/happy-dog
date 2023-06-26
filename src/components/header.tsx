import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/images/logo.png";

type HeaderProps = {
  toggleSidebar: () => void;
};

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <img
          onClick={toggleSidebar}
          className="header__logo"
          src={logo}
          alt="Fox sitting"
        />

        <nav className="header__nav">
          <NavLink className="header__nav__link" to="/">
            Home
          </NavLink>
          <NavLink className="header__nav__link" to="/contact">
            Contact
          </NavLink>
          <NavLink className="header__nav__link" to="/animals">
            Animals
          </NavLink>
        </nav>
      </header>
    </div>
  );
};
export default Header;
