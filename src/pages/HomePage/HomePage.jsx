import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      {isLoggedIn ? <h1>Welcome, {user.name}!</h1> : <h1> Welcome!</h1>}{" "}
      {isLoggedIn ? (
        <h1>This is your own Phonebook!</h1>
      ) : (
        <h1>This is web Phonebook</h1>
      )}{" "}
      {!isLoggedIn ? (
        <p className={css.txt}>
          To start using the Phonebook you need to
          <NavLink to="/register" className={css.logTxt}>
            Register
          </NavLink>{" "}
          if you are a new user or
          <NavLink to="/login" className={css.logTxt}>
            Log in
          </NavLink>{" "}
          if you already have an account
        </p>
      ) : (
        <p className={css.txt}>
          To access your Phonebook, click on{"  "}
          <NavLink to="/contacts" className={css.logTxt}>
            Contacts
          </NavLink>
        </p>
      )}
    </div>
  );
}
