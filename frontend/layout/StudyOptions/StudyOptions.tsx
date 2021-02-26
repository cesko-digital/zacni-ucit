import React from 'react'
import styled from 'styled-components';
import SchoolIcon from '@material-ui/icons/School';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import RoomIcon from '@material-ui/icons/Room';
import TuneIcon from '@material-ui/icons/Tune';

/**Section */
const StudyOptionsSection = styled.section `
    height: 100vh;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`
/**Containers */
const TextContainer = styled.div `
    height: 55vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const HeadingContainer = styled.div `
    height: 15vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const InnerTextContainer = styled.div `
    height: 25vh;
    width: 70%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
const FilterContainer = styled.div `
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-top: 30px;
`
const ResultsCotainer = styled.div `
    height: 35vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ResultsFirstSubContainer = styled.div`
    width: 60%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const ResultsSecondSubContainer = styled.div`
    width: 90%;
    height: 30vh;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`
const ResultContainer = styled.div `
    width: 340px;
    height: 18vh;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    padding: 15px 5px 10px 5px;
`
const ResultContainerH1 = styled.h1 `
    position: absolute;
    margin-top: -20px;
    margin-left: 10px; 
    background: white;
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
const ResultMainContainer = styled.div `
    width: 340px;
    height: 19vh;
    display: flex;
    flex-direction: column;
`
const ResultTextContainer = styled.div `
    height: 5vh;
    min-width: 70px;
    max-width: 120px;
    display: flex;
    flex-direction: column;
`
/**Font */
const MainHeading = styled.h1 `
    font-size: 2.5rem;
`
const RedText = styled.h3 `
    color: red;
    font-weight: 500;
`
const ResultH5 = styled.h5 `
    font-size: 11px;
    margin-top: -10px
`
const ResultP = styled.p `
    font-size: 7px;
`
/**Buttons */

const FilterButton = styled.button `
    height: 3.5vh;
    width: 150px;
    background-color: rgb(255,255,255);
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    :active {
        background-color: #31ACBB;
        color:white;
        outline:none;
        border: none;
    };
    :focus {
        outline: none;
    }
    :hover {
        background-color: #31ACBB;
        color:white
    }
`

const Qualifications = styled.button `
    width: 200px;
    height: 4.9vh;
    text-align: center;
    background-color: white;
    color:black;
    font-size: 1rem;
    text-decoration: none;
    border: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    :hover {
        background-color: #31ACBB;
        color:white
    };
    :focus {
        background-color: #31ACBB;
        color:white;
        outline:none
    }
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
/**Additional */
const ResultImg = styled.div `
    height: 5vh;
    width: 25px;
    padding-top: 5px;
`
const ShowMore = styled.div `
    text-align: center;
    padding: 15px;
