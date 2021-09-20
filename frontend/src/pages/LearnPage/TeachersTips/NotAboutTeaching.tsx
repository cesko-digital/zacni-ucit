import BackToTopButton from './BackToTopButton';
import { Section, SectionTitle, List, ListItem, Paragraph, Citation } from './styled';

export type Text = {
  text1?: string;
  strong?: string;
  strong2?: string;
  text2?: string;
  text3?: string;
};

const data: Text[] = [
  {
    text1:
      'Předpokládám, že klíče od školy už máš, víš, kdo je ředitel/ka, zástupce a kde je třída, kde učíš',
  },
  {
    text1: 'Zjisti si,',
    strong: ' kde jsou WC',
    text2: ', jestli máte ve sborovně kávovar, jak tam vaří.',
  },
  { text1: 'A taky - ', strong: 'v kolik musíš být nejpozději ve škole?' },
  { text1: 'Seznam se s třídními učiteli, u kterých učíš.' },
  { text1: 'Jsi sám třídním učitelem? Tak to potřebuješ informací mnohem víc…' },
  {
    text1: 'Měl bys dostat ',
    strong: 'uvádějícího učitele',
    text2:
      ' a měl by ses dozvědět, kdo je vedoucí učitel daného stupně. Ten ti v začátcích může hodně pomoct – máš možnost se ho zeptat na cokoliv.',
  },
  {
    text1: 'Zjisti si, jestli máš nějaké ',
    strong: 'paralelky ',
    text2: 'a pokus se',
    strong2: ' skamarádit hlavně s kolegy z paralelek',
    text3: ', můžou ti dost pomoct (kde jsou v učivu, různé fígle,…)',
  },
  {
    text1: 'Dost možná máš ve třídě děti s ',
    strong: 'OMJ',
    text2: ' (Odlišný mateřský jazyk), to je taky dobré vědět předem.',
  },
  {
    text1: 'Zjisti si, jaké žáky máš ve třídě, jestli někdo z nich nemá něco',
    strong: ' zdravotně nařízeného – nemůže třeba sám chodit po schodech',
    text2: ', protože má špatné kyčle a špatně vidí…',
  },
  {
    strong: 'Učíš tělocvik? ',
    text2:
      'Zjisti si, kde jsou pomůcky na TV, případně klíče od nářaďovny, jestli se děti převlékají ve třídě nebo v šatnách.',
  },
  {
    strong: 'Učíš výtvarku a pracovky?',
    text2:
      ' Možná na to máte speciální místnost – zjisti si, jestli má daná třída svoje výtvarné pomůcky. Pokud chceš něco nakoupit přímo pro žáky, můžeš to kupovat z třídního fondu po konzultaci s TU (třídním učitelem).',
  },
  { strong: 'Můžeš děti pouštět domů?', text2: ' Chodí na oběd? Kdy a kam je máš odvádět?' },
  { text1: 'Zjisti si, jestli máš nějaké', strong: ' dozory', text2: ' a co to obnáší.' },
  {
    text1: 'Máš nějaké ',
    strong: 'pohotovosti',
    text2: '? Hodiny, kdy máš být přítomen ve škole a je možné, že budeš suplovat?',
  },
  {
    text1: 'Jak se zapisuje do',
    strong: ' TK',
    text2:
      ' (Třídní knihy)? Když začíná vyučování, kde si máš vyzvednout TK, kam ji po vyučování vracíš?',
  },
  {
    text1: 'Zjisti si, ',
    strong: 'podle jakých učebnic jedete',
    text2: ', a vyžebrej je od školy. K učebnicím bys měl mít k dispozici i',
    strong2: ' Metodické příručky pro učitele',
    text3: ', a tam opravdu najdeš leccos.',
  },
  {
    text1: 'Projdi si',
    strong: ' RVP',
    text2: ' (Rámcový vzdělávací program). Každá škola má i svůj vlastní',
    strong2: ' ŠVP',
    text3: ' (Školní vzdělávací program), tím by ses měl řídit.',
  },
  {
    strong: 'TP',
    text2:
      ' (Tematický plán) sepisuješ jako učitel sám, tedy můžeš si ho udělat podle sebe – ale musí pak také projít kontrolou. Pokud se necítíš na to si ho tvořit sám, můžeš ',
    strong2: 'použít TP z jiných paralelek',
    text3: ' nebo se poradit s kolegy. TP nebude první věc, kterou začneš řešit.',
  },
  {
    strong: 'Jak máš hodnotit žáky?',
    text2: ' Jak často? To nejlíp zjistíš u vedoucího daného stupně.',
  },
  {
    strong: 'Máte internetový portál?',
    text2: ' Co všechno tam můžeš zjistit?',
    strong2: ' Zapisuješ tam i známky?',
    text3: ' Nebo to mají mít žáci v papírové ŽK (žákovské knížce)? Co všechno zapisuješ do ŽK?',
  },
  {
    strong: 'Úrazy, pozor! ',
    text2:
      'Každý úraz musíš nahlásit, i to, co se ti zdá jako „banalita“. Zjisti si, kde najdeš knihu úrazů (někdo na škole musí mít funkci zdravotníka).',
  },
  {
    strong: 'Můžeš jít s dětmi i ven',
    text2:
      ', což ocení nejen ony, ale nejspíš i ty – zjisti si, za jakých podmínek můžeš opustit školu, jaké má škola pozemky. Pozor, pokud máš nad 25 dětí ve třídě, potřebuješ k tomu ještě někoho.',
  },
  { strong: 'Nosí pedagogové ve škole přezůvky?', text2: ' Kde si můžeš nechat věci?' },
];

