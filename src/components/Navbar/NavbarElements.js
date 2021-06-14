import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.6s ease-in-out;

  &.active {
    background: linear-gradient(
      90deg,
      rgb(0, 128, 89) 0%,
      rgba(255, 255, 255, 1) 100%
    );
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
  color: var(--logo);
  font-family: "Shadows Into Light", cursive;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.9rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  transition: 0.6s;
  padding-top: 40px;

  &.active {
    color: var(--first-color);
    font-size: 1.2rem;
    font-weight: 700;
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
    transition: 0.6s;
    cursor: pointer;
    color: var(--text);

    &.active {
      font-size: 1.5rem;
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
  text-transform: uppercase;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;

  a {
    &:hover {
      color: #9e7400;
    }
  }
`;

export const NavLinks = styled(LinkS)`
  color: var(--text);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.6s ease-in-out;
  padding-top: 40px;

  &.active {
    color: var(--first-color);
    font-size: 1rem;
    font-weight: 400;
    padding-top: 1px;
  }
`;
