import type { FC } from 'react';
import React, { useState } from 'react';
import { Wrapper, Logo, List, Item, NavLink, Burger } from './styled';
import Link from '@components/Link/Link';
import { routes } from '@routes';
import ZacniUcitLogo from '../../../../public/images/zacniucit-logo.svg';
import BurgerIcon from '@icons/burger.svg';
import CrossIcon from '@icons/cross.svg';
import { Menu } from '../Menu/Menu';
import { PrimaryText } from '@components/Typography';

const items = [
  {
    label: 'Můžu učit?',
    route: routes.canITeach,
  },
  {
    label: 'Chci zkusit učit',
    route: routes.tryToTeach,
  },
  {
    label: 'Proč jít učit?',
    route: routes.whyToTeach,
  },
  {
    label: 'Chci se zaučit',
    route: routes.wantToLearn,
  },
  {
    label: 'Partneři',
    route: routes.partners,
  },
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
        <Link href={routes.homepage}>
          <Logo>
            <ZacniUcitLogo width="80" height="50" viewBox="0 0 248 149" />
          </Logo>
        </Link>

        <List>
          {items.map(({ route, label }) => (
            <Item key={route}>
              <Link href={route}>
                <NavLink className={route.slice(1, 10)}>{label}</NavLink>
              </Link>
            </Item>
          ))}
        </List>
      </Wrapper>
      <Menu listOpened={isMenuOpen} />
    </nav>
  );
};
