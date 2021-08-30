import styled from 'styled-components';
import {ReactComponent as Star2} from '../../images/stars02.svg'
import {ReactComponent as Star3} from '../../images/stars03.svg'
import {ReactComponent as Star4} from '../../images/stars04.svg'

export const Container = styled.div`
    background: transparent;

    width: 100vw;
    position: absolute;
    z-index: -2;

    overflow: hidden;
`;

export const Star01 = styled.div`
    margin-top: -100px;
    opacity: 0.4;

    overflow: hidden;
`

export const Star02 = styled.div`
    margin-top: -14%;
    margin-left: 35%;
    display: flex;
    width: 1000px;
    flex-direction: column;
    align-items: flex-end;
    opacity: 0.9;

    @media screen and (max-width: 760px) {
        opacity: 0.6;
    }

    overflow: hidden;
`

export const Starr2 = styled(Star2)`
    width: 98%;
    height: auto;
    margin-right: -80px;
`

export const Star03 = styled.div`
    display: flex;
    width: 1100px;
    flex-direction: column;
    align-items: flex-end;

    margin-left: -550px;

    opacity: 0.2;
`

export const Starr3 = styled(Star3)`
    width: 100%;
    height: auto;
    margin-right: -80px;
`

export const Star04 = styled.div`
    display: flex;

    width: 1100px;

    opacity: 0.6;

    margin-top: -40%;
    margin-left: 50%;
`

export const Starr4 = styled(Star4)`
    width: 100%;
    height: auto;
`