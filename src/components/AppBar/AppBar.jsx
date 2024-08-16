import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";

export default function AppBar() {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.container}>
      <Navigation />
      {isLoggenIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
