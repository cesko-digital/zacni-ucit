import { Section, SectionTitle, Citation, Paragraph } from './styled';
import BackToTopButton from './BackToTopButton';
import { Text } from './NotAboutTeaching';

const data: Text[] = [
  {
    text1: 'Nenech děti se',
    strong: ' nudit',
    text2: ', měj vždy připravenou práci navíc, ať se mají stále kam posouvat.',
  },
  { text1: 'Děj dětem', strong: ' prostor sdělit si mezi sebou', text2: ', co zrovna potřebují.' },
  { text1: 'Zbytečně', strong: ' nekřič', text2: ', nechceš mít přece vydobytou autoritu.' },
  { text1: 'Dodržuj, cos slíbil.' },
  { text1: 'Neboj se dělat', strong: ' chyby', text2: '. Když je uděláš, tak je přiznej.' },
  { text1: 'Nech děti dělat chyby a nauč je, že to je normální a vlastně dobré.' },
  {
    text1: 'Nauč děti vzájemné',
    strong: ' toleranci a respektu',
    text2: ' – “každému jde něco jiného”.',
  },
  {
    text1:
      'Naslouchej dětem, i když tě to třeba zrovna vůbec nezajímá. Třeba jsi právě ty jediný, komu se dítě může',
    strong: ' svěřit.',
  },
  {
    text1: 'Ve škole jsi',
    strong: ' pro děti',
    text2: ', ne kvůli tomu, že si potřebuješ vydělat peníze.',
  },
  { text1: 'Buď s dětmi i', strong: ' o přestávkách', text2: ', ptej se na to, jak se mají.' },
  {
    text1: 'Nech',
    strong: ' děti vést hodinu',
    text2: ', ať si vyzkouší navzájem si vysvětlit věci. Jejich aktivita je klíčová.',
  },
  { text1: ' Hodně děti', strong: ' chval.' },
  { text1: 'Dřepni si nebo si sedni, ať máte', strong: ' oči na stejné úrovni.' },
  { text1: 'Mysli na sebe, taky si potřebuješ odpočinout.' },
  {
    text1:
      'Pokud máš pocit, že se ti nic nepovedlo – žáci jsou protivní, zkrátka to stojí za prd – nevěš hlavu! Ono se fakt někdy prostě nedaří.',
  },
  { text1: 'Nejlepší', strong: ' zpětná vazba', text2: ' jsou právě děti.' },
  {
    text1: 'Pokud chceš',
    strong: ' psanou zpětnou vazbu',
    text2:
      ', prostě ji s dětmi udělej a neboj se toho. Zvládnou to i druháci, ale asi je budeš muset trochu navést.',
  },
  {
    text1: 'Mysli na to, že',
    strong: ' mluvíš s dětmi',
    text2:
      '. Jsou chytré a bystré, ale občas ti třeba opravdu nerozumí, nejsou zvyklí používat takový slovník, jako ty.',
  },
  {
    text1:
      'Nenech se rozhodit tím, že máš pocit, že tě kolegové neberou. Dej tomu čas. Nebo si prostě řekni, že jsi učitelem',
    strong: ' kvůli dětem',
    text2: ' a ne kvůli kolegům. Pokud to je teda pravda.',
  },
  { text1: 'Buď svůj! Buď svoje!' },
  {
    text1:
      'Jestli si říkáš, že nemůžeš být učitel – protože ti hlavou lítá tisíc výmluv, jako že chodíš rád/a na pivo, fandíš na fotbale, atd. – je to v pohodě,',
    strong: ' učitelé jsou taky jenom lidé',
    text2: '. Ale nedělej takové věci, za které by ses musel stydět.',
  },
  { strong: 'Nelži', text2: ' žákům! Ani v úplných kravinách.' },
];

const WhatEllaThinks = () => {
  return (
    <>
      <Section id="co-si-mysli-ella">
        <SectionTitle>Co si myslí Ella (a třeba to je kravina): Jak na děti</SectionTitle>
        {data
          .filter((item, index) => index <= 15)
          .map((item, index) => (
            <Paragraph key={index}>
              {item.text1}
              <strong>{item.strong}</strong>
              {item.text2}
            </Paragraph>
          ))}

        <Citation>
          <p>
            Pokud pochybuješ o tom, jestli to co děláš, děláš dobře – zkus se zamyslet nad tím, jak
            na tebe děti reagují, jak s tebou spolupracují. Kdybys byla fakt špatná,{' '}
            <strong>děti to poznají a dají ti to sežrat.</strong>
          </p>
        </Citation>

        {data
          .filter((item, index) => index > 15 && index < data.length)
          .map((item, index) => (
            <Paragraph key={index}>
              {item.text1}
              <strong>{item.strong}</strong>
              {item.text2}
              <strong>{item.strong2}</strong>
            </Paragraph>
          ))}
        <Citation>
          <p>
            {' '}
            Pokud řešíš, <strong>co si vzít na sebe</strong> – vem si to, v čem si připadáš dobře.
            Možná tvé oblečení je něco jako kostým, aby ses cítil v roli učitele dobře a normálně si
            to mezi kamarády nebereš. I to je v pořádku. Postupem času začneš třeba nosit i méně
            formální oblečení.
          </p>
        </Citation>
        <BackToTopButton />
      </Section>
    </>
  );
};

export default WhatEllaThinks;
