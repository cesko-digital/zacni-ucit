import { H1, H3, LightText, LinkRegular } from '@components/Typography';
import { routes } from '@routes';
import { theme } from 'src/common/theme';
import UnderConstructionImg from '../../../../public/images/under-construction.svg';
import { Wrap } from './styled';

const Error404 = () => {
  return (
    <Wrap>
      <H1 color={theme.color.primary}>Pracujeme na tom</H1>
      <LightText>
        Omlouváme se, ale na obsahu této stránky pracujeme a ještě není hotová. Zkuste se za námi
        stavit později.
      </LightText>
      <UnderConstructionImg />
      <LightText>
        Stále tápete? Mapište nám na{' '}
        <LinkRegular href="mailto:info@vyluka.org">info@vyluka.org</LinkRegular>
      </LightText>
    </Wrap>
  );
};

export default Error404;
