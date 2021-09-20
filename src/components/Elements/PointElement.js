import styled from "styled-components";
import { ReactComponent as Point } from "../../images/Point01.svg";

export const Heading = styled.h1`
  font-size: 60px;
  line-height: 1.1;
  font-weight: 400;
  color: #fff;
  padding: ${({ moreMargin }) => (moreMargin ? "0 15px" : "30px 0 0 100px")};

  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 32px;
    padding: ${({ moreMargin }) => (moreMargin ? "0 15px" : "30px 0 0 15px")};
  }
`;

export const PointWrapper = styled.div`
  width: 750px;

  margin-left: ${({ leftPoint }) => (leftPoint ? "-265px" : "25px")};
  margin-top: -15px;
  margin-bottom: 44px;

  @media screen and (max-width: 760px) {
    width: 700px;
  }

  @media screen and (max-width: 480px) {
    width: 500px;
    margin-left: -200px;
  }

  transform: ${({ rotatePoint }) => (rotatePoint ? "rotate(180deg)" : "none")};
`;

export const PointF = styled(Point)`
  width: 100%;
  height: auto;
`;
