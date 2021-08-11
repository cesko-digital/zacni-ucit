import type { FC } from 'react';
import React, { useState } from 'react';

import { ListMenu, Item, MenuTag, MenuLink } from './styled';
import Link from '@components/Button/Link';
import { routes } from '@routes';
import HomeIcon from '@icons/home.svg';
import { LightText, LinkLight, LinkRegular, PrimaryText } from '@components/Typography';
import StyleWrapper from '@components/StyledWrapper';

export const menu_items = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    label: 'Začni učit! je projektem spolku Výluka',
    route: routes.vyluka,
  },

  {
    id: 6,
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
        {menu_items.map(item => (
          <Item key={item.id}>
            <Link href={item.route}>
              <MenuLink>{item.label}</MenuLink>
            </Link>
            {item.lights?.map(light => (
              <StyleWrapper key={light.route} margin="1rem 0 0 0">
                <Link href={light.route}>
                  <MenuLink lightLink>{light.label}</MenuLink>
                </Link>
              </StyleWrapper>
            ))}
          </Item>
        ))}
      </ListMenu>
    </MenuTag>
  );
};
