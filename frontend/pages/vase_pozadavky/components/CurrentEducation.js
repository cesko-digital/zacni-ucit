import React, {useState} from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider';
import SchoolIcon from '@material-ui/icons/School';
import { resolveModuleNameFromCache } from 'typescript';

const MainSection = styled.section `
    height: 400px;
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
const SpecializationWrapper = styled.div `
    display: ${props => props.isSpecialition? "flex" : "none"};
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
const EducationSubInput = styled(EducationInput) `
    width: 200px
`
const SubText = styled.p `
    color: grey
`
const CurrentEducation = () => {

    const data = ["Architektura a urbanismus","Bezpečnostní obory","Biologie, ekologie a životní prostředí","Doprava",
                "Ekonomické obory","Elektrotechnika","Energetika","Farmacie","Filologie","Filozofie, religionistika a teologie",
                "Fyzika","Historické vědy","Chemie","Informatika","Kybernetika","Lesnictví a dřevařství","Matematika",
                "Mediální a komunikační studia","Neučitelská pedagogika","Politické vědy","Potravinářství","Právo",
                "Psychologie","Sociální práce","Sociologie","Stavebnictví","Strojírenství, technologie a materiály","Tělesná výchova a sport; kinantropologie",
                "Těžba a zpracování nerostných surovin","Učitelství","Umění","Vědy o umění a kultuře","Vědy o Zemi","Veterinární lékařství, veterinární hygiena",
                "Všeobecné lékařství a zubní lékařství","Zdravotnické obory","Zemědělství",]

    const schoolType = ["Základní škola 1. stupeň","Základní škola 2. stupeň","Střední škola" ]

    const specialization = ["Všeobecně-vzdělávací předměty", "Cizí jazyk", "Umělecké předměty", "Tělesná výchova", 
                        "Odborné předměty"," Praktické vyučování", "Odborný výcvik"]

    const [text, setText] = useState("");
    const [isSpecialition, setIsSpecialization] = useState(false)
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
                <EducationInput type="text" list="data" placeholder="Vyberte prosím obor" onChange={e => {
                    setText(e.target.value)
                    e.target.value === "Učitelství" ? setIsSpecialization(true) : setIsSpecialization(false)
                }
                }/> 
                    <datalist id="data">
                        {data.map(res => { 
                            return <option key={res}>{res}</option>
                        })}
                    </datalist>
                <SpecializationWrapper isSpecialition={isSpecialition}>
                    <EducationSubInput type="text" list="schoolType" placeholder="Vyberte typ školy"/>
                        <datalist id="schoolType">
                        {text === "Učitelství" ? schoolType.map(res => {
                            return <option key={res}>{res}</option>

                        })
                            : null
                        }
                        </datalist>
                    <EducationSubInput type="text" list="specialization"  placeholder="Vyberte specializaci" />
                    <datalist id="specialization">
                        {text === "Učitelství" ? specialization.map(res => {
                            return <option key={res}>{res}</option>

                        })
                            : null
                        }
                        </datalist>
                </SpecializationWrapper>
                <SubText>+ Přidat vzdělání</SubText>
                
            </MainSection>
        </>
    )
}

export default CurrentEducation 