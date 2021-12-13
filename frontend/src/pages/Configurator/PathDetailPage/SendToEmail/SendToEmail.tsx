import { gql, useMutation } from '@apollo/client';
import validateEmail from 'validator/lib/isEmail';
import validateEmpty from 'validator/lib/isEmpty';
import trim from 'validator/lib/trim';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import { Message } from '@components/Message/Message';
import Modal from '@components/Modal/Modal';
import { Separator } from '../styled';
import CheckIcon from '@icons/check.svg';

interface IProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const sendMailMutation = gql`
  mutation sendResults($email: String!, $url: String!) {
    sendResults(toEmail: $email, url: $url) {
      ok
    }
  }
`;

const isEmpty = (value?: string) => !value || validateEmpty(trim(value));

const isEmail = (value: string) =>
  isEmpty(value) || !validateEmail(trim(value))
    ? 'Prosím vyplňte platnou e-mailovou adresu'
    : undefined;

export const SendToEmail: React.FC<IProps> = ({ isOpen, openModal, closeModal }) => {
  const router = useRouter();
  const [mutateSendResults, { data, loading, reset }] = useMutation(sendMailMutation);

  return (
    <>
      <Separator />
      <Button onClick={() => openModal()}>Poslat výsledky na e–mail</Button>
      {isOpen && (
        <Modal
          title="Zaslání výsledků na e-mail"
          isOpen={isOpen}
          closeModal={() => {
            closeModal();
            reset();
          }}
        >
          <p>
            Zadejte e-mail, na který vám pošleme seznam kurzů, díky kterým se můžete stát učitelem.
          </p>
          {data?.sendResults.ok ? (
            <Message icon={<CheckIcon />}>
              <strong>Odesláno! Ve vaší e-mailové schránce za chvíli najdete seznam kurzů.</strong>
            </Message>
          ) : (
            <Formik
              initialValues={{ email: '' }}
              onSubmit={values => {
                mutateSendResults({
                  variables: {
                    email: values.email,
                    url: `${window.location.origin}${router.asPath}`,
                  },
                });
              }}
            >
              {() => (
                <Form noValidate>
                  <Input name="email" label="Váš e-mail" validate={value => isEmail(value)} />
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Odesílání...' : 'Odeslat výsledky na e-mail'}
                  </Button>
                </Form>
              )}
            </Formik>
          )}
        </Modal>
      )}
    </>
  );
};
