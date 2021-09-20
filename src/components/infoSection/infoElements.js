import styled from "styled-components";
import { ReactComponent as Point } from "../../images/Point01.svg";

export const InfoContainer = styled.div`
  color: #fff;
  background: transparent;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: fit-content;
  width: 100%;
  max-width: 1100px;

  margin-top: 80px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;

  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  /* @media screen and (max-width: 1100px) {
        padding: 120px 0 0 120px;

        grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }

    @media screen and (max-width: 760px) {
        padding: 120px 0 0 40px;
    } */

  @media screen and (max-width: 950px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;

  margin-bottom: 15px;
  padding: 0;
`;

export const Column2 = styled.div`
  grid-area: col2;

  margin-bottom: 15px;
  padding: 0;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

/* export const Heading = styled.h1`
    font-size: 60px;
    line-height: 1.1;
    font-weight: 400;
    color: #fff;
    padding: ${({moreMargin}) => (moreMargin ? '0 15px' : '30px 0 0 100px')};

    text-transform: uppercase;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const PointWrapper = styled.div`
    width: 750px;

    margin-left: ${({leftPoint}) => (leftPoint ? '-265px' : '25px')};
    margin-top: -15px;
    margin-bottom: 44px;
    
    @media screen and (max-width: 760px) {
        width: 700px;
    }

    @media screen and (max-width: 480px) {
        width: 500px;
        margin-left: -200px;
    }

    transform: ${({rotatePoint}) => (rotatePoint ? 'rotate(180deg)' : 'none')};
`

export const PointF = styled(Point)`
    width: 100%;
    height: auto;
` */

export const Year = styled.h2`
  font-size: 54px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
  padding: ${({ moreMargin }) => (moreMargin ? "0 15px" : "0 0 0 100px")};
  text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.85);

  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 28px;
    padding: 0 0 0 15px;
  }
`;

export const PointF2 = styled(Point)`
  display: ${({ point2 }) => (point2 ? "block" : "none")};

  width: 90%;
  height: auto;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const TopLine = styled.p`
  color: #fff;
  font-size: 32px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 1.4px;
  margin-bottom: 32px;
  padding: ${({ moreMargin }) => (moreMargin ? "0 15px" : "0 0 0 100px")};

  @media screen and (max-width: 480px) {
    padding: 0 0 0 15px;
  }
`;

export const Subtitle = styled.p`
  white-space: pre-wrap;

  max-width: 500px;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  padding: ${({ moreMargin }) => (moreMargin ? "0 15px" : "0 0 0 100px")};

  @media screen and (max-width: 480px) {
    padding: 0 0 0 15px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 1100px) {
    width: 90%;
  }
`;
