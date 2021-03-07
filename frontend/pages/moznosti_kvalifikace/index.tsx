import React from 'react'
import styled from 'styled-components';
import Heading from './components/Heading';
import Results from './components/Results';
import Selection from './components/Selection';

const StudyOptionsSection = styled.section `
    height: auto;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ResultsCotainer = styled.div `
    height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 650px) {
        height: 82vh;
    }
`
const ShowMore = styled.div `
    height: 8vh;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 650px) {
        
    }
`

const StudyOptions = () => {
    return (
        <>
            <StudyOptionsSection>
                <Heading />
                <ResultsCotainer>
                    <Selection />
                    <Results />
                </ResultsCotainer>
                <ShowMore>  Zobrazit více   </ShowMore>
            </StudyOptionsSection>
        </>
    )
}

export default StudyOptions
