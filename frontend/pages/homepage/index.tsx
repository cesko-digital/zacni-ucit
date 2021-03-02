import React,{useState} from 'react'
import Dropdowns from './components/DropDowns'
import Headline from './components/Headline'
import Head from "./components/Head"
import CurrentEducation from './components/CurrentEducation'
import ChooseGrade from './components/ChooseGrade'
import ChooseSubject from './components/ChooseSubject'
import SearchMore from './components/SearchMore'




const Homepage = () => {

    return (
        <>
            <Head />
            <CurrentEducation />
            <ChooseGrade />
            <ChooseSubject />
            <SearchMore />
        </>
    )
}

export default Homepage
