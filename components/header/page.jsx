import css from './header.css'

export default function Header(){

  return(
    <header>
      <img src="../img/logo.png" alt="logo" />
      <img src="../img/darkMode.png" alt="darkmode logo" />
      <div className="line"></div>
      <img src="../img/user.png" alt="user pic" />
    </header>
  )
}