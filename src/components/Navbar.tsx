import logo from '../assets/images/spiral-high-resolution-logo-white-transparent.png'
import github from '../assets/images/icons8-github-512.png'
import '../assets/css/navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <a href='/' className="logo">
            <img className='logo' src={logo} alt="SPIRAL_logo" />
        </a>
        <div className="social_media">
            <a href='https://github.com/MohaSetif/create-spiral-app'>
                <img src={github} alt="github_icon" />
            </a>
        </div>
    </div>
  )
}

export default Navbar