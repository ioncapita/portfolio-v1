import styled from "styled-components";

export const AboutContainer = styled.div`
  max-width: 1366px;
  height: 400px;
  margin: auto;
  margin-bottom: 5rem;
`;

export const BG = styled.div`
  background: var(--bg);
  padding-bottom: 11rem;
`;

export const Question = styled.h2`
  font-weight: 700;
  font-family: "Source Code Pro", monospace;
  color: #f5f5f5;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 4rem;
  padding-top: 2rem;
  font-size: 2.6rem;
  font-weight: 600;
`;

export const Hashtag = styled.span`
  margin-right: 0.5rem;
  color: #fd2155;
  text-shadow: 1px 1px 1px #05fdd8, 1px 2px 1px #05fdd8, 1px 3px 1px #05fdd8,
    1px 4px 1px #05fdd8, 1px 5px 1px #05fdd8, 1px 6px 1px #05fdd8,
    1px 7px 1px #05fdd8, 1px 8px 1px #05fdd8, 1px 9px 1px #05fdd8,
    1px 10px 1px #05fdd8, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
`;

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  letter-spacing: 2px;
`;

export const Position = styled.div`
  width: 90%;
  margin: auto;
`;

export const Name = styled.h2`
  color: #f5f5f5;
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 5px;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    var(--first-color) 0%,
    var(--second-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

export const Description = styled.p`
  color: #919191;
  letter-spacing: 1px;
  font-size: 1.1rem;
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutMeText = styled.div``;

export const Hello = styled.h3`
  color: #d1d1d1;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
`;
