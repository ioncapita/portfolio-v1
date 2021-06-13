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

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const [ul, setUl] = useState(false);

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
          <NavLogo className={navbar ? "navbar active" : "navbar"} to="/">
            CAPITA
          </NavLogo>
          <MobileIcon className={ul ? "ul active" : "ul"} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks className={ul ? "ul active" : "ul"} to="about">
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className={ul ? "ul active" : "ul"} to="skills">
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className={ul ? "ul active" : "ul"} to="projects">
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
