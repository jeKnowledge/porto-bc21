import styled from 'styled-components'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    margin-top: -80px;

    position: sticky;
    top: 0;
    padding: 0 30px;

    width: 100%;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({scrollNav}) => (scrollNav ? 'rgba(0, 0, 0, 0.2)' : 'transparent')};
    font-size: 1rem;
    z-index: 10;
    
    @media screen and (max-width: 960) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    max-width: 1200px;
    padding: 0 24px;
    width: 100%;
`;

export const NavLogo = styled.div`
    width: 172px;
    display: flex;
    justify-self: flex-start;
    align-items: center;

    cursor: pointer;

    @media screen and (max-width: 760px) {
        width: 150px;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 950px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 950px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    margin-left: 40px;

    &.active {
        border-bottom: 3px solid #50A1D2;
    }
`;