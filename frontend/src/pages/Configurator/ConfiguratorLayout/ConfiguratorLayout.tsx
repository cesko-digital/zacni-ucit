import { Formik, Form } from 'formik';
import React from 'react';

import Container from '@components/Container/Container';
import { useRouter } from 'next/router';

export type ConfiguratorValues = {
  degree: string | null;
  subject: string | null;
  education: string | null;
  educationArea: string | null;
  teachingEducation: {
    degree: string | null;
    subject: string | null;
  };
};

interface IProps {
  queryRequired?: boolean;
}

const initialValues = {
  degree: null,
  subject: null,
  education: null,
  educationArea: null,
  teachingEducation: {
    degree: null,
    subject: null,
  },
};

const ConfiguratorLayout: React.FC<IProps> = ({ queryRequired = true, children }) => {
  const router = useRouter();

  if (queryRequired && Object.keys(router.query).length === 0) {
    return null;
  }

  return (
    <Formik<ConfiguratorValues>
      initialValues={router.query ? { ...initialValues, ...router.query } : initialValues}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {() => (
        <Form noValidate>
          <main>
            <Container>{children}</Container>
          </main>
        </Form>
      )}
    </Formik>
  );
};

export default ConfiguratorLayout;