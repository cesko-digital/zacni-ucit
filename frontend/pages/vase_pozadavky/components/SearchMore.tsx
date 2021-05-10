import React from 'react'
import styled from 'styled-components'

const MainSection = styled.section `
    width: 100%;
    height: 20vh;
    text-align: center;
`
const MainButton = styled.button `
    height: 40px;
    width: 200px;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    background-color: #31ACBB;
    color: white;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    :focus {
        outline:none
    };
`
const SearchMore = () => {
    return (
        <>
            <MainSection>
                <MainButton> Hledat </MainButton>
            </MainSection>
        </>
    )
}

export default SearchMore
