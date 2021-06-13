import styled from "styled-components";

export const SkillsContainer = styled.div`
  background: #eff7fa;
  height: 800px;
  transform: skew(0deg, -4deg) translateY(-170px);
`;

export const SkillsContent = styled.div`
  max-width: 1366px;
  height: 800px;
  margin: auto;
  /* background: red; */
  transform: skew(0deg, 4deg);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
`;

export const Frontend = styled.div`
  margin: 35px 126px;
`;
export const Backend = styled.div`
  margin: 35px 126px;
`;
export const Tools = styled.div`
  margin: 35px 126px;
`;
export const Title = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
`;
export const Image = styled.img`
  width: 4rem;

  @media screen and (max-width: 649px) {
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
  margin-top: 20px;
  @media screen and (max-width: 649px) {
    width: 1.3rem;
  }
`;
