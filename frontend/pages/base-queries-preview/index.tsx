import { ApolloQueryResult, useLazyQuery } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import { initializeApollo } from '../../apolloClient';
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

type Props = {
  allCollegesQueryResponse: ApolloQueryResult<any>;
  allSchoolsLevelsQueryResponse: ApolloQueryResult<any>;
  allSubjectsQueryResponse: ApolloQueryResult<any>;
};

//* Page for showcasing Queries - only temporary
const BaseQueriesPreview = (props: Props) => {
  // UseLazyQuery fetches the data on function call - in this case getTitles
  const [
    getTitles,
    { error: titlesError, loading: titlesLoading, data: titlesData },
  ] = useLazyQuery(allTitlesQuery);

  const {
    allCollegesQueryResponse,
    allSchoolsLevelsQueryResponse,
    allSubjectsQueryResponse,
  } = props;

  return (
    <>
      <Wrap>
        <Title>Vysoké školy</Title>
        <DataList
          error={allCollegesQueryResponse?.error}
          loading={allCollegesQueryResponse?.loading}
          data={allCollegesQueryResponse?.data?.colleges}
        />
        <Title>Stupně: </Title>
        <DataList
          error={allSchoolsLevelsQueryResponse?.error}
          loading={allSchoolsLevelsQueryResponse?.loading}
          data={allSchoolsLevelsQueryResponse?.data?.schoolLevels}
        />
        <Title>Předměty: </Title>
        <DataList
          error={allSubjectsQueryResponse?.error}
          loading={allSubjectsQueryResponse?.loading}
          data={allSubjectsQueryResponse?.data?.subjects}
        />
        <ButtonContainerDiv>
          <button
            onClick={() => {
              getTitles();
            }}
          >
            Získej tituly
          </button>
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

export const getStaticProps = async () => {
  try {
    const apolloClient = initializeApollo();
    //Fetch the static data during the build phase
    const allCollegesQueryResponse = await apolloClient.query({
      query: allCollegesQuery,
    });
    const allSchoolsLevelsQueryResponse = await apolloClient.query({
      query: allSchoolLevelsQuery,
    });
    const allSubjectsQueryResponse = await apolloClient.query({
      query: allSubjectsQuery,
    });
    return {
      props: {
        allCollegesQueryResponse,
        allSchoolsLevelsQueryResponse,
        allSubjectsQueryResponse,
      },
    };
  } catch {
    return {
      props: {
        allCollegesQueryResponse: { error: true },
        allSchoolsLevelsQueryResponse: { error: true },
        allSubjectsQueryResponse: { error: true },
      },
    };
  }
};

export default BaseQueriesPreview;
