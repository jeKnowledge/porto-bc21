import styled from "styled-components";

export const FaqsContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrap = styled.div`
  width: 85%;
  height: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const FaqsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 8px 40px;
  margin-top: ${({ space }) => (space ? "40px" : "0")};
  margin-bottom: ${({ spaceBottom }) => (spaceBottom ? "40px" : "0")};

  @media screen and (max-width: 900px) {
    padding: 0 40px;
  }
`;

export const FPW = styled.div`
  align-self: flex-start;
  margin-left: 220px;
  margin-top: 80px;

  @media screen and (max-width: 760px) {
    margin-left: 100px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 25px;
  }
`;

export const PersonWrap = styled.div`
  width: 400px;
  height: fit-content;
  padding: 24px;
`;

export const PersonImage = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const PersonName = styled.div`
  width: 100%;
  height: fit-content;

  font-weight: 600;
  font-size: 32px;
  line-height: 35px;
  text-align: center;

  color: #ffffff;
  padding: 16px 0;
`;

export const PersonText = styled.div`
  width: 100%;
  height: fit-content;

  font-size: 19px;
  line-height: 150%;
  text-align: center;

  color: #ffffff;
`;
