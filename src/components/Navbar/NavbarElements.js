import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  //   margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.6s ease-in-out;

  &.active {
    background: white;
  }

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1366px;
`;

export const NavLogo = styled(LinkR)`
  color: #255784;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 500;
  letter-spacing: 2px;
  text-decoration: none;
  transition: 0.6s;
  padding-top: 40px;

  &.active {
    color: #255784;
    font-size: 1.2rem;
    font-weight: 500;
    padding-top: 1px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    padding-top: 0.5rem;
    transition: 0.6s;
    cursor: pointer;
    color: #255784;

    &.active {
      padding-top: 0;
      font-size: 1.7rem;
    }
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  font-weight: 400;
  font-size: 1.1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #255784;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.6s ease-in-out;
  padding-top: 40px;

  &.active {
    color: #255784;
    font-size: 1rem;
    font-weight: 400;
    padding-top: 1px;
  }

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
