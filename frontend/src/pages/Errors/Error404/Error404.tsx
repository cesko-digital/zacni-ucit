import { H1, H2, LightText, LinkRegular } from '@components/Typography';
import { routes } from '@routes';
import { theme } from 'src/common/theme';
import ErrorImg from '../../../../public/images/404.svg';
import { Wrap } from './styled';

const Error404 = () => {
  return (
    <Wrap>
      <H1 color={theme.color.primary}>Jej, tady nic není</H1>

      <H2>Omlouváme se, ale tady nic není.</H2>

      <ErrorImg />

      <LightText>Zkuste se mrknout na tyto stránky</LightText>
      <ul>
        <li>
          <LinkRegular href={routes.homepage}>Hlavní stránka</LinkRegular>
        </li>
        <li>
          <LinkRegular href={routes.pedagogicMinimum}>Pedagogické minimu</LinkRegular>
        </li>
        <li>
          <LinkRegular href={routes.whyToTeach}>Proč jít učit?</LinkRegular>
        </li>
      </ul>

      <LightText>
        Stále tápete? Mapište nám na{' '}
        <LinkRegular href="mailto:info@vyluka.org">info@vyluka.org</LinkRegular>
      </LightText>
    </Wrap>
  );
};

export default Error404;
