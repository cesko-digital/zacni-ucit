import styled from 'styled-components';
import { mediaQueries, mediaQueriesUp } from '../../common/mediaQueries';
import { theme } from '../../common/theme';
import s1Img from '../../../public/images/homepage/homepage_s1.jpg';
import s2Img from '../../../public/images/homepage/homepage_s2.jpg';
import s3Img from '../../../public/images/homepage/homepage_s3.jpg';

export const Wrap = styled.main`
  margin: 0;
  padding: 0;

  ${mediaQueriesUp('md')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto auto;
  
  & Section.section_1 {
    grid-column: 1/3;
    grid-row: 1/1;
  }

  & Section.section_2 {
    grid-column:1/1;
    grid-row: 2/2;
  }

  & Section.section_3 {
    grid-column: 1/3;
    grid-row: 3/3;
  }

  & Section.section_4 {
    grid-column: 2/2;
    grid-row: 2/2;
  }

  & Section.section_5 {
    grid-column: 1/3;
    grid-row:5/5;
  
  }

  & Section.section_6 {
    grid-column: 1/3;
    grid-row:4/4;
    justify-self:stretch;
    border-top: none;
  }

  `}

  ${mediaQueriesUp('lg')`
  padding: 2rem 0 0 0;
  `}
`;

export const GridS1Path = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1fr;
  margin: 3rem 0;
  width: 100%;

  & a#isTeachingForMe {
    grid-column: 1/1;
    grid-row: 1;
    align-self: start;
    justify-self: end;
  }

  & a#completeQualification {
    grid-column: 1/1;
    grid-row: 1/1;
    align-self: center;
    justify-self: end;
  }

  & a#startTeaching {
    grid-column: 1/1;
    grid-row: 1/1;
    align-self: end;
    justify-self: end;
  }

  & a#tryTeaching {
    grid-column: 3/3;
    grid-row: 1/1;
    align-self: start;
    justify-self: start;
  }

  & a#chooseSchool {
    grid-column: 3/3;
    grid-row: 1/1;
    align-self: end;
    justify-self: start;
  }

  & svg {
    grid-column: 2/2;
    grid-row: 1/1;
    align-self: stretch;
    justify-self: center;
  }
`;

export const GridforImg = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto auto auto;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  margin-bottom: 2rem;

  & H1 {
    grid-column: 1;
    grid-row: 1/1;
    align-self: start;
  }

  & H2 {
    grid-column: 1;
    grid-row: 1/1;
  }

  & div > p {
    grid-column: 1;
    grid-row: 2/2;

    align-self: end;
  }

  & Input {
    grid-column: 1;
    grid-row: 3/3;
    justify-self: center;
  }

  & a:nth-child(1) {
    grid-column: 1/1;
    align-self: end;
    grid-row: 3/3;
    margin-left: 1rem;
  }

  & a:nth-child(2) {
    grid-column: 2/2;
    grid-row: 3/3;
  }

  & div.section_img {
    grid-column: 2/2;
    grid-row: 1/3;
    justify-self: end;
    align-self: start;
  }

  & div.section1_path {
    grid-column: 1/3;
    grid-row: 4/4;
    align-self: stretch;
    z-index: 5;
  }

  &.section1_grid {
    ${mediaQueriesUp('md')`
      grid-template-columns: 1fr 1fr 0.5fr;
      grid-template-rows:  auto auto;
      column-gap: 0;
      

    & H1 {
    grid-column: 1;
    grid-row: 1/1;
    align-self: start;
    padding: 0;
    }

    & div#inputAndP {
    grid-column: 1;
    grid-row: 1/1;
    align-self: center;
    padding-right: 2rem;
    }

    & a#pedagogicMinimum {
    grid-column: 1/1;
    align-self: end;
    grid-row:2/2;
    margin-left: 1rem;
    justify-self: start;
    }

    & a#missedTeacher {
    grid-column: 1/1;
    grid-row: 2/2;
    justify-self: end;
    }

    & div.section_img {
      grid-column: 3/3;
      grid-row: 1/2;
      justify-self: end;
      align-self: start;
    
    }

    & div.section1_path {
    grid-column: 2/2;
    grid-row: 1/2;
    align-self: center;
    z-index: 5;
    }

  `}
  }

  &.section2_grid {
    ${mediaQueriesUp('md')`
    grid-template-columns: 15vw 2fr;
    grid-template-rows: 30vh auto auto;
    column-gap: 2rem;
   
    
    & div > p {
      grid-column: 1;
      grid-row: 2/2;
      align-self: end;
      padding-right: 5rem;
    }
  
    &#tryToTeach {
      grid-column: 2/2;
      grid-row: 3/3;
      justify-self: center;
    }

    & input#trytoTeach {
      grid-column: 2/2;
      grid-row: 2/2;
      justify-self: end;
      
    }
  

    & a {
      grid-column: 2/2;
      grid-row: 3/3;
      margin-left: 4rem;
    }


    & div.section_img {
      grid-column: 1/1;
      grid-row: 1/3;
      justify-self: start;
      align-self: start;
    }

  `}
  }

  &.section4_grid {
    ${mediaQueriesUp('md')`
    grid-template-columns: 2fr 15vw;
    grid-template-rows: 30vh auto auto;
    column-gap: 2rem;

    & a {
      grid-column:1/1;
      grid-row: 3/3;
      margin-left: 4rem;
    }

    `}
  }
