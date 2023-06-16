import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header__wrapper">
      <header>
        <img src={Logo} alt="Dog" />
        <div>Logo</div>
        <nav>
          <NavLink
            className={`header__nav__link ${({ isActive }: LinkType) =>
              isActive ? "active" : ""}`}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink to={"contact"}>Contact</NavLink>
        </nav>
      </header>
    </div>
  );
};
export default Header;
