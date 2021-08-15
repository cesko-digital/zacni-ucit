import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';
import { H1, H2, LightText, LinkRegular } from '@components/Typography';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';
import { theme } from 'src/common/theme';
import { Wrap, Subtitle, Image, Content, ListWrapper } from './styled';

interface Props {
  title: string;
  text: string;
  image: string;
  withCheckOtherPages?: boolean;
}

const ErrorPage: React.FC<Props> = ({ title, text, image, withCheckOtherPages }) => (
  <Container>
    <Meta title={title} />
    <BackButton href={routes.homepage} icon="home">
      Zpátky domů
    </BackButton>
    <Wrap>
      <Content>
        <H1 bold color={theme.color.primary}>
          {title}
        </H1>

        <Subtitle>{text}</Subtitle>

        <Image src={image} alt="" width={360} height={107} />

        {withCheckOtherPages && (
          <>
            <LightText>Zkuste se mrknout na tyto stránky</LightText>
            <ListWrapper>
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
            </ListWrapper>
          </>
        )}

        <LightText>
          Stále tápete? Mapište nám na{' '}
          <LinkRegular href="mailto:info@vyluka.org">info@vyluka.org</LinkRegular>
        </LightText>
        <BackToHomeButton />
      </Content>
    </Wrap>
  </Container>
);

export default ErrorPage;