`;

export const Section = styled.section`
  min-height: auto;
  max-width: 100vw;
  padding: 0rem 0 2rem 1rem;
  position: relative;

  &.section_2,
  &.section_5,
  &.section_6 {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    ${mediaQueriesUp('md')`
    border:none;
  `}
  }

  &.section_3 {
    background: ${theme.color.primary};
    color: white;

    ${mediaQueriesUp('md')`
    display:flex;
    flex-direction: column;
    align-items:center;

    & div {
      display:flex;
      align-items: center;
      justify-content: space-evenly
    }

  `}
  }

  &.section_6 {
    & img {
      margin: 1rem;
    }

    ${mediaQueriesUp('md')`
    display:flex;
    flex-direction: column;
    align-items:center;

    & div {
      display:flex;
      align-items: center;
      justify-content: space-evenly;
    }

  `}
  }

  & input {
    max-width: 300px;
  }

  &.section_2,
  &.section_4,
  &.section_5 {
    ${mediaQueriesUp('md')`
    background: rgba(127, 80, 255, 0.05);
    `}
  }

  &.section_1 {
    ${mediaQueriesUp('lg')`
    padding: 0 10vw;
    `}
  }

  &.section_2 {
    ${mediaQueriesUp('lg')`
     padding-left: 10vw;
    `}
  }

  &.section_4 {
    ${mediaQueriesUp('lg')`
 padding-right: 10vw;
  `}
  }
`;

export const Img = styled.div`
  position: relative;
  background-image: url(${s1Img});
  width: 100%;
  aspect-ratio: 1/1.5;
  border-bottom-left-radius: 90%;
  overflow: hidden;
  background-size: cover;

  ${mediaQueries('sm')`
   width: 40vw;
    aspect-ratio: 1/1.5;
  `}

  &.section1_img {
    background-position: 70% center;
  }

  &.section2_img {
    background-image: url(${s2Img});
    background-position: 25% 0;

    ${mediaQueriesUp('md')`
    border-bottom-left-radius: 90%;
    border-bottom-right-radius: 0%;
   `}

    & ::after {
      ${mediaQueriesUp('md')`
      right:0;
      border-bottom-left-radius: 60px;
      border-bottom-right-radius: 0;
      `}
    }
  }

  &.section3_img {
    background-image: url(${s3Img});
    background-position: 50% 0;

    ${mediaQueriesUp('md')`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 90%;
   `}

    & ::after {
      ${mediaQueriesUp('md')`
      left:0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 60px;
      `}
    }
  }

  & ::after {
    content: '';
    position: absolute;
    right: 0;
    width: 20%;
    height: 60%;
    background: white;
    border-bottom-left-radius: 60px;
  }
`;

export const GridS5 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr auto auto;
  column-gap: 0.5rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  & H2 {
    grid-column: 1/1;
    grid-row: 1/1;
  }

  &#bePartner {
    grid-column: 1/2;
    grid-row: 2/2;
    justify-self: stretch;
  }

  & a {
    grid-column: 1/1;
    align-self: end;
    grid-row: 3/3;
    margin-left: 1rem;
  }

  & img {
    grid-column: 2/2;
    grid-row: 1/3;
    justify-self: start;
    align-self: center;
  }

  ${mediaQueriesUp('md')`
 grid-template-columns: 1fr 2fr;


  & H2 {
  grid-column: 2/2;
  grid-row: 1/1;
  }

  &#bePartner {
  grid-column: 2/2;
  grid-row: 2/2;
  justify-self: center;
  }

  & a {
  grid-column: 2/2;
  align-self: end;

  grid-row: 3/3;
  margin-left: 1rem;
  }

   & img {
    grid-column: 1/1;
    grid-row: 1/3;
    justify-self: center;
    align-self:start;
    width: 20%;
   }

   `}
`;
