import React from 'react'
import styled from 'styled-components';

const Section = styled.section `
    height: 200px;
    width: 100%;
    display:flex;
    flex-direction: column;
    padding: 15px;
`
const SchoolNameWrapper = styled.div `
    height: 180px;
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const HeadingCard = styled.div `
    height: 180px;
    width: 600px;
    display:flex;
    align-items: center;
`
const SchoolPicture = styled.div `

    height: 150px;
    width: 150px;
    background-color: grey;
`
const SchoolName = styled.div `
    height: 150px;
    width: 450px;
    padding-left: 10px;
`
const DetailWrapper = styled.div `
    height: 180px;
    width: 200px;
    text-align: center;
`
const SchoolTextH = styled.h1 `
    line-height: 0.5;
`
const DetailButton = styled.button `
    height: 30px;
    width: 180px;
`
const DetailText = styled.p `
    font-size: 1.6rem;
    line-height: 0.5;
`

const DetailCard = () => {
    return (
        <>
            <Section>
                <SchoolNameWrapper>
                    <HeadingCard>
                        <SchoolPicture>
                            
                        </SchoolPicture>
                        <SchoolName>
                            <SchoolTextH>Univerzita Karlova</SchoolTextH>
                            <SchoolTextH>Matematicko-fyzikální fakulta</SchoolTextH>
                            <SchoolTextH>___________</SchoolTextH>
                            <SchoolTextH>Učitelství pro střední školy</SchoolTextH>
                        </SchoolName>
                    </HeadingCard>
                    <DetailWrapper>
                        <DetailButton>
                            Zpět
                        </DetailButton>
                        <DetailText>
                            Cena: 16 000 Kč
                        </DetailText>
                        <DetailText>
                            Forma: Prezenční
                        </DetailText>
                        <DetailText>
                            Místo: Praha
                        </DetailText>
                    </DetailWrapper>
                </SchoolNameWrapper>
            </Section>
        </>
    )
}

export default DetailCard
