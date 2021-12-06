import { Section, SectionTitle, Paragraph } from './styled';
import BackToTopButton from './BackToTopButton';
import { Text } from './NotAboutTeaching';

const data: Text[] = [
  {
    text1: 'Můžeš při vyučování používat',
    strong: ' různé pomůcky',
    text2: '? Zjisti, kde je najdeš.',
  },
  {
    text1: 'Máte ve třídě ',
    strong: 'interaktivní tabuli',
    text2: '? Nauč se s ní, dost často to děti umí, tak tě to mohou naučit.',
  },
  { text1: 'Zjisti, kam se chodí na kafe a', strong: ' kde se schází učitelé.' },
  { text1: 'Neboj se ostatních pedagogů, nekoušou… (Někdy možná jo.)' },
  {
    text1: 'Máš ve třídě ',
    strong: 'AP (Asistenta pedagoga)',
    text2: '? Víš, jak spolu můžete spolupracovat?',
  },
  {
    text1: 'Různé ',
    strong: 'akce školy',
    text2:
      ', výtvarné a matematické soutěže… – to všechno si můžeš dopředu zjistit, ať pak nejsi mimo.',
  },
  {
    text1: 'Určitě budeš muset absolvovat různá ',
    strong: 'školení',
    text2:
      ', co se týče bezpečnosti práce a tak podobně. Zjisti si, kdy tě to čeká nebo jestli vůbec.',
  },
  { text1: 'Najdi si někoho, s kým můžeš sdílet svoje dojmy nejen z výuky.' },
  {
    strong: 'Piš si',
    text2:
      ' poznámky, pedagogické zážitky, co se ti povedlo nebo nepovedlo, co se ti osvědčilo a co ne, co se povedlo dětem a co jsi s dětmi kdy dělal/a…',
  },
  {
    text1: 'GDPR – Některé děti mají od zákonných zástupců podepsané, že ',
    strong: 'mohou být fotografované',
    text2: ' , některé ne, je docela dobré si tohle zjistit dopředu.',
  },
];

const LifeHacks = () => {
  return (
    <Section id="pokrocile-lajfheky">
      <SectionTitle>Pokročilé lajfheky</SectionTitle>
      {data.map((hack, index) => (
        <Paragraph key={index}>
          {hack.text1}
          <strong>{hack.strong}</strong>
          {hack.text2}
        </Paragraph>
      ))}
      <BackToTopButton />
    </Section>
  );
};

export default LifeHacks;
