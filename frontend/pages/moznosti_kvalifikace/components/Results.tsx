import React, {useState} from 'react'
import styled from 'styled-components';
import SchoolIcon from '@material-ui/icons/School';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import RoomIcon from '@material-ui/icons/Room';
import Link from 'next/link'

const ResultsWrapper = styled.div`
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
const ResultWrapper = styled.div `
    width: 340px;
    height: 18vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    padding: 15px 5px 10px 5px;
`
const ResultInnerBasicWrapper = styled.div `
    height: 5vh;
    width: 105px;
    display:flex;
    padding-left: 5px;
`
const ResultInnerExtendedWrapper= styled.div `
    height: 5vh;
    min-width: 120px;
    display:flex;
    padding-left: 5px; 
`
const ResultMainWrapper = styled.fieldset `
    width: 340px;
    height: 19vh;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    @media (max-width: 650px) {
        margin-top: 5vh;
    }
`
const ResultTextWrapper = styled.div `
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
                <ResultsWrapper>
                    {load=== true ? schools.map(res => {
                        return  <>
                        <ResultMainWrapper>
                            <Legend>{res.name}</Legend>
                            <ResultWrapper>
                                <ResultInnerBasicWrapper>
                                    <ResultImg>
                                        <WatchLaterIcon/>    
                                    </ResultImg>
                                    <ResultTextWrapper>
                                        <ResultP>   DÉLKA STUDIA    </ResultP>
                                        <ResultH5>  {res.length} </ResultH5>
                                    </ResultTextWrapper>
                                </ResultInnerBasicWrapper>
                                <ResultInnerBasicWrapper>
                                    <ResultImg><AttachMoneyIcon/></ResultImg>
                                    <ResultTextWrapper>
                                        <ResultP>   CENA STUDIA </ResultP>
                                        <ResultH5>  {res.price}   </ResultH5>
                                    </ResultTextWrapper>
                                </ResultInnerBasicWrapper>
                                <ResultInnerBasicWrapper>
                                    <ResultImg>
                                        <RoomIcon/>
                                    </ResultImg>
                                    <ResultTextWrapper>
                                        <ResultP>   MÍSTO STUDIA    </ResultP>
                                        <ResultH5>  {res.place} </ResultH5>
                                    </ResultTextWrapper>
                                </ResultInnerBasicWrapper>
                                <ResultInnerExtendedWrapper>
                                    <ResultImg>
                                        <SchoolIcon/>
                                    </ResultImg>
                                    <ResultTextWrapper>
                                        <ResultP>   ZAKONČENÍ STUDIA    </ResultP>
                                        <ResultH5>  {res.title}    </ResultH5>
                                    </ResultTextWrapper>
                                </ResultInnerExtendedWrapper>
                                <Link href={`/moznosti_kvalifikace/detail`}>
                                <ResultDetailButton>                                   
                                        <h5>    DETAIL  </h5>                           
                                </ResultDetailButton>
                                </Link>
                            </ResultWrapper>
                        </ResultMainWrapper>
                                </>
                    }): 
                        <NullResults>
                            No Schools currently available
                        </NullResults>
                        }
                </ResultsWrapper>   
            </>
    )
}

export default Results
