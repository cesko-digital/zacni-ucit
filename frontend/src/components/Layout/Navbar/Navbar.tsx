import type { FC } from 'react';
import React, { useState } from 'react';
import { Wrapper, Logo, List, Item, NavLink, Burger } from './styled';
import Link from '@components/Button/Link';
import { routes } from '@routes';
import ZacniUcitLogo from '../../../../public/images/Logotype.svg';
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
  // {
  //   label: 'O nás',
  //   route: routes.aboutUs,
  // },
  {
    label: 'Partneři',
    route: routes.partners,
  },
];

export const Navbar: FC = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <nav>
      <Wrapper className="navbar">
        <Burger
          type="button"
          onClick={() => {
            setIsListOpen(!isListOpen);
            console.log(isListOpen);
          }}
        >
          <PrimaryText>Menu</PrimaryText>
          {isListOpen ? <CrossIcon /> : <BurgerIcon height="14" />}
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
                <NavLink id={route.slice(1, 10)}>{label}</NavLink>
              </Link>
            </Item>
          ))}
        </List>
      </Wrapper>
      <Menu listOpened={isListOpen} />
    </nav>
  );
};
