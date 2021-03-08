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
const Wrapper  = styled.div `

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
const ResponsiveWrapper = styled.div `

margin-left:10%;
    display: flex;
    @media (max-width: 670px) {
        height: 400px;
        flex-direction: column;
        margin-left:0%;
    }
    
`
/**Fonts */
const FooterH3 = styled.h3 `

    font-size: 1.5rem;
    padding-left: 50px;
    @media (max-width: 670px) {
        padding-left: 15px;
    }
`
const FooterSecondH3 = styled.h3 `
    font-size: 1.5rem;
`
const FooterP = styled.p `
    font-size: 0.8rem;
    padding-left: 50px;
    padding-bottom: 10px;
    @media (max-width: 670px) {
        padding-left: 15px;
        padding-bottom: 0px;
    }
`
/**Logo */
const LogoWrapper = styled.div `

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
const HeadingWrapper = styled.div `
 
    max-width: 640px;
    height: 70px;
    text-align: center;
    @media (max-width: 670px) {
        width: 200px;
    }
`
const PartnersWrapper  = styled.div `

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
const Partners = styled.div ` 
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
                <ResponsiveWrapper>
                    <LogoWrapper>
                        <Logo>

                        </Logo>
                    </LogoWrapper>
                    <Wrapper>
                        <FooterH3>ZACNIUCIT.CZ</FooterH3>
                        <FooterP>
                            info@zacniucit.cz <br/>
                            <br/>
                            výluka z.s. <br/>
                            Ovocný trh 560/5<br/>
                            Staré Město, 110 00 Praha<br/>
                            &copy; 2021 - ZačniUČIT.cz
                        </FooterP>
                    </Wrapper>
                </ResponsiveWrapper>
                <ResponsiveWrapper>
                    <Wrapper>
                        <HeadingWrapper>
                            <FooterSecondH3>Naši partneři</FooterSecondH3>
                        </HeadingWrapper>
                        <PartnersWrapper>
                            <Partners/>
                            <Partners/>
                            <Partners/>
                            <Partners/>
                        </PartnersWrapper>
                    </Wrapper>
                </ResponsiveWrapper>
            </FooterSection>
        </>
    )
}

export default Footer
