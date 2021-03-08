import React from 'react'
import styled from 'styled-components';
import TuneIcon from '@material-ui/icons/Tune';

const TextWrapper = styled.div `
    height: 50vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 650px) {
        height: 50vh;
    }
`
const HeadingWrapper = styled.div `
    height: 15vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const InnerTextWrapper= styled.div `
    height: 25vh;
    width: 70%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media (max-width: 650px) {
        flex-direction: column-reverse;
        justify-content: center;
        width: 90%;
        height: 25vh;
    }
`
const FilterWrapper= styled.div `
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 30px;
    @media (max-width: 650px) {
        width: 90%;
        height: 5vh;
        align-items: flex-start;
        padding-top: 5px;
    }
`
const FilterButton = styled.button `
    height: 3.5vh;
    width: 150px;
    background-color: rgb(255,255,255);
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    :active {
        background-color: #31ACBB;
        color:white;
        outline:none;
        border: none;
    };
    :focus {
        outline: none;
    }
    :hover {
        background-color: #31ACBB;
        color:white
    }
    @media (max-width: 650px) {
        flex-direction: row-reverse
    }
`
const MainHeading = styled.h1 `
    font-size: 2.5rem;
    @media (max-width: 650px) {
        text-align: center;
        font-size: 1.9rem;
    }
`
const RedText = styled.h3 `
    color: red;
    font-weight: 500;
    @media (max-width: 650px) {
        text-align: center;
        font-size: 1rem;
    }
`
const OptionsText = styled.p `
    @media (max-width: 650px) {
        margin-top: -10px;
    }
`


const Heading = () => {
    return (
        <>
            <TextWrapper>
                    <HeadingWrapper>
                        <MainHeading>
                            Možnosti studia:
                        </MainHeading>
                    </HeadingWrapper>
                    <InnerTextWrapper>
                        <RedText>
                            Našli jsme 150 výsledků, doporučujeme použít filtry pro přesnější výsledky
                        </RedText>
                        <span>
                            <OptionsText>    Titul - </OptionsText>
                            <OptionsText>    Kvalifikace -   </OptionsText>
                            <OptionsText>    CŽV -   </OptionsText>
                        </span>
                    </InnerTextWrapper>
                    <FilterWrapper>
                        <FilterButton>
                            FILTROVAT
                            <TuneIcon fontSize="small" />
                        </FilterButton>
                    </FilterWrapper>
                </TextWrapper>
        </>
    )
}

export default Heading
