import React,{useState} from 'react'
import styled from "styled-components"

const HeadlineSection = styled.section `
    width: 100%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`
const HeadlineH1 = styled.h1 `
    font-size: 3rem;
    font-weight: 500;
`
const HeadlineH2 = styled.h1 `
    font-size: 2rem;
    font-weight: 500;
`

const Headline = () => {
    return (
        <>
            <HeadlineSection>
                <HeadlineH1>
                    HEADLINE
                </HeadlineH1>
                <HeadlineH2>
                    Subheadline
                </HeadlineH2>
            </HeadlineSection>
        </>
    )
}

export default Headline
