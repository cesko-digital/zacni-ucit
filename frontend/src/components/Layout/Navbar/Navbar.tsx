import Link from 'next/link';
import type { FC } from 'react';
import React, { useState } from 'react';

import { Wrapper, Logo, List, Item, NavLink, Burger } from './styled';
import Button from '@components/Button/Button';
import { routes } from '@routes';

import BurgerIcon from '@icons/burger.svg';

const items = [
  {
    label: 'Kvalifikace',
    route: routes.qualification,
  },
  {
    label: 'Začínám učit',
    route: routes.teachingStart,
  },
  {
    label: 'Motivace',
    route: routes.motivation,
  },
  {
    label: 'O nás',
    route: routes.aboutUs,
  },
  {
    label: 'Kontakt',
    route: routes.contact,
  },
];

export const Navbar: FC = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <nav>
      <Wrapper className="navbar">
        <Burger type="button" onClick={() => setIsListOpen(!isListOpen)}>
          <BurgerIcon />
        </Burger>
        <Button href={routes.homepage}>
          <Logo>ZačniUČIT</Logo>
        </Button>
        <List listOpened={isListOpen}>
          {items.map(({ route, label }) => (
            <Item key={route}>
              <Link href={route}>
                <NavLink>{label}</NavLink>
              </Link>
            </Item>
          ))}
        </List>
      </Wrapper>
    </nav>
  );
};
