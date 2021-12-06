import React from 'react';
import ReactDOM from 'react-dom';

import { Title, ModalWrapper, Content, CloseButtonWrapper, InnerContent, Overlay } from './styled';
import CrossIcon from '@icons/cross.svg';

interface IModalProps {
  title: string;
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ title, isOpen, closeModal, children }) => {
  const el = React.useMemo(() => document.createElement('div'), []);

  React.useEffect(() => {
    const mount = document.getElementById('portal-root');

    if (mount) {
      mount.appendChild(el);
    }

    return () => {
      if (mount) {
        mount.removeChild(el);
      }
    };
  }, [el]);

  return ReactDOM.createPortal(
    isOpen ? (
      <ModalWrapper aria-modal="true" role="dialog">
        <Content>
          <CloseButtonWrapper onClick={() => closeModal()}>
            <CrossIcon />
          </CloseButtonWrapper>
          <Title>{title}</Title>
          <InnerContent>{children}</InnerContent>
        </Content>
        <Overlay onClick={closeModal} />
      </ModalWrapper>
    ) : null,
    el,
  );
};

export default Modal;
