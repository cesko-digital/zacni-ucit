import React, { FC } from 'react';

import { Wrap } from './styled';
import { useRouter } from 'next/router';

type Props = {
  direction: 'back' | 'forward';
};

const NavButton: FC<Props> = ({ direction = 'back' }) => {
  const router = useRouter();
  return (
    <Wrap
      onClick={() => {
        if (direction === 'back') {
          router.back();
        }
      }}
    >
      {direction === 'back' ? <span>&#x2190;</span> : 'Forward'}
    </Wrap>
  );
};

export default NavButton;
