import React from 'react'
import styled from 'styled-components'

const SelectionWrapper= styled.div`
    width: 60%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 650px) {
        width: 100%;
        justify-content: center;
    }
`
const QualificationsBttn = styled.button `
    width: 200px;
    height: 4.9vh;
    text-align: center;
    background-color: white;
    color:black;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    border: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    :hover {
        background-color: #31ACBB;
        color:white
    };
    :focus {
        background-color: #31ACBB;
        color:white;
        outline:none
    }
`

const Selection = () => {
    return (
        <>
            <SelectionWrapper>
                        <QualificationsBttn>
                            Titul
                        </QualificationsBttn>
                        <QualificationsBttn>
                            Kvalifikace
                        </QualificationsBttn>
                        <QualificationsBttn>
                            CŽV
                        </QualificationsBttn>
            </SelectionWrapper>
        </>
    )
}

export default Selection
