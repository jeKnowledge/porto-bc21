import React, { useState } from "react";
import { Button, ButtonP, ButtonP2 } from "../Elements/ButtonElement";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  PointWrapper,
  PointF,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="hero">
      <HeroContent>
        <HeroH1>PORTO BLOCKCHAIN CONFERENCE</HeroH1>
        <PointWrapper>
          <PointF />
        </PointWrapper>
        <HeroBtnWrapper>
          <Button
            href="https://jeknowledge.typeform.com/to/g9kEyU"
            target="_blank"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            fontBig="true"
          >
            {hover ? (
              <ButtonP2>TICKETS HERE</ButtonP2>
            ) : (
              <ButtonP>TICKETS HERE</ButtonP>
            )}
            {hover ? <ArrowRight /> : <ArrowForward />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
