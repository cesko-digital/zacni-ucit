import React from 'react';
import styled from 'styled-components';
import { useQuery } from "@apollo/client";
import { ALL_COLLEGES_QUERY } from '../../queries/colleges.queries';


const Welcome = styled.div`
  background-color: ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.white};
`;

const Courses = () => {
  const { loading, error, data } = useQuery(ALL_COLLEGES_QUERY);
  console.log(data)
  return (
    <>
      <Welcome>Kurzy</Welcome>
    </>
  );
};
export default Courses;