const NotAboutTeaching = () => {
  return (
    <>
      <Section id="co-se-uceni-netyka">
        <SectionTitle>To, co se učení vůbec netýká</SectionTitle>
        {data
          .filter((item, index) => index <= 6)
          .map(item => (
            <Paragraph key={item.text1}>
              {item.text1}
              <strong>{item.strong}</strong>
              {item.text2}
              <strong>{item.strong2}</strong>
              {item.text3}
            </Paragraph>
          ))}
      </Section>
      <Section withBackground>
        <p>
          Zjisti si, jaké žáky máš ve třídě, jestli tu jsou nějací s <strong>IVP</strong>{' '}
          (Individuální vzdělávací plán). Pokud ano, <strong>nastuduj si jejich IVP</strong>, ať
          víš, s čím pracovat. Bacha! Každé čtvrtletí od tebe budou chtít vyhodnocení IVP:
          <List>
            <ListItem>IVP hodnotíš jen u předmětu, který žáka vyučuješ.</ListItem>
            <ListItem>
              Hodnotíš, jak jsou nastavená PO (Podpůrná opatření).
              <List>
                <ListItem>
                  PO jsou rozdělena na různé stupně, od 3. stupně máš ve třídě k žákovi AP
                  (Asistenta pedagoga).
                </ListItem>
              </List>
            </ListItem>
            <ListItem>PLPP (Plán pedagogické podpory)</ListItem>
          </List>
        </p>
      </Section>
      <Section>
        {data
          .filter((item, index) => index > 6 && index <= 16)
          .map(item => (
            <Paragraph key={item.text1}>
              {item.text1}
              <strong>{item.strong}</strong>
              {item.text2}
              <strong>{item.strong2}</strong>
              {item.text3}
            </Paragraph>
          ))}
        <Citation>
          <p>
            Ničeho se neděs, všechny učebnice, které používáš, by měly být podle RVP ZŠ nebo podle
            toho, kde zrovna učíš. Takže se nemůže stát, že bys něco mohl vynechat. Ale pozor,{' '}
            <strong>některé učebnice jsou na prd</strong> – když ti bude připadat, že obsahují
            koniny, udělej si to „podle sebe“.
          </p>
        </Citation>
        {data
          .filter((item, index) => index == 17 || index == 18)
          .map(item => (
            <Paragraph key={item.text1}>
              {item.text1}
              <strong>{item.strong}</strong>
              {item.text2}
              <strong>{item.strong2}</strong>
              {item.text3}
            </Paragraph>
          ))}
        <Citation>
          <p>
            Je dobré si v tom udělat pořádek hned na začátku, ať pak nejsi zaskočený/á.{' '}
            <strong>Nemusíš to přehánět se známkováním</strong>, ale to záleží na tobě a na škole.{' '}
            <strong>Možná, že ani nemusíš známkovat</strong>, někde se používá slovní hodnocení,
            které můžeš využívat i u klasických testů se známkou.
          </p>
        </Citation>
        {data
          .filter((item, index) => index > 18 && index <= data.length)
          .map(item => (
            <Paragraph key={item.text1}>
              {item.text1}
              <strong>{item.strong}</strong>
              {item.text2}
              <strong>{item.strong2}</strong>
              {item.text3}
            </Paragraph>
          ))}

        <BackToTopButton />
      </Section>
    </>
  );
};

export default NotAboutTeaching;
