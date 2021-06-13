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
  padding: 35px 126px;
  border-color: #0f97b8;
  box-shadow: 0 25px 20px #777;
  margin-right: 5px;
`;
export const Backend = styled.div`
  padding: 35px 126px;
  border-color: #0f97b8;
  box-shadow: 0 25px 20px #777;
  margin-bottom: 10px;
  margin-right: 5px;
`;
export const Tools = styled.div`
  padding: 35px 126px;
  border-color: #0f97b8;
  box-shadow: 0 25px 20px #777;
  margin-bottom: 10px;
`;
export const Title = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
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
  margin-top: 20px;
  @media screen and (max-width: 687px) {
    width: 1.3rem;
  }
`;
