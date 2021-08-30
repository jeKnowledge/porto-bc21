import styled, { keyframes } from 'styled-components';


const bounceAnimation = keyframes`
 0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  97% {
    opacity: 1;
    transform: translate3d(-47%, 0, 0);
    transition: ease-in;
  }

  100%{
    transition: ease-out;
    opacity: 0;
    transform: translate3d(-50%, 0, 0);
  }
`;

export const DateContainer = styled.div`
    background: white;
    width: 100vw;
    height: 170px;
    z-index: 1;

    display: inline-flex;
    align-items: center;
    
    white-space:nowrap;
    overflow: hidden;
    
    @media screen and (max-width: 760px) {
      height: 130px;
    }

    @media screen and (max-width: 480px) {
      height: 120px;
    }
`;

export const SlideContainer = styled.div`
    display: inline-flex;
    animation: 16s ${bounceAnimation} linear infinite;
`

export const DateH2 = styled.h2`
    width: max-content;
    margin-right: 24px;
    
    font-size: 70px;
    font-weight: 600;
    line-height: normal;

    background: linear-gradient(0.25turn, #040305, #1D2444, #06649E);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 760px) {
      font-size: 55px;
    }

    @media screen and (max-width: 480px) {
      font-size: 35px;
    }
`;