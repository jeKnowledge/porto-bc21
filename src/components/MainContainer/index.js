import React from 'react'
import {ReactComponent as Star} from '../../images/stars01.svg'
import {
    Container, 
    Star01,
    Star02,
    Starr2,
    Star03,
    Starr3,
    Star04,
    Starr4 } from './ContainerElements'

const MainContainer = () => {
   return (
        <Container>
            <Star01>
                <Star />
            </Star01>
            <Star02>
                <Starr2 />
            </Star02>
            <Star03>
                <Starr3 />
            </Star03>
            <Star04>
                <Starr4 />
            </Star04>
        </Container>
    );

    // https://stackoverflow.com/questions/47359136/react-rendering-svg-overwrites-other-svgs-on-the-page
}

export default MainContainer
