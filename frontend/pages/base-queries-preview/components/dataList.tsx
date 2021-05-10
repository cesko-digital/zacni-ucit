import { useQuery } from '@apollo/client';
import { DocumentNode, GraphQLType } from 'graphql';
import React, { useState } from 'react';
import styled from 'styled-components';
import { allTitlesQuery } from '../../queries/tmp.queries';

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const ListItem = styled.div`
  margin: 2px;
`;

const LoadingText = styled.p`
  color: #555;
`;
const ErrorText = styled.p`
  color: #a10;
`;

type Props = {
  data: { id: number; name: string }[];
  loading;
  error?;
};

//Takes data and displays their names as options of select
const DataList = ({ data, loading, error }: Props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);
  return (
    <>
      {loading ? (
        <LoadingText>Loading</LoadingText>
      ) : error ? (
        <ErrorText>Error</ErrorText>
      ) : data ? (
        <>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {data.map((college) => (
              <option key={college.id} value={college.id}>
                {college.name}
              </option>
            ))}
          </select>
          {`Vybrané id: ${selectedOption ? selectedOption : ''}`}
        </>
      ) : null}
    </>
  );
};
export default DataList;
