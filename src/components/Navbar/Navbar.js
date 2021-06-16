import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const [ul, setUl] = useState(false);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const changeBackgroundUl = () => {
    if (window.scrollY >= 50) {
      setUl(true);
    } else {
      setUl(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  window.addEventListener("scroll", changeBackgroundUl);

  return (
    <>
      <Nav className={navbar ? "navbar active" : "navbar"}>
        <NavbarContainer>
          <NavLogo
            className={navbar ? "navbar active" : "navbar"}
            onClick={toggleHome}
            spy={true}
            smooth={true}
          >
            I
          </NavLogo>
          <MobileIcon className={ul ? "ul active" : "ul"} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                className={ul ? "ul active" : "ul"}
                to="about"
                spy={true}
                smooth={true}
                offset={-220}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className={ul ? "ul active" : "ul"}
                to="skills"
                spy={true}
                smooth={true}
              >
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className={ul ? "ul active" : "ul"}
                to="projects"
                spy={true}
                smooth={true}
                offset={-220}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className={ul ? "ul active" : "ul"}
                to="contact"
                spy={true}
                smooth={true}
                offset={-85}
              >
                Contact Me
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
