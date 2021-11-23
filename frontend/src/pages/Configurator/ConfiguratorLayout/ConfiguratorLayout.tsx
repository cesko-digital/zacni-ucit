import { Formik, Form } from 'formik';
import React from 'react';

import { useRouter } from 'next/router';
import Cta from '@components/Cta/Cta';

export type ConfiguratorValues = {
  stupen: string | null;
  predmet: string | null;
  vzdelani: string | null;
  oblast: string | null;
  stupenSpecializace: string | null;
  predmetSpecializace: string | null;
};

interface IProps {
  queryRequired?: boolean;
}

const initialValues: ConfiguratorValues = {
  stupen: null,
  predmet: null,
  vzdelani: null,
  oblast: null,
  stupenSpecializace: null,
  predmetSpecializace: null,
};

const ConfiguratorLayout: React.FC<IProps> = ({ queryRequired = true, children }) => {
  const router = useRouter();

  if (queryRequired && Object.keys(router.query).length === 0) {
    return null;
  }

  return (
    <>
      <Formik<ConfiguratorValues>
        initialValues={router.query ? { ...initialValues, ...router.query } : initialValues}
        enableReinitialize
        onSubmit={() => {}}
      >
        {() => (
          <Form noValidate>
            <main>{children}</main>
          </Form>
        )}
      </Formik>
      <Cta />
    </>
  );
};

export default ConfiguratorLayout;
