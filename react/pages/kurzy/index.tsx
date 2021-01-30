import React from 'react';
import styled from 'styled-components';

const Welcome = styled.div`
  background-color: ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.white};
`;

const Courses = () => {
  return (
    <>
      <Welcome>Kurzy</Welcome>
    </>
  );
};
export default Courses;
