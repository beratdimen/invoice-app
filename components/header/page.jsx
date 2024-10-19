import "./header.css";

export default function Header() {
  return (
    <header>
      <img className="logo" src="../img/logo.png" alt="logo" />

      <div className="options">
        <img
          className="darkmode"
          src="../img/darkMode.png"
          alt="darkmode logo"
        />
        <div className="line"></div>
        <img className="userAvatar" src="../img/user.png" alt="user pic" />
      </div>
    </header>
  );
}
