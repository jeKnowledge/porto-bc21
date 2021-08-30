import React, {useState, useEffect} from 'react';
import {ReactComponent as PortoBCLogo} from '../../images/portobclogo.svg'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks} from './NavbarElements';

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav )
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    <PortoBCLogo />
                </NavLogo>
                {/* this will trigger */}
                <MobileIcon onClick={toggle}> 
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' 
                        smooth={true} duration={800} spy={true} exact='true' offsett={0}
                        >ABOUT US</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='past'
                        smooth={true} duration={800} spy={true} exact='true' offsett={0}
                        >PAST EDITION</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='team'
                        smooth={true} duration={800} spy={true} exact='true' offsett={-80}
                        >TEAM</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='faq'
                        smooth={true} duration={800} spy={true} exact='true' offsett={-80}
                        >FAQ</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='tickets'
                        smooth={true} duration={800} spy={true} exact='true' offsett={-80}
                        >TICKETS</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
