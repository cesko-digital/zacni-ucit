import React from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider';
import LocationCityIcon from '@material-ui/icons/LocationCity';

const MainSection = styled.section `
    height: 30vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Heading = styled.h2 `
    font-size: 2.5rem;
    font-weight: 500;
    height: 2vh;
    line-height: 0
`
const Subheading = styled.h3 `
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 0;
`
const HeadingText = styled.p `
    line-height: 0
`
const BoldText = styled.p `
    line-height: 0;
    font-size: 0.6rem;
    font-weight: 800;
`
const SmallText = styled.p `
    line-height: 0;
    font-size: 0.4rem;
    font-weight: 400;
`
const SubHeadingWrapper = styled.div `
    height: 11vh;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`
const MainWrapper = styled.div `
    width: 500px;
    display: flex;
    justify-content: space-around;
`
const SubWrapper= styled.div `
    width: 120px;
    height: 115px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const MainButton = styled.button `
    height: 50px;
    width: 100%;
    background-color: transparent;
    border: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :focus {
        background-color: #FFC000;
        outline:none
    };
    :hover {
        background-color: #FFC000;
    }
`

const ChooseGrade = () => {
    return (
        <>
            <MainSection>
                <SubHeadingWrapper>
                    <HeadingText>
                        Nepovinné
                    </HeadingText>
                    <Subheading>
                        Chci učit stupeň
                    </Subheading>
                </SubHeadingWrapper>
                <MainWrapper>
                    <SubWrapper>
                        <LocationCityIcon fontSize="large"/>
                        <MainButton>
                            <BoldText>
                                Základní Škola
                            </BoldText>
                            <SmallText>
                                1. stupeň
                            </SmallText>
                        </MainButton>
                    </SubWrapper>
                    <Divider orientation="vertical" flexItem />
                    <SubWrapper>
                        <LocationCityIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Základní Škola
                            </BoldText>
                            <SmallText>
                                2. stupeň
                            </SmallText>
                        </MainButton>
                    </SubWrapper>
                    <Divider orientation="vertical" flexItem />
                    <SubWrapper>
                        <LocationCityIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Střední škola
                            </BoldText>
                            <SmallText />
                        </MainButton>
                    </SubWrapper>
                    <Divider orientation="vertical" flexItem />
                    <SubWrapper>
                        <LocationCityIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Nevím...
                            </BoldText>
                            <SmallText />
                        </MainButton>
                    </SubWrapper>
                </MainWrapper>
            </MainSection>
        </>
    )
}

export default ChooseGrade
