import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #1d1d1d;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s ease-in-out;

  &.active {
    box-shadow: 0 8px 32px 0 rgba(121, 121, 121, 0.37);
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    height: 80px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 100%
    );
    backdrop-filter: blur(5px);
  }

  @media screen and (max-width: 960px) {
    transition: 0.3s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1366px;
`;

export const NavLogo = styled(LinkR)`
  font-family: "Source Code Pro", monospace;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.3s;
  text-transform: uppercase;
  font-size: 5em;
  font-weight: 700;
  padding-top: 40px;
  color: #fd2155;
  transform: rotateZ(340deg);
  text-shadow: 1px 1px 1px #05fdd8, 1px 2px 1px #05fdd8, 1px 3px 1px #05fdd8,
    1px 4px 1px #05fdd8, 1px 5px 1px #05fdd8, 1px 6px 1px #05fdd8,
    1px 7px 1px #05fdd8, 1px 8px 1px #05fdd8, 1px 9px 1px #05fdd8,
    1px 10px 1px #05fdd8, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);

  &.active {
    color: #fd2155;
    transform: rotateZ(340deg);
    text-shadow: 1px 1px 1px #05fdd8, 1px 2px 1px #05fdd8, 1px 3px 1px #05fdd8,
      1px 4px 1px #05fdd8, 1px 5px 1px #05fdd8, 1px 6px 1px #05fdd8,
      1px 7px 1px #05fdd8, 1px 8px 1px #05fdd8, 1px 9px 1px #05fdd8,
      1px 10px 1px #05fdd8, 1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
      1px 30px 60px rgba(16, 16, 16, 0.4);
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
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
    font-size: 2rem;
    transition: 0.6s;
    cursor: pointer;
    color: #fd2155;

    &.active {
      font-size: 2rem;
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
  height: 60px;

  a {
    &:hover {
      color: #fd2155;
    }
  }
`;

export const NavLinks = styled(LinkS)`
  color: #05fdd8;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  padding-top: 40px;
  font-weight: 600;

  &.active {
    color: #fd2155;
    font-weight: 600;
    padding-top: 1px;
  }
`;
