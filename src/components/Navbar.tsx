import logo from '../assets/images/spiral-high-resolution-logo-white-transparent.png'
import github from '../assets/images/icons8-github-512.png'
import '../assets/css/navbar.css'
import { useEffect } from 'react';

function Navbar() {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar') as HTMLElement;
            const scrollPosition = window.scrollY;

            if (scrollPosition > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className="navbar">
        <a href='/' className="logo">
            <img className='logo' src={logo} alt="SPIRAL_logo" />
        </a>
        <div className="nav_elements">
            <a href="#home" className="nav_element">Home</a>
            <a href="#description" className="nav_element">Description</a>
            <a href="#tools" className="nav_element">Tools</a>
            <a href="#contact" className="nav_element">Contact</a>
        </div>
        <div className="social_media">
            <a href='https://github.com/MohaSetif/create-spiral-app'>
                <img src={github} alt="github_icon" />
            </a>
        </div>
    </div>
  )
}

export default Navbar