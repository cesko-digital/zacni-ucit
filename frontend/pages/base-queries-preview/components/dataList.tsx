import React, { useState } from 'react';
import styled from 'styled-components';

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
