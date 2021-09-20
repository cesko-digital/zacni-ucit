import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Container from '@components/Container/Container';
import { H2, LinkToExtPage } from '@components/Typography';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';
import { MainTitle, Paragraph, MainLink, Link, Logo, Section, Logowrapper, Img } from './styled';
import Meta from '@components/Meta/Meta';

import CeskoDigitalLogo from './logos/cd.svg';
import LaboratorVodafoneLogo from './logos/vodafone.svg';
import NadaceCsLogo from './logos/cs.svg';
import BlizKSobeLogo from './logos/blizksobe.svg';
import ZemeKvetLogo from './logos/zemekvet.svg';
import MhmpLogo from './logos/mhmp.svg';
import OtevrenoLogo from './logos/otevreno.svg';
import UcitelNazivoLogo from './logos/ucitelnazivo.svg';
import UcitelskaPlatformaLogo from './logos/up.svg';
import SkavLogo from './logos/skav.svg';
import EduLogo from './logos/edu.svg';
import NadaceKarlaJaneckaLogo from './logos/nadacekj.svg';
import EuLogo from './logos/eufund.svg';
import { VYLUKA_MAIL } from '@siteData';

const data = [
  {
    logo: CeskoDigitalLogo,
    href: 'https://cesko.digital/',
    text1: 'Dobrovolníci sdružení na platformě',
    text2:
      'pomohli proměnit v realitu naši představu o webu, který provádí zájemce o učitelskou kariéru na celé jejich cestě za katedru.',
    link: 'Česko.Digital',
  },
  {
    logo: NadaceCsLogo,
    href: 'https://www.nadacecs.cz/',
    text2: 'zajistila stabilní vedení organizace. Spolu také realizujeme projekt Den pro školu.',
    link: 'Nadace České spořitelny',
  },
  {
    logo: ZemeKvetLogo,
    href: 'http://zemekvet.cz/',
    text2: 'přispívá k zajištění chodu organizace Výluka.',
    link: 'Nadační fond Zeměkvět',
  },
  {
    logo: BlizKSobeLogo,
    href: 'https://www.blizksobe.cz/',
    text2: 'je partnerem programu Zkus učit!',
    link: 'Nadace Blížksobě',
  },

  {
    logo: MhmpLogo,
    href: 'https://granty.praha.eu/GrantyPortal/default',
    text1: 'Díky podpoře od',
    text2: 'můžeme realizovat program Zauč se! v Praze.',
    link: 'MHMP',
  },
  {
    logo: OtevrenoLogo,
    href: 'https://otevreno.org/',
    text1: 'Díky organizaci',
    text2: 'se podílíme na změně vzdělávání pedagogů.',
    link: 'Otevřeno',
  },
  {
    logo: UcitelNazivoLogo,
    href: 'https://www.ucitelnazivo.cz/',
    text1: 'Spolu s organizací',
    text2: 'se podílíme na změně vzdělávání v České republice.',
    link: 'Učitel naživo',
  },
  {
    logo: UcitelskaPlatformaLogo,
    href: 'https://www.ucitelskaplatforma.cz/',
    text1: 'Díky',
    text2: 'jsme v kontaktu se zkušenými učiteli a společně měníme pohled na učitelskou profesi.',
    link: 'Učitelské platformě',
  },
  {
    logo: SkavLogo,
    href: 'https://skav.cz/',
    text2:
      'představuje důležitého partnera, který sdružuje mnoho subjektů s cílem změnit české vzdělávání.',
    link: 'SKAV',
  },
  {
    logo: EduLogo,
    href: 'https://edu.cz/',
    text1: 'Spolu s',
    text2: 'poskytujeme důležité informace učitelům a o učitelství.',
    link: 'edu.cz',
  },
  {
    logo: NadaceKarlaJaneckaLogo,
    href: 'https://www.nadacekj.cz/',
    text1: 'Díky',
    text2: 'jsme ušli první kroky na cestě ke změně vzdělávání.',
    link: 'Nadaci Karla Janečka',
  },
  {
    logo: LaboratorVodafoneLogo,
    href: 'https://www.nadacevodafone.cz/',
    logo2: EuLogo,
    text2: 'podpořila vývoj první verze webu Začni učit! v programu Laboratoř.',
    link: 'Nadace Vodafone Česká republika',
  },
];

const Partners: React.FC = () => (
  <Container>
    <Meta
      title="Přispějte na projekt Začni učit a zlepšete české školství"
      description="Chcete nám s naší prací pomoci nebo nás finančně podpořit? Ozvěte se na info@vyluka.org a společně to vymyslíme!"
    />
    <BackButton href={routes.homepage} icon="home">
      Zpátky domů
    </BackButton>

    <Section>
      <MainTitle>Partneři</MainTitle>
      <Paragraph>
        Za webovou platformou Začni učit! stojí{' '}
        <MainLink className="underline" href={routes.aboutUs}>
          {' '}
          organizace Výluka, z.s.
        </MainLink>
      </Paragraph>
      <Paragraph>
        <strong>Chcete s námi spolupracovat či přispět k naší práci?</strong>
      </Paragraph>
      <Paragraph>Chcete nám pomoct finančně nebo s naší prací?</Paragraph>
      <Paragraph>
        Ozvěte se na{' '}
        <MainLink className="underline" href={`mailto:${VYLUKA_MAIL}`}>
          {VYLUKA_MAIL}
        </MainLink>{' '}
        a společně to vymyslíme!
      </Paragraph>
      <H2>S kým spolupracujeme?</H2>
    </Section>

    {data.map(item => (
      <Section key={item.href}>
        {item.logo2 ? (
          <Logowrapper>
            <Link href={item.href} target="_blank">
              <Logo src={item.logo} alt="" />
            </Link>
            <Logo src={item.logo2} alt="" />
          </Logowrapper>
        ) : (
          <Link href={item.href} target="_blank">
            <Logo src={item.logo} alt="" />
          </Link>
        )}
        <Paragraph>
          {item.text1 ? item.text1 : null}{' '}
          <MainLink href={item.href} target="_blank">
            {item.link}
          </MainLink>{' '}
          {item.text2}
        </Paragraph>
      </Section>
    ))}

    <BackToHomeButton />
  </Container>
);
export default Partners;
