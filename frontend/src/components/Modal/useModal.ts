import React from 'react';

import useScrollLock from './useScrollLock';

const useModal = (initialOpen = false) => {
  const [isOpen, setIsOpen] = React.useState(initialOpen);
  const { enableScroll, disableScroll } = useScrollLock();

  React.useEffect(() => {
    if (initialOpen) {
      disableScroll();
    }
    return () => enableScroll();
  }, []);

  const openModal = () => {
    disableScroll();

    setIsOpen(true);
  };

  const closeModal = () => {
    enableScroll();
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

export default useModal;
