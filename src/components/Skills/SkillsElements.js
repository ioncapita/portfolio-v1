import styled from "styled-components";
import { animated } from "react-spring";

export const SkillsContainer = styled.div`
  height: auto;
  transform: skew(0deg, 8deg) translateY(-180px);
  z-index: -9999;
  padding-bottom: 100px;
  background: #1d1d1d;
`;

export const SkillsContent = styled.div`
  max-width: 1366px;
  margin: auto;
  transform: skew(0deg, 4deg);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  padding-bottom: 30px;
  margin-top: 20rem;
  transform: skew(0deg, -8deg);

  @media screen and (max-width: 687px) {
    width: 50%;
  }
`;

export const Frontend = styled(animated.div)`
  padding: 35px 126px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  margin-right: 5px;
  margin-bottom: 10px;
  margin-top: 12rem;
  overflow: hidden;
  z-index: 9999;

  @media screen and (max-width: 687px) {
    margin-top: 14rem;
  }
`;
export const Backend = styled(animated.div)`
  padding: 35px 126px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  margin-right: 5px;
  margin-bottom: 10px;
  margin-top: 12rem;
  overflow: hidden;
  z-index: 9999;

  @media screen and (max-width: 687px) {
    margin-top: 3rem;
  }
`;
export const Tools = styled(animated.div)`
  padding: 35px 126px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  margin-right: 5px;
  margin-top: 12rem;
  overflow: hidden;
  z-index: 9999;

  @media screen and (max-width: 687px) {
    margin-top: 3rem;
  }
`;
export const Title = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  color: #1f1f1f;
  padding: 0 10px;
  font-weight: 700;
  text-transform: uppercase;
  @media screen and (max-width: 687px) {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
`;

export const Hashtag = styled.div`
  margin-right: 0.5rem;
  color: #fd2155;
  text-shadow: 1px 1px 1px #05fdd8, 1px 2px 1px #05fdd8, 1px 3px 1px #05fdd8,
    1px 4px 1px #05fdd8, 1px 5px 1px #05fdd8, 1px 6px 1px #05fdd8,
    1px 7px 1px #05fdd8, 1px 8px 1px #05fdd8, 1px 9px 1px #05fdd8,
    1px 10px 1px #05fdd8, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
`;

export const Image = styled.img`
  width: 3rem;

  @media screen and (max-width: 687px) {
    width: 2.5rem;
    position: absolute;
    top: 10px;
    left: 110px;
  }
`;

export const AlignedItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0 10px 0;

  @media screen and (max-width: 687px) {
    display: flex;
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  font-size: 1rem;
  font-weight: 700;
  list-style: none outside none;
  color: #1f1f1f;
`;

export const ImageSkills = styled.img`
  width: 1.5rem;
  margin-right: 5px;

  @media screen and (max-width: 687px) {
    width: 1.3rem;
  }
`;

export const QuoteContent = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--first-color);
  margin-top: 1rem;

  @media screen and (max-width: 687px) {
    font-size: 1rem;
    font-weight: 300;
  }
`;

export const TitleContent = styled.h1`
  width: 100%;
  margin: auto;
  font-weight: 700;
  font-family: "Source Code Pro", monospace;
  color: #f5f5f5;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-top: 2rem;
  font-size: 2.6rem;
  font-weight: 600;
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 1%;
  left: 50%;
  transform: translate(-50%, -11%);
  margin-top: 5px;
`;
