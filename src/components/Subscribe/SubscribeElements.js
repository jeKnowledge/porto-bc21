import styled from 'styled-components';

export const SubscribeContainer = styled.div`
    z-index: 1;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 30vh;
`;

export const FPW = styled.div`
    align-self: flex-start;
    margin-left: 220px;
    margin-top: 80px;

    @media screen and (max-width: 760px) {
        margin-left: 100px;
    }

    @media screen and (max-width: 480px) {
        margin-left: 75px;
    }
`

export const SubscribeContent = styled.div`
    z-index: 3;

    width: 90%;
    max-width: 1150px;

    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 8px 40px;
    
    @media screen and (max-width: 900px) {
        padding: 0 40px;
    }
`;

export const H2White = styled.h2`
    font-size: 26px;
    font-weight: normal;
    color: #fff;

    text-align: center;
    text-transform: uppercase;
    white-space: pre-wrap;   

    @media screen and (max-width: 760px) {
        font-size: 21px;
    }
`

export const H2Blue = styled.h2`
    font-size: 32px;
    font-weight: bold;
    color: #06649E;
    text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.3);

    text-align: center;
    text-transform: uppercase;
    white-space: pre-wrap;   

    @media screen and (max-width: 760px) {
        font-size: 26px;
    }
`