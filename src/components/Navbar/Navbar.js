import React, { useState, useEffect } from "react";
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

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const toggleAbout = () => {
    scroll.scrollTo(570);
  };
  const toggleSkills = () => {
    scroll.scrollTo(1290);
  };
  const toggleProjects = () => {
    scroll.scrollTo(2540);
  };

  const changeBackgroundUl = () => {
    if (window.scrollY >= 30) {
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
            onClick={toggleHome}
            className={navbar ? "navbar active" : "navbar"}
            to="/"
          >
            CAPITA
          </NavLogo>
          <MobileIcon className={ul ? "ul active" : "ul"} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                onClick={toggleAbout}
                className={ul ? "ul active" : "ul"}
                to="about"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                onClick={toggleSkills}
                className={ul ? "ul active" : "ul"}
                to="skills"
              >
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                onClick={toggleProjects}
                className={ul ? "ul active" : "ul"}
                to="projects"
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className={ul ? "ul active" : "ul"} to="contact">
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
