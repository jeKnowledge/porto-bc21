import React from "react";
import { Heading, PointWrapper, PointF } from "../Elements/PointElement";
import { Data } from "./data";
import {
  FaqsContainer,
  FaqsContent,
  FPW,
  ContentWrap,
  PersonWrap,
  PersonImage,
  PersonName,
  PersonText,
  Img,
} from "./SpeakersElements";

const RoundTableSection = ({
  id,
  bigTitle,
  space,
  spaceBottom,
  img,
  alt,
  headline,
  p1,
}) => {
  return (
    <FaqsContainer id="speakers">
      <FPW>
        <Heading moreMargin={true}>Round Table</Heading>
        <PointWrapper rotatePoint={false} leftPoint={true}>
          <PointF />
        </PointWrapper>
      </FPW>

      <ContentWrap>
        {Data.map((item) => {
          return (
            <>
              <FaqsContent
                id={item.id}
                space={item.space}
                spaceBottom={item.spaceBottom}
              >
                <PersonWrap>
                  <PersonImage>
                    <Img src={item.img} alt={item.alt} />
                  </PersonImage>
                  <PersonName>{item.headline}</PersonName>
                  <PersonText>{item.p1}</PersonText>
                </PersonWrap>
              </FaqsContent>
            </>
          );
        })}
      </ContentWrap>
    </FaqsContainer>
  );
};

export default RoundTableSection;
