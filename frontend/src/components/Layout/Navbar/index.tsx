import Link from 'next/link';
import React, { FC, useState } from 'react';
import { Wrapper, Logo, List, Item, NavLink, Burger } from './styled';
import menuItems from '../../../constants/menu';

type Props = {};

export const Navbar: FC<Props> = () => {
  const [listOpened, setListOpened] = useState(false);

  return (
    <nav>
      <Wrapper className="navbar">
        <Burger
          listOpened={listOpened}
          src="./images/burger.svg"
          onClick={() => setListOpened(!listOpened)}
        />
        <Logo>ZačniUČIT</Logo>
        <List listOpened={listOpened}>
          {menuItems.map((item, idx) => (
            <Item key={idx}>
              <Link href={item.route}>
                <NavLink>{item.label}</NavLink>
              </Link>
            </Item>
          ))}
        </List>
      </Wrapper>
    </nav>
  );
};