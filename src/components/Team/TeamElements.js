import styled from "styled-components";

export const TeamContainer = styled.div`
  padding-top: 80px;

  overflow: hidden;
`;

export const Card = styled.div`
  width: 100px;
  height: 100px;
  background: white;
  transform: rotate(45deg);
  margin: 40px;
`;

export const Grid = styled.div`
  background: red;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: max-content;
  margin: 0 auto;

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TeamBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: -148px;

  @media screen and (max-width: 900px) {
    margin-right: -208px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 25px;
    justify-content: flex-start;
  }
`;

export const Team = styled.div`
  width: max-content;
  margin-right: -15%;

  @media screen and (max-width: 480px) {
    padding-right: 0;
  }
`;
