import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Container from '@components/Container/Container';
import { LinkToExtPage } from '@components/Typography';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';
import router from 'next/router';
import { MainTitle, Paragraph, MainLink } from './styled';

const Partners: React.FC = () => (
  <Container>
    <BackButton href={routes.homepage} icon="home">
      Zpátky domů
    </BackButton>

    <MainTitle>Partneři</MainTitle>

    <Paragraph>
      Za webovou platformou Začni učit! stojí{' '}
      <MainLink href={routes.vyluka}> organizace Výluka, z.s.</MainLink>
    </Paragraph>

    <Paragraph>
      <strong>Chcete s námi spolupracovat či přispět k naší práci?</strong>
    </Paragraph>

    <Paragraph>Chcete nám pomoct finančně nebo s naší prací?</Paragraph>

    <Paragraph>
      Ozvěte se na <MainLink href="mailto:info@vyluka.org">info@vyluka.org</MainLink> a společně to
      vymyslíme!
    </Paragraph>
    <section>
      <Paragraph>
        Dobrovolníci sdružení na platformě{' '}
        <MainLink href="https://cesko.digital/" target="_blank">
          Česko.Digital
        </MainLink>{' '}
        pomohli proměnit v realitu naši představu o webu, který provádí zájemce o učitelskou kariéru
        na celé jejich cestě za katedru.{' '}
      </Paragraph>
    </section>
    <section>
      <Paragraph>
        <MainLink href="https://www.nadacecs.cz/" target="_blank">
          Nadace České spořitelny
        </MainLink>{' '}
        zajistila stabilní vedení organizace. Spolu také realizujeme projekt Den pro školu.{' '}
      </Paragraph>
    </section>
    <section>
      <Paragraph>
        {' '}
        <MainLink href="https://www.blizksobe.cz/" target="_blank">
          NadaceBlížksobě
        </MainLink>{' '}
        je partnerem programu Zkus učit!
      </Paragraph>
    </section>
    <section>
      <Paragraph>
        <MainLink href="http://zemekvet.cz/" target="_blank">
          Nadační fond Zeměkvět
        </MainLink>
        přispívá k zajištění chodu organizace Výluka.{' '}
      </Paragraph>
    </section>
    <section>
      <Paragraph>
        Díky podpoře od{' '}
        <MainLink href="https://granty.praha.eu/GrantyPortal/default" target="_blank">
          MHMP
        </MainLink>{' '}
        můžeme realizovat program Zauč se! v Praze.
      </Paragraph>
    </section>
    <section>
      <Paragraph>
        Díky organizaci{' '}
        <MainLink href="https://otevreno.org/" target="_blank">
          Otevřeno
        </MainLink>
        se podílíme na změně vzdělávání pedagogů.
      </Paragraph>
    </section>
    <section>
      <Paragraph>
        Spolu s organizací{' '}
        <MainLink href="https://www.ucitelnazivo.cz/" target="_blank">
          Učitel naživo
        </MainLink>{' '}
        se podílíme na změně vzdělávání v České republice.
      </Paragraph>
    </section>
    <section>
      <Paragraph>
        Díky{' '}
        <MainLink href="https://www.ucitelskaplatforma.cz/" target="_blank">
          Učitelské platformě
        </MainLink>{' '}
        jsme v kontaktu se zkušenými učiteli a společně měníme pohled na učitelskou profesi.
      </Paragraph>
    </section>
    <section>
      <Paragraph>
        <MainLink href="https://skav.cz/" target="_blank">
          SKAV
        </MainLink>{' '}
        představuje důležitého partnera, který sdružuje mnoho subjektů s cílem změnit české
        vzdělávání.
      </Paragraph>
    </section>
    <section>
      <Paragraph>
        Spolu s{' '}
        <MainLink href="https://edu.cz/" target="_blank">
          {' '}
          edu.cz
        </MainLink>{' '}
        poskytujeme důležité informace učitelům a o učitelství.
      </Paragraph>
    </section>
    <section>
      <Paragraph>
        Díky{' '}
        <MainLink href="https://www.nadacekj.cz/" target="_blank">
          Nadaci Karla Janečka
        </MainLink>
        jsme ušli první kroky na cestě ke změně vzdělávání.
      </Paragraph>
    </section>
    <section>
      <Paragraph>
        <MainLink href="https://www.nadacevodafone.cz/" target="_blank">
          Nadace Vodafone Česká republika
        </MainLink>{' '}
        podpořila vývoj první verze webu Začni učit! v programu Laboratoř.
      </Paragraph>
    </section>
    <BackToHomeButton />
  </Container>
);
export default Partners;
