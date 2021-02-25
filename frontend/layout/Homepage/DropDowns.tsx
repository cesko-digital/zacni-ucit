import React from 'react'
import styled from "styled-components"

/**Section */
const DropDownSection = styled.section `
    height: 40vh;
    width: 100%;
    background-color: rgb(255,255,255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    /**media queries */
    @media (max-width: 670px) {
    flex-direction: column;
    height: 50vh;
    }
`
/**containers */
const DropDownContainer = styled.div `
    height: 20vh;
    width: 80%;
    display: flex;
    justify-content: space-between;
    /**media queries */
    @media (max-width: 670px) {
    flex-direction: column;
    height: 35vh;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    }
`
const DropDownSubContainer = styled.div `
    height: 18vh;
    display: flex;
    flex-direction: column;
    text-align: center;
`
const FirstDropDownSubContainer = styled(DropDownSubContainer) `
    width: 400px;
    /**media queries */
    @media (max-width: 1135px) {
    width: 300px;
    }
    @media (max-width: 850px) {
    width: 250px;
    }
`
const SecondDropDownSubContainer = styled(DropDownSubContainer) `
    width: 400px;
    /**media queries */
    @media (max-width: 1135px) {
    width: 300px;
    }
    @media (max-width: 850px) {
    width: 250px;
    }
`
const ThirdDropDownSubContainer = styled(DropDownSubContainer) `
    width: 100%;
`
/**fonts */
const DropDownH3 = styled.h3 `
    font-size: 1.8rem;
    font-weight: 450;
`
/**dropdown menu's */
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
/**OnClick additional info */
const AdditionalInfo = styled.div `
    height: 15px;
    width: 15px;
    background-color: black;
    border-radius: 100%;
    position: absolute;
    margin-left: 590px;
    margin-top: 30px;
    font-size: 0.7rem;
    color: white;
    z-index: 1;
    :hover {
        height: 40px;
        width: 80px;
        border-radius: 5px;
        margin-top: 4px;
    }
`
/**Search section */
const SearchSection = styled.section `
    width: 100%;
    height: 20vh;
    background: rgb(255,255,255);
    display: flex;
    align-items: center;
    justify-content: center;
    /**media queries */
    @media (max-width: 670px) {
        height: 30vh;
        padding-top: 80px;
    }
`
const SearchBar = styled.button `
    width: 700px;
    height: 80px;
    background-color: #87A6F5;
    border: none;
    font-size: 2.5rem;
    /**media queries */
    @media (max-width: 670px) {
        width: 400px;
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
                        <AdditionalInfo>i</AdditionalInfo>
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
            <SearchSection>
                <SearchBar> 
                    NAJÍT
                </SearchBar>
            </SearchSection>
        </>
    )
}

export default Dropdowns
