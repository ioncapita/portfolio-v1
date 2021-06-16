import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            spy={true}
            smooth={true}
            onClick={toggle}
            offset={-80}
          >
            # About
          </SidebarLink>
          <SidebarLink
            to="skills"
            spy={true}
            smooth={true}
            onClick={toggle}
            offset={-40}
          >
            # Skills
          </SidebarLink>
          <SidebarLink
            to="projects"
            spy={true}
            smooth={true}
            onClick={toggle}
            offset={-50}
          >
            # Projects
          </SidebarLink>
          <SidebarLink to="contact" spy={true} smooth={true} onClick={toggle}>
            # Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
