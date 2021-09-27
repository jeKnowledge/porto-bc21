import styled from "styled-components";
import { ReactComponent as Point } from "../../images/Point02.svg";

import { ReactComponent as FacebookIcon } from "../../images/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin.svg";

import { ReactComponent as PortoBCLogoIcon } from "../../images/portobclogo.svg";
import { ReactComponent as JeKIcon } from "../../images/jek.svg";

export const FooterContainer = styled.div`
  width: 100vw;
  height: max-content;
  padding: 40px 0;
  margin-top: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: black;
`;

export const FooterContent = styled.div`
  width: 80%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PointWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 105%;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const PointV = styled(Point)`
  width: auto;
  height: 100%;
`;

export const ContactsSection = styled.div`
  width: 25%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 450px) {
    width: 50%;
    text-align: center;
  }
`;

export const SocialSection = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoSection = styled.div`
  width: 25%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (max-width: 450px) {
    width: 80%;
    height: 80%;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  text-transform: uppercase;

  color: #ffffff;

  @media screen and (max-width: 760px) {
    font-size: 20px;
  }
`;

export const Info = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  margin-top: 4px;

  color: #ffffff;

  @media screen and (max-width: 760px) {
    margin-top: 2px;
    font-size: 12px;
  }
`;
export const SocialMediaSection = styled.div`
  width: 500px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 1100px) {
    width: 400px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
    flex-direction: column;
  }

  @media screen and (max-width: 760px) {
    flex-direction: row;
  }

  @media screen and (max-width: 450px) {
    height: 150px;
  }
`;

export const SocialIcon = styled.div`
  width: 70px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 1100px) {
    width: 60px;
    height: 60px;
  }
`;

export const Facebook = styled(FacebookIcon)`
  width: 100%;
  height: auto;
`;

export const Twitter = styled(TwitterIcon)`
  width: 100%;
  height: auto;
`;

export const Instagram = styled(InstagramIcon)`
  width: 100%;
  height: auto;
`;

export const LinkedIn = styled(LinkedInIcon)`
  width: 100%;
  height: auto;
`;

export const PortoBCLogo = styled(PortoBCLogoIcon)`
  width: 135px;
  height: auto;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 100px;
  }
`;

export const JeKSection = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 800px) {
    width: 100px;
  }
`;

export const JeKnowlege = styled(JeKIcon)`
  width: 100%;
  height: auto;
  padding-top: 4px;
`;
