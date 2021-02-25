import React,{useState} from 'react'
import Dropdowns from './DropDowns'
import Headline from './Headline'
import Search from './Search'



const Homepage = () => {

    return (
        <>
            <Headline />
            <Dropdowns />
            <Search />
        </>
    )
}

export default Homepage
