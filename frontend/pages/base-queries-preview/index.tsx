import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  allCollegesQuery,
  allSchoolLevelsQuery,
  allSubjectsQuery,
  allTitlesQuery,
} from '../../queries/base.queries';
import DataList from './components/dataList';

const Wrap = styled.div`
  padding: 16px;
`;
const Title = styled.div`
  margin: 12px 0 4px 0;
`;
const ButtonContainerDiv = styled.div`
  margin: 24px 0 8px 0;
`;

//* Page for showcasing Queries - only temporary
const BaseQueriesPreview = () => {
  // UseLazyQuery fetches the data on function call - in this case getTitles
  const [
    getTitles,
    { error: titlesError, loading: titlesLoading, data: titlesData },
  ] = useLazyQuery(allTitlesQuery);

  // useQuery starts to fetch data on load - ussualy returns {loading:Boolean, error:boolean, data}
  const allCollegesQueryResponse = useQuery(allCollegesQuery);
  const allSchoolsLevelsQueryResponse = useQuery(allSchoolLevelsQuery);
  const allSubjectsQueryResponse = useQuery(allSubjectsQuery);

  const _onButtonPress = () => {
    getTitles();
  };
  return (
    <>
      <Wrap>
        <Title>Vysoké školy</Title>
        <DataList
          error={allCollegesQueryResponse.error}
          loading={allCollegesQueryResponse.loading}
          data={allCollegesQueryResponse.data?.colleges}
        />
        <Title>Stupně: </Title>
        <DataList
          error={allSchoolsLevelsQueryResponse.error}
          loading={allSchoolsLevelsQueryResponse.loading}
          data={allSchoolsLevelsQueryResponse.data?.schoolLevels}
        />
        <Title>Předměty: </Title>
        <DataList
          error={allSubjectsQueryResponse.error}
          loading={allSubjectsQueryResponse.loading}
          data={allSubjectsQueryResponse.data?.subjects}
        />
        <ButtonContainerDiv>
          <button onClick={_onButtonPress}>Získej tituly</button>
        </ButtonContainerDiv>
        <Title>Tituly</Title>
        <DataList
          error={titlesError}
          loading={titlesLoading}
          data={titlesData?.titles}
        />
      </Wrap>
    </>
  );
};
export default BaseQueriesPreview;
