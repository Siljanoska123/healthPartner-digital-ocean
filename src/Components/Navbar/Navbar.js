import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from '../../assets/logo22.png'
import { Link as ScrollLink } from 'react-scroll'
import menu_icon from '../../assets/menu_icon.png'


import { NavLink as RouterLink, useLocation, useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll";


function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }




  // za redirekkt
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;
  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -260,
      spy: true
    });
  };

  const goToPageAndScrollAbout = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -150,
      spy: true
    });
  };

  const goToPageAndScrollServoce = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -200,
      spy: true
    });
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt='' className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <ScrollLink
           onClick={() => goToPageAndScroll("hero")}
          // to='hero'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
            Home
          </ScrollLink>
        </li>
        {/* <li>
          <ScrollLink
            // to='programs'
            onClick={() => goToPageAndScroll("programs")}
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}>
            Programs
          </ScrollLink>
        </li> */}
        <li>
          <ScrollLink
            // to='about'
            onClick={() => goToPageAndScrollAbout("about")}
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}>
            About us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            // to='services'
            onClick={() => goToPageAndScrollServoce("services")}
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}>
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
              onClick={() => goToPageAndScroll("experience")}
            // to='reviews'
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}>
            Why Us?
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
              onClick={() => goToPageAndScroll("reviews")}
            // to='reviews'
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}>
            Reviews
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            onClick={() => goToPageAndScroll("contact")}
            // to='contact'
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}
            className='btn'>
            Contact us
          </ScrollLink>
        </li>
      </ul>
      <scan className='menu-icon'
        onClick={toggleMenu}>
        <ion-icon name="grid-outline"></ion-icon>
      </scan>
      {/* <img src={menu_icon} alt='' className='menu-icon'
        onClick={toggleMenu} /> */}
    </nav>
  )
}

export default Navbar
