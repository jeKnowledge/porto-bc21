import React, {useState} from 'react';
import {Heading, PointWrapper, PointF} from '../Elements/PointElement';
import {Data} from './Data';
import { 
    FaqsContainer,
    FaqsContent,
    QuestionWrap,
    QuestionH1,
    AnswerP,
    QuestionBox,
    ToggleButton,
    FPW,
    PP} from './FaqsElements';

const FAQsSection = () => {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index) {
            // if clicked questtion is already active, then close it
            return setClicked(null)
        }
        setClicked(index)
    }
    
    return (
        <FaqsContainer id='faq'>

            <FPW>
                <Heading moreMargin={true}>FAQs</Heading>
                <PointWrapper rotatePoint={false} leftPoint={true}><PointF/></PointWrapper>
            </FPW>

            <FaqsContent>
            {Data.map((item, index) => {
                return(
                    <>  
                        <QuestionWrap>
                            <QuestionBox
                            onClick={() =>
                            toggle(index)}
                            key={index}
                            >
                                <QuestionH1>{item.question}</QuestionH1>
                                <ToggleButton/>
                            </QuestionBox>

                            {clicked === index ? (
                                <PP>
                                    <AnswerP>{item.answer}</AnswerP>
                                </PP>
                            ) : null}
                            
                        </QuestionWrap>
                    </>
                );
            })}
            </FaqsContent>            
        </FaqsContainer>
    );
}

export default FAQsSection
