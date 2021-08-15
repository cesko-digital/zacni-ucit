import React from 'react';

import { Item, Link, Content, Image, TextLink } from './styled';

export interface ICrossroadItem {
  icon: string;
  button: { text: string; href: string };
}

interface Props extends ICrossroadItem {
  size?: 'sm' | 'md';
}

const CrossroadItem: React.FC<Props> = ({ icon, size = 'sm', button }) => (
  <Item>
    <Link href={button.href}>
      <Content>
        <Image src={icon} alt="" size={size} />
        <TextLink>{button.text}</TextLink>
      </Content>
    </Link>
  </Item>
);

export default CrossroadItem;
