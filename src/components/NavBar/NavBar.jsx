import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import css from "./NavBar.module.css";
import clsx from "clsx";
import Artista from "../Artista/Artista";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const NavBar = () => {
  return (
    <nav className={css.nav}>
      <Link to="/">
        <img src={logo} alt="Logo" style={{ width: "60px", height: "60px" }} />
      </Link>

      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/gallery" className={buildLinkClass}>
        Galleria
      </NavLink>
      <NavLink to="/terms" className={buildLinkClass}>
        Termini e condizioni
      </NavLink>
      <NavLink to="/contacts" className={buildLinkClass}>
        Contatti
      </NavLink>

      <div className={css.artista}>
        <Artista />
      </div>
    </nav>
  );
};

export default NavBar;
