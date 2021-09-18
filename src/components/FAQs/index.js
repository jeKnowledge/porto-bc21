import React, {useState} from 'react';
import Collapsible from 'react-collapsible';
import "./Faq.css"

import {Heading, PointWrapper, PointF} from '../Elements/PointElement';
import {Data} from './Data';
import { 
    FaqsContainer,
    FaqsContent,
    QuestionWrap,
    AnswerP,
/*     QuestionH1,
    AnswerP,
    QuestionBox,
    ToggleButton, */
    FPW,
    ToggleButton,
    } from './FaqsElements';

const FAQsSection = () => {

    /* const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index) {
            // if clicked questtion is already active, then close it
            return setClicked(null)
        }
        setClicked(index)
    } */
    
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
                            <Collapsible className="H1T"
                            key={index}
                            trigger={item.question}
                            >
                            {/* <ToggleButton /> */}
                            
                            <AnswerP>
                                {/* <div className="line"></div> */}
                                {/* <div className="ball"></div> */}
                                {item.answer}</AnswerP>
                            </Collapsible>
                        </QuestionWrap>
                    </>
                );
            })}
            </FaqsContent>            
        </FaqsContainer>
    );
}

export default FAQsSection
