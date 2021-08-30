import React, {useState} from 'react';
import { 
    SubscribeContainer,
    SubscribeContent,
    H2White,
    H2Blue,
    FPW,
    PP} from './SubscribeElements';

const SubsSection = () => {

    return (
        <SubscribeContainer>

            <SubscribeContent>
                <H2White>Subscribe to get first-hand news about</H2White>
                <H2Blue>Porto Blockchain Conference!</H2Blue>
            </SubscribeContent>      
                  
        </SubscribeContainer>
    );
}

export default SubsSection
