import React from 'react';

import { useMeasure } from './useMeasure';

interface IAnimatedHeightProps {
  isOpen: boolean;
  maxHeight?: number;
  className?: string;
  children?: React.ReactNode;
}

const AnimatedHeight: React.FC<IAnimatedHeightProps> = ({
  isOpen,
  maxHeight,
  className,
  children,
}) => {
  const [bind, { height }] = useMeasure();

  return (
    <div
      className={className}
      style={{
        overflow: isOpen && maxHeight ? 'auto' : 'hidden',
        height:
          isOpen && height > 0 ? `${maxHeight && height > maxHeight ? maxHeight : height}px` : 0,
        opacity: isOpen && height > 0 ? 1 : 0,
        // transation delay 50ms, because without it onClickOutside sometimes doesnt register click
        transition: 'opacity 300ms ease-in-out 200ms, height 200ms ease-in-out',
      }}
    >
      <div {...bind}>{children}</div>
    </div>
  );
};

export default React.memo(AnimatedHeight);
