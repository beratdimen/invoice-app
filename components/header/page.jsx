import css from './header.css'

export default function Header(){
  return(
    <header className='header'>
      <img className='pageLogo' src="../img/logo.png" alt="logo" />
      <img className='darkMode' src="../img/darkMode.png" alt="darkmode logo" />
      <img className='profilePicture' src="../img/user.png" alt="user pic" />
    </header>
  )
}