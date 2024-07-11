import React, { useEffect } from 'react';
import './navbar.css';
import Logo from '../assets/logo.png';

const Navbar = () => {
  useEffect(() => {
    const handleNavToggle = () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const isNavbarExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
      if (isNavbarExpanded) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    };

    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', handleNavToggle);

    // Add event listener for when the navbar is closed via clicking outside or other means
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.navbar-collapse') && !event.target.closest('.navbar-toggler')) {
        document.body.classList.remove('no-scroll');
      }
    });

    return () => {
      navbarToggler.removeEventListener('click', handleNavToggle);
      document.removeEventListener('click', handleNavToggle);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#"><img className='logo' src={Logo} alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-lg-5 me-lg-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Digital Marketing</a></li>
                <li><a className="dropdown-item" href="#">Web Development</a></li>
                <li><a className="dropdown-item" href="#">UI/UX</a></li>
                <li><a className="dropdown-item" href="#">Search Engine Optimization</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
          </ul>
          <button className="btn" type="submit">Get a Quote</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
