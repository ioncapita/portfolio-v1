import styled from "styled-components";
import { animated } from "react-spring";

export const SkillsContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgb(0, 128, 89) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  height: auto;
  transform: skew(0deg, -4deg) translateY(-170px);
  z-index: -9999;
`;

export const SkillsContent = styled.div`
  max-width: 1366px;
  margin: auto;
  transform: skew(0deg, 4deg);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
`;

export const Frontend = styled(animated.div)`
  padding: 35px 126px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  margin-right: 5px;
  margin-bottom: 10px;
  margin-top: 4rem;
  overflow: hidden;
  z-index: 9999;
`;
export const Backend = styled(animated.div)`
  padding: 35px 126px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  margin-right: 5px;
  margin-bottom: 10px;
  margin-top: 4rem;
  overflow: hidden;
  z-index: 9999;
`;
export const Tools = styled(animated.div)`
  padding: 35px 126px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  margin-right: 5px;
  margin-top: 4rem;
  overflow: hidden;
  z-index: 9999;
`;
export const Title = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  color: black;
  padding: 0 10px;
  border-color: black;
  border-style: solid;
  border-width: 0 2px 2px 2px;
  font-weight: 700;
  text-transform: uppercase;
`;
export const Image = styled.img`
  width: 4rem;

  @media screen and (max-width: 687px) {
    width: 3rem;
  }
`;

export const ListItem = styled.li`
  font-size: 1rem;
  font-weight: 700;
  list-style: none outside none;
`;

export const ImageSkills = styled.img`
  width: 2rem;
  margin-top: 5px;
  @media screen and (max-width: 687px) {
    width: 1.3rem;
  }
`;