`

const StudyOptions = () => {
    return (
        <>
            <StudyOptionsSection>
                <TextContainer>
                    <HeadingContainer>
                        <MainHeading>
                            Možnosti studia:
                        </MainHeading>
                    </HeadingContainer>
                    <InnerTextContainer>
                        <RedText>
                            Našli jsme 150 výsledků, doporučujeme použít filtry pro přesnější výsledky
                        </RedText>
                        <h5>    Titul - </h5>
                        <h5>    Kvalifikace -   </h5>
                        <h5>    CŽV -   </h5>
                    </InnerTextContainer>
                    <FilterContainer>
                        <FilterButton>
                            FILTROVAT
                            <TuneIcon fontSize="small" />
                        </FilterButton>
                    </FilterContainer>
                </TextContainer>
                <ResultsCotainer>
                    <ResultsFirstSubContainer>
                        <Qualifications>
                            Titul
                        </Qualifications>
                        <Qualifications>
                            Kvalifikace
                        </Qualifications>
                        <Qualifications>
                            CŽV
                        </Qualifications>
                    </ResultsFirstSubContainer>
                    <ResultsSecondSubContainer>
                        <ResultMainContainer>
                            <ResultContainerH1>Masarykova Univerzita</ResultContainerH1>
                            <ResultContainer>
                                <ResultInnerBasicContainer>
                                    <ResultImg>
                                        <WatchLaterIcon/>    
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   DÉLKA STUDIA    </ResultP>
                                        <ResultH5>  3 roky  </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerBasicContainer>
                                <ResultInnerBasicContainer>
                                    <ResultImg><AttachMoneyIcon/></ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   CENA STUDIA </ResultP>
                                        <ResultH5>  20 000 Kč/rok   </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerBasicContainer>
                                <ResultInnerBasicContainer>
                                    <ResultImg>
                                        <RoomIcon/>
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   MÍSTO STUDIA    </ResultP>
                                        <ResultH5>  Brno,cz </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerBasicContainer>
                                <ResultInnerExtendedContainer>
                                    <ResultImg>
                                        <SchoolIcon/>
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   ZAKONČENÍ STUDIA    </ResultP>
                                        <ResultH5>  Titul - <i>Bakalář</i> (Bc.)    </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerExtendedContainer>
                                <ResultDetailButton>
                                    <h5>    DETAIL  </h5>
                                </ResultDetailButton>
                            </ResultContainer>
                        </ResultMainContainer>
                        <ResultMainContainer>
                            <ResultContainerH1>     Univerzita Karlova  </ResultContainerH1>
                            <ResultContainer>
                                <ResultInnerBasicContainer>
                                    <ResultImg>
                                        <WatchLaterIcon/>    
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   DÉLKA STUDIA    </ResultP>
                                        <ResultH5>  3 roky  </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerBasicContainer>
                                <ResultInnerBasicContainer>
                                    <ResultImg>
                                        <AttachMoneyIcon/>
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   CENA STUDIA </ResultP>
                                        <ResultH5>  Zdarma  </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerBasicContainer>
                                <ResultInnerBasicContainer>
                                    <ResultImg>
                                        <RoomIcon/>
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   MÍSTO STUDIA    </ResultP>
                                        <ResultH5>  Praha,cz    </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerBasicContainer>
                                <ResultInnerExtendedContainer>
                                    <ResultImg>
                                        <SchoolIcon/>
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   ZAKONČENÍ STUDIA    </ResultP>
                                        <ResultH5>  Titul - <i>Bakalář</i> (Bc.)    </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerExtendedContainer>
                                <ResultDetailButton>
                                    <h5>    DETAIL  </h5>
                                </ResultDetailButton>
                            </ResultContainer>
                        </ResultMainContainer>
                        <ResultMainContainer>
                            <ResultContainerH1> VŠE Praha   </ResultContainerH1>
                            <ResultContainer>
                                <ResultInnerBasicContainer>
                                    <ResultImg>
                                        <WatchLaterIcon/>    
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   DÉLKA STUDIA    </ResultP>
                                        <ResultH5>  3 roky  </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerBasicContainer>
                                <ResultInnerBasicContainer>
                                    <ResultImg>
                                        <AttachMoneyIcon/>
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   CENA STUDIA </ResultP>
                                        <ResultH5>  10 000 Kč/rok   </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerBasicContainer>
                                <ResultInnerBasicContainer>
                                    <ResultImg>
                                        <RoomIcon/>
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   MÍSTO STUDIA    </ResultP>
                                        <ResultH5>  Praha,cz    </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerBasicContainer>
                                <ResultInnerExtendedContainer>
                                    <ResultImg>
                                        <SchoolIcon/>
                                    </ResultImg>
                                    <ResultTextContainer>
                                        <ResultP>   ZAKONČENÍ STUDIA    </ResultP>
                                        <ResultH5>  Titul - <i>Bakalář</i> (Bc.)    </ResultH5>
                                    </ResultTextContainer>
                                </ResultInnerExtendedContainer>
                                <ResultDetailButton>
                                    <h5>    DETAIL  </h5>
                                </ResultDetailButton>
                            </ResultContainer>
                        </ResultMainContainer>
                    </ResultsSecondSubContainer>
                </ResultsCotainer>
                <ShowMore>  Zobrazit více   </ShowMore>
            </StudyOptionsSection>
        </>
    )
}

export default StudyOptions
