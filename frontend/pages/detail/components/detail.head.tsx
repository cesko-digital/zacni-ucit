import React from 'react'
import styled from 'styled-components';

const Section = styled.section `
    height: 30px;
    width: 100%;
    display: flex;
    align-items: space-between;
`
const Input = styled.div `
    height: 30px;
    width: 200px;
    text-align: center;
    font-size: 0.9rem;
`
const Filter = styled.button `
    height: 30px;
    width: 200px;
    text-align: center;
    font-size: 0.9rem;
`
const DetailHead = () => {
    return (
        <>
            <Section>
                <Input> Jazyky </Input>
                <Input> Vzdálenost od bydliště </Input>
                <Input> Cena </Input>
                <Input> Učení se nových věcí</Input>
                <Input> Pedagogické vzdělání</Input>
                <Input> Délka Studia</Input>
                <Input> Deadline pro přihlášky </Input>
                <Filter> Více Filtrů</Filter>
            </Section>
        </>
    )
}

export default DetailHead

