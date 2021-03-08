import React from 'react'
import styled from 'styled-components';

const Section = styled.section `
    height:500px;
    display: flex;
    flex-direction: column;
`
const DescriptionWrapper = styled.div `
    
`
const ConditionsWrapper = styled.div `
`
const CourseDateWrapper = styled.div `      
`
const Wrapper = styled.div `
display: flex;
height: 200px;
`
const ReferenceWrapper = styled.div `
`
const Reference = styled.div `
width: 400px;
float: left
`
const JoinBttnWrappper = styled.div `
width: 350px;
display: flex;
align-items: center;
justify-content: center;
`
const JoinBttn = styled.button `
width: 300px;
height: 50px;
background-color: blueviolet;
border: none;
`

const detailCardDescription = () => {
    return (
        <>
            <Section>
                <DescriptionWrapper>
                    <h3>Popis:</h3>
                    Vzdělávací program Učitelství pro střední školy se zaměřuje na pedagogickou, psychologickou, oborově didaktickou
                    a praktickou přípravu učitelů středních škol, kteří příslušné učitelské vzdělávání neabsolvovali v rámci oborového
                    vysokoškolského studia.
                </DescriptionWrapper>
                <ConditionsWrapper>
                    <h3>Podmínky:</h3>
                    CŽV uskotečňovaném VŠ a zaměřeném na přípravu SŠ
                </ConditionsWrapper>
                <CourseDateWrapper>
                    <h3>Zahájení kurzu:</h3>
                    2.10.2020
                </CourseDateWrapper>
                <Wrapper>
                    <ReferenceWrapper>
                        <h3>Zkušenosti bývalých studentů:</h3>
                        <Reference>
                            <b>Michal Kostka</b> <br />
                            Jedná se o průměrně náročnou školu, kvality pedagogů/pedagožek jsou rozdílné - to je však
                            asi na každé fakultě. Rodinné prostředí a přátelský přístup většiny vyučujících. Škola je 
                            umístěna na pěkném místě, ačkoliv dotupnost je mírně horší.
                        </Reference>
                        <Reference>
                            <b>Michal Kostka</b> <br />
                            Jedná se o průměrně náročnou školu, kvality pedagogů/pedagožek jsou rozdílné - to je však
                            asi na každé fakultě. Rodinné prostředí a přátelský přístup většiny vyučujících. Škola je 
                            umístěna na pěkném místě, ačkoliv dotupnost je mírně horší.
                        </Reference>
                    </ReferenceWrapper>
                    <JoinBttnWrappper>
                        <JoinBttn> 
                            Připoj se
                        </JoinBttn>
                    </JoinBttnWrappper>
                </Wrapper>
            </Section>
        </>
    )
}

export default detailCardDescription
