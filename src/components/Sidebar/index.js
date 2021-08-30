import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarBtwnWrap,
    SidebarMenu,
    SidebarLink,
    SidebarRoute } from './SidebarElements'
    

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>ABOUT US</SidebarLink>
                    <SidebarLink to='past' onClick={toggle}>PAST EDITION</SidebarLink>
                    <SidebarLink to='team' onClick={toggle}>TEAM</SidebarLink>
                    <SidebarLink to='faq' onClick={toggle}>FAQ</SidebarLink>
                    <SidebarLink to='tickets' onClick={toggle}>TICKETS</SidebarLink>
                </SidebarMenu>
                <SidebarBtwnWrap>
                    <SidebarRoute to='/register'>REGISTER HERE!</SidebarRoute>
                </SidebarBtwnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
