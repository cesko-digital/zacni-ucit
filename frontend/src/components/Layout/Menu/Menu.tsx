import type { FC } from 'react';
import React, { useState } from 'react';

import { ListMenu, Item, MenuTag, MenuLink } from './styled';
import Link from '@components/Link/Link';
import { routes } from '@routes';
import HomeIcon from '@icons/home.svg';
import StyleWrapper from '@components/StyledWrapper';

export const menuItems = [
  {
    label: 'Můžu učit?',
    route: routes.canITeach,
    lights: [
      {
        label: 'Pedagogické minimum',
        route: routes.pedagogicMinimum,
      },
      {
        label: 'Jací učitelé chybí?',
        route: routes.missedTeachers,
      },
      {
        label: 'Zákon o pedagogických pracovnících',
        route: routes.pedagogicalLaw,
      },
    ],
  },

  {
    label: 'Proč jít učit?',
    route: routes.whyToTeach,
    lights: [
      {
        label: 'Příběhy učitelů',
        route: routes.teachersStories,
      },
      {
        label: 'Platy učitelů',
        route: routes.sallary,
      },
      {
        label: 'Co můžete dělat ve škole',
        route: routes.canDoAtSchool,
      },
      {
        label: 'Volná místa ve školství',
        route: routes.jobs,
      },
    ],
  },

  {
    label: 'Chci zkusit učit',
    route: routes.tryToTeach,
    lights: [
      {
        label: 'Zkus učit',
        route: routes.tryToTeach,
      },
      {
        label: 'Den pro školu',
        route: routes.dayForSchool,
      },
    ],
  },

  {
    label: 'Chci se zaučit',
    route: routes.wantToLearn,
    lights: [
      {
        label: 'Zauč se!',
        route: routes.wantToLearn,
      },
      {
        label: 'Tipy pro začínající učitele',
        route: routes.teachersTips,
      },
    ],
  },

  {
    label: 'Začni učit! je projektem spolku Výluka',
    route: routes.vyluka,
  },

  {
    label: 'Naši partneři a přispějte',
    route: routes.partners,
  },
];

type Props = {
  listOpened: boolean;
};

export const Menu: FC<Props> = ({ listOpened }) => {
  return (
    <MenuTag listOpened={listOpened}>
      <ListMenu>
        <Item greenBgr>
          <Link href="/">
            <MenuLink>
              <HomeIcon />
              Začni učit!
            </MenuLink>
          </Link>
        </Item>
        {menuItems.map(item => (
          <Item key={item.label}>
            <Link className="bold" href={item.route}>
              {item.label}
            </Link>
            {item.lights?.map(light => (
              <StyleWrapper key={light.route} margin="1rem 0 0 0">
                <Link className="light" href={light.route}>
                  {light.label}
                </Link>
              </StyleWrapper>
            ))}
          </Item>
        ))}
      </ListMenu>
    </MenuTag>
  );
};
