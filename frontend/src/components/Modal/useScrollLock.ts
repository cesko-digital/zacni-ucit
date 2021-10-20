import React from 'react';

const useScrollLock = () => {
  const [scrolledPosition, setScrolledPosition] = React.useState({ x: 0, y: 0 });

  const enableScroll = () => {
    document.body.removeAttribute('style');
    window.scrollBy(scrolledPosition.x, scrolledPosition.y);
  };

  const disableScroll = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    setScrolledPosition({ x: left, y: top });
    document.body.setAttribute(
      'style',
      `width:100%;overflow:hidden;position:fixed;top:-${top}px;left:-${left}px`,
    );
  };

  return { enableScroll, disableScroll };
};

export default useScrollLock;
