import { Section, SectionTitle, List, ListItem, Paragraph } from './styled';
import BackToTopButton from './BackToTopButton';
import { Text } from './NotAboutTeaching';

const data: Text[] = [
  {
    text1: 'Dej si ',
    strong: 'dost času na seznámení se s dětmi',
    text2: ', není kam spěchat. Můžeš zkusit seznamovací hry.',
    strong2: ' Dej jim prostor',
    text3: ', jestli se o tobě chtějí něco dozvědět – pro některé děti je to vhodnější anonymně.',
  },
  {
    text1: 'Nastav si s nimi ',
    strong: 'jasná pravidla',
    text2: ', ať ví, co od tebe mohou čekat.',
  },
  {
    strong: 'Nech si od dětí vysvětlit co nejvíc věcí',
    text2:
      '. Budou za to vděční a dost ti pomůžou. Například kde s učivem skončili, co jim dělá největší problém, co je baví a co zase ne.',
  },
  {
    text1: 'Zjisti, ',
    strong: 'jak často dostávají úkoly',
    text2:
      ', jestli vůbec a jakým stylem. Učíš v nižším ročníku? Dost možná děti mají úkolníčky. Ještě do 3.třídy si opravdu zkontroluj, že si to zapsali.',
  },
  {
    text1:
      'Od dětí toho zjistíš opravdu hodně – kdy chodí na velké přestávky ven, kdo je jaká učitelka, kde co najdeš…',
    strong: ' Zeptej se. Nebudou si o tobě myslet, že jsi debil.',
  },
];

const InFrontOfChildren = () => {
  return (
    <>
      <Section id="kdyz-jdes-ucit-pred-deti" withBackground>
        <SectionTitle>Když jdeš učit, prostě před děti</SectionTitle>
        {data
          .filter((item, index) => index <= 1)
          .map(item => (
            <Paragraph key={item.text1}>
              {item.text1}
              <strong>{item.strong}</strong>
              {item.text2}
            </Paragraph>
          ))}

        <List>
          <ListItem>
            Zjisti, <strong>jak jsou zvyklé děti fungovat v jiných předmětech</strong>, jaká
            pravidla mají s TU (Třídním učitelem).
          </ListItem>
          <ListItem>
            Jak tě mají děti oslovovat? Je fajn, aby to bylo stejné, jako s ostatními učiteli.
          </ListItem>
        </List>

        {data
          .filter((item, index) => index > 1 && index < data.length)
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

export default InFrontOfChildren;
