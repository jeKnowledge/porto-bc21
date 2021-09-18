import styled from 'styled-components';
import {ReactComponent as Point} from '../../images/Point01.svg';
import { MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';

export const HeroContainer = styled.div`
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    // Add before styles
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    

    @media screen and (max-width: 900px) {
        padding: 0 40px;
    }
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 80px;
    text-align: left;
    width: 500px;
    font-weight: bolder;
    line-height: 110%;

    text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.85);
    
    @media screen and (max-width: 760px) {
        font-size: 54px;
    }

    @media screen and (max-width: 480px) {
        font-size: 42px;
    }
`;

export const PointWrapper = styled.div`
    width: 900px;

    margin-left: -250px;

    @media screen and (max-width: 760px) {
        width: 750px;
        margin-left: -350px;
    }

    @media screen and (max-width: 480px) {
        width: 700px;
        margin-left: -450px;
    }
`

export const PointF = styled(Point)`
    width: 100%;
    height: auto;
`

export const HeroBtnWrapper = styled.div`
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 22px;

    background: linear-gradient(#9c47fc, #356ad2);
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 22px;
    font-weight: bold;
    display: inline-block;

    color: #fff ;
`;