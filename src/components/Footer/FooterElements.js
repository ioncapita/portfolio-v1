import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  margin: auto;
  height: 120px;
  margin-top: 10rem;
  display: flex;
  text-align: center;
  background: #3d3d3d;
  box-shadow: 0 8px 32px 0 rgba(121, 121, 121, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  @media screen and (max-width: 768px) {
    height: 80px;
  }
`;
export const LeftContainer = styled.div`
  width: 49%;
`;
export const Name = styled.h1`
  background: linear-gradient(
    90deg,
    var(--first-color) 0%,
    var(--second-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 5px;
  padding-bottom: 3px;
  margin-bottom: 5px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const Quote = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--first-color);

  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;
export const ListIcons = styled.div``;
export const Address = styled.h2`
  color: var(--first-color);
  margin-bottom: 0.5rem;
  margin-top: 0.3rem;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const EmailText = styled.h3`
  color: var(--first-color);
  margin-bottom: 0.5rem;
  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

export const RightContainer = styled.div`
  width: 49%;
  text-align: center;
`;
export const Copyright = styled.p`
  color: var(--first-color);
  font-size: 0.8rem;
`;
