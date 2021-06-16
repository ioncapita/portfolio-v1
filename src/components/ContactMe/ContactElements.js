import styled from "styled-components";

export const ContactContainer = styled.div`
  height: auto;
`;

export const ConnectContainer = styled.div`
  height: 300px;
  max-width: 1366px;
  margin: auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
`;
export const QuoteContainer = styled.div``;

export const ListIcons = styled.div``;

export const Title = styled.div`
  background: linear-gradient(
    90deg,
    var(--first-color) 0%,
    var(--second-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 5px;
  padding-bottom: 3px;
  margin-bottom: 5px;
`;

export const Quote = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--first-color);
  text-align: center;

  @media screen and (max-width: 687px) {
    font-size: 1rem;
    font-weight: 300;
  }
`;
export const Icon = styled.div``;

export const WithMeContainer = styled.div`
  height: 100px;
  max-width: 1366px;
  margin: auto;
`;
export const Intro = styled.div``;

export const WorkContainer = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;

  @media screen and (max-width: 885px) {
    display: flex;
    justify-content: center;
  }
`;

export const Content = styled.div`
  max-width: 415px;
  height: auto;
  background: #3d3d3d;
  box-shadow: 0 8px 32px 0 rgba(121, 121, 121, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 1rem;

  @media screen and (max-width: 687px) {
  }
`;

export const WorkTitle = styled.h2`
  color: #1f1f1f;
  margin-bottom: 1rem;
`;

export const Position = styled.div`
  max-width: 1366px;
  margin: auto;
`;

export const Description = styled.p`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  text-align: center;
`;
