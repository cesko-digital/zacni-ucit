import React from 'react'
import styled from "styled-components"

/**Section */
const FooterSection = styled.section `
    width: 100%;
    height: 200px;
    background-color: #F1F1F1;
    display: flex;
    @media (max-width: 670px) {
        height: 400px;
        flex-direction: row;
    }
`
const Container  = styled.div `
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 670px) {
        width: 250px;
        height: 400px;
        justify-content: flex-end;
    }
`
const ResponsiveContainer = styled.div `
    display: flex;
    @media (max-width: 670px) {
        height: 400px;
        flex-direction: column;
    }
    
`
/**Fonts */
const FooterH3 = styled.h3 `
    font-size: 1.5rem;
    padding-left: 50px;
    @media (max-width: 670px) {
        padding-left: 10px;
    }
`
const FooterSecondH3 = styled.h3 `
    font-size: 1.5rem;
`
const FooterP = styled.p `
    font-size: 0.8rem;
    padding-left: 50px;
    @media (max-width: 670px) {
        padding-left: 10px;
    }
`
/**Logo */
const Logocontainer = styled.div `
    width: 130px;
    height: 200px;
    padding-top: 10px;
    padding-left: 20px;
    @media (max-width: 670px) {
        height: 130px;
    }
`
const Logo = styled.div `
    height: 130px;
    width: 130px;
    background-color: #C4C4C4;
    border-radius: 100px;
`
/**Naši partneři */
const HeadingContainer = styled.div ` 
    max-width: 640px;
    height: 70px;
    text-align: center;
    @media (max-width: 670px) {
        width: 200px;
    }
`
const BlankDivContainer = styled.div `
    max-width: 640px;
    height: 130px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: space-evenly;
    justify-content: space-evenly;
    @media (max-width: 670px) {
        flex-direction: column;
        width: 200px;
        height: 350px;
        flex-wrap: nowrap;
        align-items: center;
    }
`
const BlankDiv = styled.div ` 
    height: 90px;
    width: 90px;
    background-color: #C4C4C4;
    @media (max-width: 670px) {
        height: 70px;
        width: 70px;
        margin: 10px;
    }
`

const Footer = () => {
    return (
        <>
            <FooterSection>
                <ResponsiveContainer>
                    <Logocontainer>
                        <Logo>

                        </Logo>
                    </Logocontainer>
                    <Container>
                        <FooterH3>ZACNIUCIT.CZ</FooterH3>
                        <FooterP>
                            info@zacniucit.cz <br/>
                            <br/>
                            výluka z.s. <br/>
                            Ovocný trh 560/5<br/>
                            Staré Město, 110 00 Praha<br/>
                            &copy; 2021 - ZačniUČIT.cz
                        </FooterP>
                    </Container>
                </ResponsiveContainer>
                <ResponsiveContainer>
                    <Container>
                        <HeadingContainer>
                            <FooterSecondH3>Naši partneři</FooterSecondH3>
                        </HeadingContainer>
                        <BlankDivContainer>
                            <BlankDiv/>
                            <BlankDiv/>
                            <BlankDiv/>
                            <BlankDiv/>
                        </BlankDivContainer>
                    </Container>
                </ResponsiveContainer>
            </FooterSection>
        </>
    )
}

export default Footer
