import React, {useState} from 'react'
import styled from 'styled-components'


const SpecializationWrapper = styled.div `
    display: ${props => props.isSpecialition? "flex" : "none"};
`
const EducationInput = styled.input `
    height: 30px;
    width: 400px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 1rem;
    text-align: center;
`
const EducationInputSecond = styled.input `
    height: 30px;
    width: 400px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 1rem;
    text-align: center;
`
const EducationSubInput = styled(EducationInput) `
    width: 200px
`
const EducationSubInputSecond = styled(EducationInput) `
    width: 200px
`
const AdditionalEducationWrapper = styled.div `
    display: ${props => props.addEducation? "none" : "block" }
`
const AddAdditionalEducation = styled.button `
    height: 25px;
    background: transparent;
    border: none;
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
    const [textSecond, setTextSecond] = useState("");
    const [isSpecialition, setIsSpecialization] = useState(false)
    const [isSpecialitionSecond, setIsSpecializationSecond] = useState(false)
    const [addEducation, setAddEducation] = useState(true)
    const [buttonText, setButtonText] = useState("+ přidat zvdělání")
    const buttonHandeler = () => {
        setAddEducation(!addEducation)
        addEducation === true ? setButtonText("- odebrat zvdělání") : setButtonText("+ přidat zvdělání")
    }
    console.log(textSecond)
    return (

        <>
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
                <AddAdditionalEducation onClick={buttonHandeler}> {buttonText} </AddAdditionalEducation>
                <AdditionalEducationWrapper addEducation={addEducation}>
                    <EducationInputSecond type="text" list="data" placeholder="Vyberte prosím obor" onChange={e => {
                        setTextSecond(e.target.value)
                        e.target.value === "Učitelství" ? setIsSpecializationSecond(true) : setIsSpecializationSecond(false)
                            }
                        }/> 
                    <datalist id="data">
                        {data.map(res => { 
                            return <option key={res}>{res}</option>
                        })}
                        </datalist>
                    <SpecializationWrapper isSpecialition={isSpecialitionSecond}>
                        <EducationSubInputSecond type="text" list="schoolType" placeholder="Vyberte typ školy"/>
                            <datalist id="schoolType">
                            {textSecond === "Učitelství" ? schoolType.map(res => {
                                return <option key={res}>{res}</option>

                            })
                                : null
                            }
                            </datalist>
                        <EducationSubInputSecond type="text" list="specialization"  placeholder="Vyberte specializaci" />
                        <datalist id="specialization">
                            {textSecond === "Učitelství" ? specialization.map(res => {
                                return <option key={res}>{res}</option>

                            })
                                : null
                            }
                            </datalist>
                    </SpecializationWrapper>
                </AdditionalEducationWrapper>
        </>
    )
}

export default CurrentEducation 