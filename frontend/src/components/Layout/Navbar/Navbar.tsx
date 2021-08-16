import type { FC } from 'react';
import React, { useState } from 'react';

import { Menu } from '../Menu/Menu';
import { Wrapper, Logo, List, Item, NavLink, Burger } from './styled';
import { PrimaryText } from '@components/Typography';
import { routes } from '@routes';
import Button from '@components/Button/Button';

import zacniUcitLogo from './zacniucit-logo.svg';
import BurgerIcon from '@icons/burger.svg';
import CrossIcon from '@icons/cross.svg';
import { convertToUrl } from '@pages/StartTeachingPage/StartTeachingPage';

const items = [
  {
    label: 'Můžu učit?',
    route: routes.canITeach,
  },
  {
    label: 'Chci zkusit učit',
    route: routes.tryTeaching.main,
  },
  // {
  //   label: 'Proč jít učit?',
  //   route: routes.whyToTeach,
  // },
  {
    label: 'Chci se zaučit',
    route: routes.learn.main,
  },
  // {
  //   label: 'Partneři',
  //   route: routes.partners,
  // },
];

export const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <Wrapper className="navbar">
        <Burger
          type="button"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <PrimaryText>Menu</PrimaryText>
          {isMenuOpen ? <CrossIcon /> : <BurgerIcon height="14" />}
        </Burger>
        <Button href={routes.homepage}>
          <Logo alt="Začni učit logo" height="50" src={zacniUcitLogo} width="80"></Logo>
        </Button>

        <List>
          {items.map(({ route, label }) => (
            <Item key={route}>
              <NavLink href={route} className={convertToUrl(label)}>
                {label}
              </NavLink>
            </Item>
          ))}
        </List>
      </Wrapper>
      <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </nav>
  );
};
