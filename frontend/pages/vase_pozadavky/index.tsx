import React,{useState} from 'react'
import Dropdowns from './components/DropDowns'
import Headline from './components/Headline'
import Head from "./components/Head"
import CurrentEducationWrapper from './components/CurrentEducationWrapper.js'
import ChooseGrade from './components/ChooseGrade'
import ChooseSubject from './components/ChooseSubject'
import SearchMore from './components/SearchMore'


const Homepage = () => {

    return (
        <>
            <Head />
            <CurrentEducationWrapper />
            <ChooseGrade />
            <ChooseSubject />
            <SearchMore />
        </>
    )
}

export default Homepage
