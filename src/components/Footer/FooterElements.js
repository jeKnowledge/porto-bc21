import styled from 'styled-components';
import {ReactComponent as Point} from '../../images/Point02.svg';

export const FooterContainer = styled.div`
    width: 100vw;
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #000;
`

export const FooterContent = styled.div`
    width: 90%;
    height: 200px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background: red;
`

export const PointWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 105%;
`

export const PointV = styled(Point)`
    width: auto;
    height: 100%;
`

export const ContactsSection = styled.div`
    width: 25%;
    height: 100%;
    background: gray;
`

export const SocialSection = styled.div`
    width: 30%;
    height: 100%;
    background: blue;
`

export const LogoSection = styled.div`
    width: 25%;
    height: 100%;
    background: gray;
`