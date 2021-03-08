import React from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider';
import DescriptionIcon from '@material-ui/icons/Description';

const MainSection = styled.section `
    height: 40vh;
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
const SubHeadingWrapper = styled.div `
    height: 11vh;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`
const MainWrapper = styled.div `
    width: 1000px;
    display: flex;
    justify-content: space-around;
`
const SubWrapper = styled.div `
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
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    :focus {
        background-color: #31ACBB;
        outline:none
    };
    :hover {
        background-color: #31ACBB;
    }
`
const SubText = styled.p `
    color: grey
`
const ChooseSubject = () => {
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
                        <DescriptionIcon fontSize="large"/>
                        <MainButton>
                            <BoldText>
                                Matematika
                            </BoldText>
                        </MainButton>
                    </SubWrapper>
                    <Divider orientation="vertical" flexItem />
                    <SubWrapper>
                        <DescriptionIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Chemie
                            </BoldText>
                        </MainButton>
                    </SubWrapper>
                    <Divider orientation="vertical" flexItem />
                    <SubWrapper>
                        <DescriptionIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Informatika
                            </BoldText>
                        </MainButton>
                    </SubWrapper>
                    <Divider orientation="vertical" flexItem />
                    <SubWrapper>
                        <DescriptionIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Angličtina
                            </BoldText>
                        </MainButton>
                    </SubWrapper>
                    <Divider orientation="vertical" flexItem />
                    <SubWrapper>
                        <DescriptionIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Český jazyk
                            </BoldText>
                        </MainButton>
                    </SubWrapper>
                    <Divider orientation="vertical" flexItem />
                    <SubWrapper>
                        <DescriptionIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Tělesná výchova
                            </BoldText>
                        </MainButton>
                    </SubWrapper>
                    <Divider orientation="vertical" flexItem />
                    <SubWrapper>
                        <DescriptionIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Zeměpis
                            </BoldText>
                        </MainButton>
                    </SubWrapper>
                    <Divider orientation="vertical" flexItem />
                    <SubWrapper>
                        <DescriptionIcon fontSize="large" />
                        <MainButton>
                            <BoldText>
                                Fyzika
                            </BoldText>
                        </MainButton>
                    </SubWrapper>
                </MainWrapper>
                <SubText> + Další Předměty </SubText>
            </MainSection>
        </>
    )
}

export default ChooseSubject
