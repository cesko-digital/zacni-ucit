import React, {useState} from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider';
import SchoolIcon from '@material-ui/icons/School';
import CurrentEducation from "./Current.Education.Data"

const MainSection = styled.section `
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Heading = styled.h2 `
    font-size: 2.5rem;
    font-weight: 500;
    height: 30px;
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
const SubHeadingWrapper = styled.div `
    height: 90px;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`
const MainWrapper = styled.div `
    padding-top: 25px;
    width: 500px;
    display: flex;
    justify-content: space-around;
`
const SubWrapper = styled.div `
    width: 120px;
    height: 110px;
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
    justify-content: center;
    cursor: pointer;
    :focus {
        background-color: #383D41;
        color:white;
        outline:none
    };
    :hover {
        background-color: #383D41;
        color:white
    }
`


const CurrentEducationWrapper= () => {

    return (

        <>
        <MainSection>
                <Heading>
                    Chci učit:
                </Heading>
                <SubHeadingWrapper>
                    <HeadingText>
                        Povinné
                    </HeadingText>
                    <Subheading>
                        Mám dosažené vzdělání
                    </Subheading>
                </SubHeadingWrapper>
                <MainWrapper>
                    <SubWrapper>
                        <SchoolIcon fontSize="large"/>
                        <MainButton>
                            <BoldText>
                                Bakalář (Bc.)
                            </BoldText>
                        </MainButton>
                    </SubWrapper>
                    <Divider orientation="vertical" flexItem />
                    <SubWrapper>
                        <SchoolIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Magistr (Mgr.)
                            </BoldText>
                        </MainButton>
                    </SubWrapper>
                    <Divider orientation="vertical" flexItem />
                    <SubWrapper>
                        <SchoolIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Inženýr (Ing.)
                            </BoldText>
                        </MainButton>
                    </SubWrapper>
                    <Divider orientation="vertical" flexItem />
                    <SubWrapper>
                        <SchoolIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Další...
                            </BoldText>
                        </MainButton>
                    </SubWrapper>
                </MainWrapper>
                <CurrentEducation />
            </MainSection>
        </>
    )
}

export default CurrentEducationWrapper 