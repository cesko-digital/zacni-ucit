import { Formik, Form } from 'formik';
import React from 'react';

import { useRouter } from 'next/router';

export type ConfiguratorValues = {
  degree: string | null;
  subject: string | null;
  education: string | null;
  educationArea: string | null;
  teachingEducationDegree: string | null;
  teachingEducationSubject: string | null;
};

interface IProps {
  queryRequired?: boolean;
}

const initialValues = {
  degree: null,
  subject: null,
  education: null,
  educationArea: null,
  teachingEducationDegree: null,
  teachingEducationSubject: null,
};

const ConfiguratorLayout: React.FC<IProps> = ({ queryRequired = true, children }) => {
  const router = useRouter();

  if (queryRequired && Object.keys(router.query).length === 0) {
    return null;
  }

  return (
    <Formik<ConfiguratorValues>
      initialValues={router.query ? { ...initialValues, ...router.query } : initialValues}
      enableReinitialize
      onSubmit={() => { }}
    >
      {() => (
        <Form noValidate>
          <main>{children}</main>
        </Form>
      )}
    </Formik>
  );
};

export default ConfiguratorLayout;
