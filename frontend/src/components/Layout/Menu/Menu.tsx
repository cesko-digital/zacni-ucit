import type { FC } from 'react';
import React from 'react';

import { ListMenu, Item, MenuTag, MenuLink, IconWrapper, Backdrop } from './styled';
import StyleWrapper from '@components/StyledWrapper';
import Button from '@components/Button/Button';
import { routes } from '@routes';

import HomeIcon from '@icons/home.svg';

export const menuItems = [
  {
    label: 'Můžu učit?',
    route: routes.canITeach,
    lights: [
      {
        label: 'Pedagogické minimum',
        route: `${routes.startTeaching.crossroad}#pedagogicke-minimum`,
      },
      {
        label: 'Jací učitelé chybí?',
        route: `${routes.startTeaching.crossroad}#pedagogicke-minimum`,
      },
      {
        label: 'Zákon o pedagogických pracovnících',
        route: `${routes.startTeaching.crossroad}#zakon-o-pedagogickych-pracovnicich`,
      },
    ],
  },

  // {
  //   label: 'Proč jít učit?',
  //   route: routes.whyToTeach,
  //   lights: [
  //     {
  //       label: 'Příběhy učitelů',
  //       route: routes.whyToTeach,
  //     },
  //     {
  //       label: 'Platy učitelů',
  //       route: routes.sallary,
  //     },
  //     {
  //       label: 'Co můžete dělat ve škole',
  //       route: routes.canDoAtSchool,
  //     },
  //     {
  //       label: 'Volná místa ve školství',
  //       route: routes.jobs,
  //     },
  //   ],
  // },

  {
    label: 'Chci zkusit učit',
    route: routes.tryTeaching.main,
    lights: [
      {
        label: 'Zkus učit!',
        route: routes.tryTeaching.main,
      },
      {
        label: 'Den pro školu',
        route: `${routes.tryTeaching.main}#den-pro-skolu`,
      },
    ],
  },

  {
    label: 'Chci se zaučit',
    route: routes.learn.main,
    lights: [
      {
        label: 'Zauč se!',
        route: routes.learn.main,
      },
    ],
  },

  {
    label: 'Začni učit! je projektem spolku Výluka',
    route: 'http://www.vyluka.org/',
    target: '_blank',
  },

  // {
  //   label: 'Naši partneři a přispějte',
  //   route: routes.partners,
  // },
];

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu: FC<Props> = ({ isOpen, setIsOpen }) => (
  <>
    <MenuTag listOpened={isOpen}>
      <ListMenu>
        <Item greenBgr>
          <Button href={routes.homepage} onClick={() => setIsOpen(false)}>
            <MenuLink>
              <IconWrapper>
                <HomeIcon />
              </IconWrapper>
              Začni učit!
            </MenuLink>
          </Button>
        </Item>
        {menuItems.map(item => (
          <Item key={item.label}>
            <Button
              className="bold"
              href={item.route}
              target={item.target}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Button>
            {item.lights?.map(light => (
              <StyleWrapper key={light.route} margin="1rem 0 0 0">
                <Button className="light" href={light.route} onClick={() => setIsOpen(false)}>
                  {light.label}
                </Button>
              </StyleWrapper>
            ))}
          </Item>
        ))}
      </ListMenu>
    </MenuTag>
    {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}
  </>
);
