import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterContent,
  ContactsSection,
  SocialSection,
  LogoSection,
  PointWrapper,
  PointV,
  Title,
  Info,
  SocialMediaSection,
  SocialIcon,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  PortoBCLogo,
  JeKSection,
  JeKnowlege,
} from "./FooterElements";

const FooterSection = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterContent>
        <ContactsSection>
          <Title>Contactos</Title>
          <div>
            <Info>geral@portobc.com</Info>
            <Info>+351 926 590 223</Info>
            <Info>+351 919 818 111</Info>
          </div>
        </ContactsSection>
        <PointWrapper>
          <PointV />
        </PointWrapper>

        <SocialSection>
          <SocialMediaSection>
            <a href="https://www.facebook.com/port0.bc/" target="_blank">
              <SocialIcon>
                <Facebook />
              </SocialIcon>
            </a>

            <a href="https://www.instagram.com/porto.bc_/" target="_blank">
              <SocialIcon>
                <Instagram />
              </SocialIcon>
            </a>

            <a
              href="https://www.linkedin.com/company/porto-blockchain-conference/"
              target="_blank"
            >
              <SocialIcon>
                <LinkedIn />
              </SocialIcon>
            </a>
          </SocialMediaSection>
        </SocialSection>
        <PointWrapper>
          <PointV />
        </PointWrapper>

        <LogoSection>
          <PortoBCLogo to="/" onClick={toggleHome} />
          <JeKSection>
            <Info>Criado por:</Info>
            <a href="https://jeknowledge.pt" target="_blank">
              <JeKnowlege />
            </a>
          </JeKSection>
        </LogoSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default FooterSection;
