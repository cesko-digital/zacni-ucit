import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';

import Container from '@components/Container/Container';
import { H2 } from '@components/Typography';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';
import { MainTitle, Paragraph, Section } from './styled';
import Button from '@components/Button/Button';
import Meta from '@components/Meta/Meta';

const links = [
  {
    name: 'PedF UK Jobs',
    link: 'https://www.facebook.com/groups/1588495108069916/',
  },
  {
    name: 'Práce ve školství',
    link: 'http://www.prace-skolstvi.cz/',
  },
  {
    name: 'Jdi pracovat v pedagogických oborech',
    link: 'https://www.facebook.com/groups/jdipracovat.pedagogickeobory/',
  },
  {
    name: 'Edu job (práce ve vzdělávání)',
    link: 'https://edujob.cz/',
  },
  {
    name: 'Práce ve školství',
    link: 'https://www.prace.cz/nabidky/skolstvi-a-vzdelavani/',
  },
  {
    name: 'Chci učit!',
    link: 'http://chciucit.pedf.cuni.cz/',
  },
];

const Partners: React.FC = () => (
  <Container>
    <Meta
      title="Proč jít učit? | Nejste si jistí vstupem do učitelské profese?"
      description="Pomůžeme vám rozhodnout se díky příběhům a zkušenostem dalších učitelů i popisem požadavků na učitelskou profesi. Nabídneme i přehled volných míst ve školství."
    />
    <BackButton href={routes.homepage} icon="home">
      Zpátky domů
    </BackButton>

    <Section>
      <MainTitle>Volná místa ve školství</MainTitle>
      <Paragraph>
        Ať už máte potřebné pedagogické vzdělání, nebo vás jeho absolvování teprve čeká, po své
        vysněné práci se můžete hned poohlédnout na níže uvedených stránkách.{' '}
        <strong>Volných míst je opravdu hodně! </strong>
      </Paragraph>
      <Paragraph>
        <strong>
          {' '}
          Připomínáme, že ředitelé škol vás mohou zaměstnat i v případě, že ještě nemáte dostatečnou
          kvalifikaci pro danou pozici{' '}
        </strong>
        (důvodem je především výrazný nedostatek lidí ve školství). Nemusíte se proto bát odpovědět
        na nabídku školy nebo ji sám/sama aktivně kontaktovat, i když ještě nemáte titul před
        jménem.
      </Paragraph>
    </Section>
    <Section withBackground>
      <H2>Volná místa ve školství</H2>
      {links.map(({ link, name }) => (
        <Paragraph>
          <Button href={link} buttonStyle="link">
            {name}
          </Button>
          <br />
        </Paragraph>
      ))}
    </Section>

    <BackToHomeButton />
  </Container>
);
export default Partners;
