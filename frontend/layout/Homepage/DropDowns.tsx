import React from 'react'
import styled from "styled-components"

const DropDownSection = styled.section `
    height: 40vh;
    width: 100%;
    background-color: rgb(255,255,255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`
const DropDownContainer = styled.div `
    height: 20vh;
    width: 80%;
    display: flex;
    justify-content: space-between;
`
const DropDownSubContainer = styled.div `
    height: 18vh;
    display: flex;
    flex-direction: column;
    text-align: center;
`
const FirstDropDownSubContainer = styled(DropDownSubContainer) `
    width: 400px;
`
const SecondDropDownSubContainer = styled(DropDownSubContainer) `
    width: 400px;
`
const ThirdDropDownSubContainer = styled(DropDownSubContainer) `
    width: 100%
`
const DropDownH3 = styled.h3 `
    font-size: 1.8rem;
    font-weight: 450;
`
const DropDownMenuSmall = styled.select `
    appearance: none;
    width: 100%;
    height: 100px;
    background-color: #C4C4C4;
    border: 15px solid #C4C4C4;
    font-size: 1.6rem;
    :after{
        content: "";
        height: 20px;
        width: 20px;
        background-color: black;
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
`
const DropDownMenuLarge = styled.select `
    appearance: none;
    width: 100%;
    height: 100px;
    background-color: #C4C4C4;
    border: 15px solid #C4C4C4;
    font-size: 1.4rem;
    :after{
        content: "";
        height: 20px;
        width: 20px;
        background-color: black;
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
`

const Dropdowns = () => {

    return (
        <>
            <DropDownSection>
                <DropDownContainer>
                    <FirstDropDownSubContainer>
                        <DropDownH3>
                            Dosažené Vzdělání
                        </DropDownH3>
                        <DropDownMenuSmall>
                            <option value="0">Mgr.</option>
                            <option value="1">Ing.</option>
                            <option value="2">Judr.</option>
                            <option value="3">Bc.</option>
                        </DropDownMenuSmall>
                    </FirstDropDownSubContainer>
                    <SecondDropDownSubContainer>
                        <DropDownH3>
                            Kurzy
                        </DropDownH3>
                        <DropDownMenuSmall>
                            <option value="0">Název Kurzu</option>
                            <option value="1">Kurz 1</option>
                            <option value="2">Kurz 2</option>
                            <option value="3">Kurz 3</option>
                        </DropDownMenuSmall>
                    </SecondDropDownSubContainer>
                </DropDownContainer>
                <DropDownContainer>
                    <ThirdDropDownSubContainer>
                        <DropDownH3>
                            Další kvalifikace
                        </DropDownH3>
                        <DropDownMenuLarge>
                            <option value="0">Doplňující studium k rozšíření odborné kvalifikace (DVPP)</option>
                            <option value="1">Ing.</option>
                            <option value="2">Judr.</option>
                            <option value="3">Bc.</option>
                        </DropDownMenuLarge>
                    </ThirdDropDownSubContainer>
                </DropDownContainer>
            </DropDownSection>
        </>
    )
}

export default Dropdowns
