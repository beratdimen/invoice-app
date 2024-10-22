import "./header.css";

export default function Header(){
  return(
    <header className='header'>
      <img className='page-logo' src="../img/logo.png" alt="logo" />
      <img className='dark-mode' src="../img/darkMode.png" alt="darkmode logo" />
      <img className='profile-picture' src="../img/user.png" alt="user pic" />
    </header>
  );
}
