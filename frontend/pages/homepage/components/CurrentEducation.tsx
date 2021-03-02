import React from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider';
import SchoolIcon from '@material-ui/icons/School';

const MainSection = styled.section `
    height: 55vh;
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
const SubHeadingContainer = styled.div `
    height: 11vh;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`
const Line = styled.div `
    width: 50px;
    height: 1px;
    background-color: grey;
`
const MainContainer = styled.div `
    width: 500px;
    display: flex;
    justify-content: space-around;
`
const SubContainer = styled.div `
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
const EducationInput = styled.input `
    height: 4vh;
    width: 400px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 1rem;
    text-align: center;
`
const SubText = styled.p `
    color: grey
`
const CurrentEducation = () => {
    return (
        <>
            <MainSection>
                <Heading>
                    Chci učit:
                </Heading>
                <SubHeadingContainer>
                    <HeadingText>
                        Povinné
                    </HeadingText>
                    <Subheading>
                        Mám dosažené vzdělání
                    </Subheading>
                </SubHeadingContainer>
                <MainContainer>
                    <SubContainer>
                        <SchoolIcon fontSize="large"/>
                        <MainButton>
                            <BoldText>
                                Bakalář (Bc.)
                            </BoldText>
                        </MainButton>
                    </SubContainer>
                    <Divider orientation="vertical" flexItem />
                    <SubContainer>
                        <SchoolIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Magistr (Mgr.)
                            </BoldText>
                        </MainButton>
                    </SubContainer>
                    <Divider orientation="vertical" flexItem />
                    <SubContainer>
                        <SchoolIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Inženýr (Ing.)
                            </BoldText>
                        </MainButton>
                    </SubContainer>
                    <Divider orientation="vertical" flexItem />
                    <SubContainer>
                        <SchoolIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Další...
                            </BoldText>
                        </MainButton>
                    </SubContainer>
                </MainContainer>
                <EducationInput 
                    type="text" 
                    placeholder= "Molekulární biologie a biotechnologie" 
                    />
                <SubText>+ Přidat vzdělání</SubText>
            </MainSection>
        </>
    )
}

export default CurrentEducation 