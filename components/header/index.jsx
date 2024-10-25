import "./header.css";
import ThemeSwitch from "./themeSwitch";

export default function Header() {
  return (
    <header className="header">
      <img className="page-logo" src="../img/logo.png" alt="logo" />
      <ThemeSwitch />
      <img className="profile-picture" src="../img/user.png" alt="user pic" />
    </header>
  );
}
