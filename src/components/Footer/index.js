import React from 'react'
import { 
    FooterContainer, 
    FooterContent,
    ContactsSection,
    SocialSection,
    LogoSection,
    PointWrapper,
    PointV } from './FooterElements'

const FooterSection = () => {
    return (
        <FooterContainer>
            <FooterContent>
                
                <ContactsSection>
                    {/* <Title>Contacts</Title>
                    <Info>geral@portobc.com</Info>
                    <Info>+351 926 590 223</Info>
                    <Info>+351 919 818 111</Info> */}
                </ContactsSection>
                <PointWrapper><PointV/></PointWrapper>

                <SocialSection>
                    {/* <SocialMediaSection>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                        <LinkedIn />
                    </SocialMediaSection> */}
                </SocialSection>
                <PointWrapper><PointV/></PointWrapper>
 
                <LogoSection>
                    {/* <PortoBCLogo />
                    <JeKSection>
                        <Pjek>Created by:</Pjek>
                        <JeKnowlege />
                    </JeKSection> */}
                </LogoSection>

            </FooterContent>
        </FooterContainer>
    )
}

export default FooterSection
