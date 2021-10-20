import React from 'react';

import { Wrapper, Title, Text, Link, IconWrapper } from './styled';

import ExportIcon from '@icons/export.svg';

interface ISingleLink {
  link: string;
}

interface IMultipleLinks {
  links: string[];
}

type IBase = ISingleLink | IMultipleLinks;

type Props = IBase & {
  children: string;
};

const isSingleLink = (item: ISingleLink | IMultipleLinks): item is ISingleLink =>
  (item as ISingleLink).link !== undefined;

const LawReference: React.FC<Props> = ({ children, ...props }) => {
  const links = React.useMemo(() => (isSingleLink(props) ? [props.link] : props.links), [props]);

  return (
    <Wrapper>
      <Title>V zákoně najdete požadavky tady:</Title>
      <Text>{children}</Text>
      {(links ?? []).map(link => (
        <Link key={link} href={`https://${link}`}>
          <IconWrapper>
            <ExportIcon />
          </IconWrapper>
          {link}
        </Link>
      ))}
    </Wrapper>
  );
};

export default LawReference;
