import React,{useState} from 'react'
import Head from "./components/Head"
import CurrentEducationWrapper from './components/CurrentEducationWrapper.js'
import ChooseGrade from './components/ChooseGrade'
import ChooseSubject from './components/ChooseSubject'
import SearchMore from './components/SearchMore'


const HomePage = () => {

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

export default HomePage
