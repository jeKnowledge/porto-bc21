import React from 'react'
import {Heading, PointWrapper, PointF} from '../Elements/PointElement';
import {
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Subtitle,
    Img,
    Year,
    PointF2 } from './infoElements'

const InfoSection = ({id, imgStart, headline, topline, p1, p2, img, alt, rotatePoint, leftPoint, moreMargin, point2, year}) => {
    return (
        <>
        <InfoContainer id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <Heading moreMargin={moreMargin}>{headline}</Heading>
                            
                            <PointWrapper rotatePoint={rotatePoint} leftPoint={leftPoint}><PointF/></PointWrapper>
                            
                            <Year moreMargin={moreMargin}>{year}</Year>
                            <PointWrapper rotatePoint={rotatePoint} leftPoint={leftPoint}><PointF2 point2={point2}/></PointWrapper>
                            
                            <TopLine moreMargin={moreMargin}>{topline}</TopLine>
                            <Subtitle moreMargin={moreMargin}>{p1}</Subtitle>
                            <Subtitle moreMargin={moreMargin}>{p2}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default InfoSection
