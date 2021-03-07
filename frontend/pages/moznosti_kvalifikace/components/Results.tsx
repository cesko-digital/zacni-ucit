import React, {useState} from 'react'
import styled from 'styled-components';
import SchoolIcon from '@material-ui/icons/School';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import RoomIcon from '@material-ui/icons/Room';
import { BrokenImage } from '@material-ui/icons';
import Link from 'next/link'

const ResultsContainer = styled.div`
    width: 95%;
    height: auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 10vh; 
    @media (max-width: 650px) {
        justify-content: center;
        align-items: flex-start;
        padding-top: 0vh;
    }
`
const ResultContainer = styled.div `
    width: 340px;
    height: 18vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    padding: 15px 5px 10px 5px;
`
const ResultInnerBasicContainer = styled.div `
    height: 5vh;
    width: 105px;
    display:flex;
    padding-left: 5px;
`
const ResultInnerExtendedContainer = styled.div `
    height: 5vh;
    min-width: 120px;
    display:flex;
    padding-left: 5px; 
`
const ResultMainContainer = styled.fieldset `
    width: 340px;
    height: 19vh;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    @media (max-width: 650px) {
        margin-top: 5vh;
    }
`
const ResultTextContainer = styled.div `
    height: 5vh;
    min-width: 70px;
    max-width: 120px;
    display: flex;
    flex-direction: column;
`
const Legend = styled.legend `
    font-size: 1.5rem;
    font-weight: bold;
`
const ResultH5 = styled.h5 `
    font-size: 11px;
    margin-top: -10px
`
const ResultP = styled.p `
    font-size: 7px;
`
const ResultImg = styled.div `
    height: 5vh;
    width: 25px;
    padding-top: 5px;
`
const ResultDetailButton = styled.button `
    width: 110px;
    height: 4.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(255,255,255);
    border: 1px solid #31ACBB;
    border-radius: 5px;
    color: #31ACBB;
    cursor: pointer;
    :focus {
        background-color: #31ACBB;
        color:white;
        outline:none
    };
    :hover {
        background-color: #31ACBB;
        color:white
    }
`
const NullResults = styled.div `
    text-align: center;
    font-weight: bold;
    width: 100%;
`
const Results = () => {
    const [load, setLoad] = useState(true)
    const schools = ([
        {
            name: "Masaryokova Univerzita",
            length: "3 roky",
            price: "20 000 kč/rok",
            place: "Brno, CZ",
            title: "Bakalář"
        },
        {
            name: "Univerzita Karlova",
            length: "3 roky",
            price: "Zdarma",
            place: "Praha, CZ",
            title: "Bakalář"
        },
        {
            name: "VŠE",
            length: "3 roky",
            price: "10 000 Kč/rok",
            place: "Praha, CZ",
            title: "Bakalář"
        },        
    ])
    
    return (
            <>
                <ResultsContainer>
                    {load=== true ? schools.map(res => {
                        return  <>
                        <ResultMainContainer>
                            <Legend>{res.name}</Legend>
                            <ResultContainer>
                                <ResultInnerBasicContainer>
                                    <ResultImg>
                                        <WatchLaterIcon/>    
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   DÉLKA STUDIA    </ResultP>
                                        <ResultH5>  {res.length} </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerBasicContainer>
                                <ResultInnerBasicContainer>
                                    <ResultImg><AttachMoneyIcon/></ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   CENA STUDIA </ResultP>
                                        <ResultH5>  {res.price}   </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerBasicContainer>
                                <ResultInnerBasicContainer>
                                    <ResultImg>
                                        <RoomIcon/>
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   MÍSTO STUDIA    </ResultP>
                                        <ResultH5>  {res.place} </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerBasicContainer>
                                <ResultInnerExtendedContainer>
                                    <ResultImg>
                                        <SchoolIcon/>
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   ZAKONČENÍ STUDIA    </ResultP>
                                        <ResultH5>  {res.title}    </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerExtendedContainer>
                                <ResultDetailButton>
                                    <Link href={`/moznosti_kvalifikace/detail/${res.name}`}>
                                        <h5>    DETAIL  </h5>
                                    </Link>
                                </ResultDetailButton>
                            </ResultContainer>
                        </ResultMainContainer>
                                </>
                    }): 
                        <NullResults>
                            No Schools currently available
                        </NullResults>
                        }
                </ResultsContainer>   
            </>
    )
}

export default Results
