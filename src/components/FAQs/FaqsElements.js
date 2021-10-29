import styled from "styled-components";

export const FaqsContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
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

export const FaqsContent = styled.div`
  width: 80%;
  max-width: 1100px;

  display: flex;
  flex-direction: column;

  padding: 8px 40px;
  margin-top: 16px;

  @media screen and (max-width: 900px) {
    padding: 0 40px;
  }
`;

export const QuestionWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 40px;

  //padding: 24px 40px;
  background: blue;

  background: #0e101e;
  border: 2px solid #06649e;
  box-shadow: 0px 0px 15px #ffffff;
  border-radius: 18px;

  /* @media screen and (max-width: 420px) {
    padding: 24px 16px;
  } */
`;

export const QuestionBox = styled.div`
  cursor: pointer;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleButton = styled.div`
  position: absolute;
  right: 42px;
  top: 24px;

  border-radius: 50%;

  width: 24px;
  height: 24px;

  background: #06649e;
  box-shadow: 0px 0px 10px rgba(6, 100, 158, 0.8);
  /*     margin-top: -2px;
 */
`;

// export const Collapsible = styled.span`
//   font-size: 24px;
//   font-weight: normal;
//   line-height: 24px;
//   color: #fff;

//   text-transform: uppercase;
//   white-space: pre-wrap;

//   /* @media screen and (max-width: 1000px) {
//     max-width: 450px;
//   }

//   @media screen and (max-width: 760px) {
//     max-width: 300px;
//   } */

//   background: yellow;
// `;

export const PP = styled.div``;

export const AnswerP = styled.p`
  display: block;

  width: 100%;
  padding-right: 80px;
  padding-left: 24px;
  padding-bottom: 12px;

  font-size: 18px;
  font-weight: 300;
  line-height: 160%;
  color: #fff;

  white-space: pre-wrap;

  position: relative;

  @media screen and (max-width: 640px) {
    padding-right: 0;
  }
`;
