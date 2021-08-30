import styled from 'styled-components';

export const FaqsContainer = styled.div`
    z-index: 1;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
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

export const FaqsContent = styled.div`
    z-index: 3;

    width: 90%;
    max-width: 1150px;

    position: absolute;
    display: flex;
    flex-direction: column;

    padding: 8px 40px;
    margin-top: 280px;
    
    @media screen and (max-width: 900px) {
        padding: 0 40px;
    }
`;

export const QuestionWrap = styled.div`
    width: 100%;
    margin-bottom: 40px;

    padding: 24px 40px;
    background: blue;

    background: #0E101E;
    border: 2px solid #06649E;
    box-shadow: 0px 0px 15px #FFFFFF;
    border-radius: 18px;
`

export const QuestionBox = styled.div`
    cursor: pointer;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`

export const ToggleButton = styled.div`
    border-radius: 50%;

    width: 24px;
    height: 24px;
    
    background: #06649E;
    box-shadow: 0px 0px 10px rgba(6, 100, 158, 0.8);
    margin-top: -2px;
`

export const QuestionH1 = styled.h1`
    font-size: 24px;
    font-weight: normal;
    line-height: 24px;
    color: #fff;

    text-transform: uppercase;
    white-space: pre-wrap;   

    @media screen and (max-width: 1000px) {
        max-width: 450px;
    }

    @media screen and (max-width: 760px) {
        max-width: 300px;
    }
`

export const PP = styled.div`
`

export const AnswerP = styled.p`
    display: block;

    width: 75%;
    font-size: 18px;
    font-weight: 300;
    line-height: 160%;
    color: #fff;

    white-space: pre-wrap;          
    margin-top: 24px;
`