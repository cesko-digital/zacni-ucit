import React from 'react'
import styled from "styled-components"

const SearchSection = styled.section `
    width: 100%;
    height: 20vh;
    background: rgb(255,255,255);
    display: flex;
    align-items: center;
    justify-content: center;
`
const SearchBar = styled.button `
    width: 700px;
    height: 80px;
    background-color: #87A6F5;
    border: none;
    font-size: 2.5rem
`
const Search = () => {
    return (
        <>
            <SearchSection>
                <SearchBar> 
                    NAJÍT
                </SearchBar>
            </SearchSection>
        </>
    )
}

export default Search
