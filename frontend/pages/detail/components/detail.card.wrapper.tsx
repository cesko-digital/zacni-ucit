import React from 'react'
import styled from 'styled-components';
import DetailCardDescription from './detail.card.description';
import DetailCard from './detail.card.head';
import DetailHead from './detail.head';

const Wrapper = styled.div `
width: 100%;
border: 1px solid black;
padding: 10px;
border-radius: 10px;
margin-top: 15px;
`

const detailCardWrapper = () => {
    return (
        <>  
            <DetailHead></DetailHead>
            <Wrapper>
                <DetailCard></DetailCard>
                <DetailCardDescription></DetailCardDescription>
            </Wrapper>
        </>
    )
}

export default detailCardWrapper
