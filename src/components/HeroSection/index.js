import React, {useState} from 'react';
import {Button, ButtonP} from '../Elements/ButtonElement';
import { 
    HeroContainer,
    HeroContent,   
    HeroH1,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    PointWrapper,
    PointF} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover]  = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroContent>
                <HeroH1>PORTO BLOCKCHAIN CONFERENCE</HeroH1>
                <PointWrapper><PointF /></PointWrapper>
                <HeroBtnWrapper>
                    <Button to='register' 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    fontBig='true'>
                        <ButtonP>REGISTER HERE</ButtonP>
                        {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection
