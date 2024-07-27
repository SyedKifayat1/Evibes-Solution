import React, { useEffect, useState } from 'react';
import './navbar.css';
import Logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import useScrollToTop from '../ScrollToTop';
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  
  useScrollToTop();
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
    if (navbarToggler) {
      navbarToggler.addEventListener('click', handleNavToggle);
    }

    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-collapse') && !event.target.closest('.navbar-toggler')) {
        document.body.classList.remove('no-scroll');
      }
    };

    

    document.addEventListener('click', handleClickOutside);

    const closeDropDownLinks = document.querySelectorAll('.close-drop-down');
    closeDropDownLinks.forEach(link => {
      link.addEventListener('click', () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const isNavbarExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
        if (isNavbarExpanded) {
          navbarToggler.click();
        }
      });
    });

    return () => {
      if (navbarToggler) {
        navbarToggler.removeEventListener('click', handleNavToggle);
      }
      document.removeEventListener('click', handleClickOutside);
      closeDropDownLinks.forEach(link => {
        link.removeEventListener('click', () => {
          const navbarToggler = document.querySelector('.navbar-toggler');
          const isNavbarExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
          if (isNavbarExpanded) {
            navbarToggler.click();
          }
        });
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

  

  return (
    <nav className={`navbar navbar-expand-lg ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className='logo' src={Logo} alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-icon-toggle"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-lg-5 me-lg-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link close-drop-down" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item close-drop-down" to="/digital-marketing">Digital Marketing</Link></li>
                <li><Link className="dropdown-item close-drop-down" to="/web-dev">Web Development</Link></li>
                <li><Link className="dropdown-item close-drop-down" to="/ui-ux">UI/UX</Link></li>
                <li><Link className="dropdown-item close-drop-down" to="/seo-service">Search Engine Optimization</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link close-drop-down" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link close-drop-down" to="/contact-us">Contact</Link>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link close-drop-down" to="/blogs">Blog</Link> */}
            </li>
          </ul>
          <button className="btn" type="submit">Get a Quote</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
