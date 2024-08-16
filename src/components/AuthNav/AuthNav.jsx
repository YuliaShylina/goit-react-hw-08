import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <div className={css.logContainer}>
      <NavLink to="/register" className={makeLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={makeLinkClass}>
        Log in
      </NavLink>
    </div>
  );
}
