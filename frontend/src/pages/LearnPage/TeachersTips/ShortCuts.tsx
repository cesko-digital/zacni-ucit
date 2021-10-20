import BackToTopButton from './BackToTopButton';
import { Table, Section, SectionTitle } from './styled';

type Shortcut = {
  shortcut: string;
  desc: string;
};

const data: Shortcut[] = [
  {
    shortcut: 'AP',
    desc: 'asistent pedagoga',
  },
  {
    shortcut: 'EVVO',
    desc: 'enviromentální vzdělávání, výchova a osvěta',
  },
  {
    shortcut: 'FIE',
    desc: 'Feurstein’s Instrumental Enrichment (Feuersteinovo instrumentální obohacení aneb Feuersteinova metoda)',
  },
  {
    shortcut: 'GDPR',
    desc: 'General Data Protection Regulation (Obecné nařízení o ochraně osobních údajů)',
  },
  {
    shortcut: 'IVP',
    desc: 'individuální vzdělávací plán',
  },
  {
    shortcut: 'KK',
    desc: 'klíčové kompetence',
  },
  {
    shortcut: 'LVK',
    desc: 'lyžařský výcvikový kurz',
  },
  {
    shortcut: 'MHMP',
    desc: 'Magistrát hlavního města Prahy',
  },
  {
    shortcut: 'MPP',
    desc: 'minimální preventivní program',
  },
  {
    shortcut: 'MRKEV',
    desc: 'metodika a realizace komplexní ekologické výchovy  (od organizace Pavučina)',
  },
  {
    shortcut: 'NNO',
    desc: 'nestátní neziskové organizace',
  },
  {
    shortcut: 'OMJ',
    desc: 'odlišný mateřský jazyk (hovoříme o žácích s OMJ – neříkáme cizinec)',
  },
  {
    shortcut: 'OPL',
    desc: 'omamné a psychotropní látky',
  },
  {
    shortcut: 'OSV',
    desc: 'osobnostně sociální výchova',
  },
  {
    shortcut: 'PAS',
    desc: 'poruchy autistického spektra',
  },
  {
    shortcut: 'PLPP',
    desc: 'plán pedagogické podpory',
  },
  {
    shortcut: 'PO',
    desc: 'podpůrná opatření (běžně: žák s potřebou PO)',
  },
  {
    shortcut: 'PPP',
    desc: 'pedagogicko–psychologická poradna',
  },
  {
    shortcut: 'RCh',
    desc: 'rizikové chování',
  },
  {
    shortcut: 'RVP',
    desc: 'rámcový vzdělávací program',
  },
  {
    shortcut: 'ŘŠ',
    desc: 'ředitelka nebo ředitel školy',
  },
  {
    shortcut: 'SPC',
    desc: 'speciálně pedagogické centrum',
  },
  {
    shortcut: 'SPJ',
    desc: 'sociálně patologické jevy',
  },
  {
    shortcut: 'ŠD',
    desc: 'školní družina',
  },
  {
    shortcut: 'ŠJ',
    desc: 'školní jídelna',
  },
  {
    shortcut: 'ŠMP',
    desc: 'školní metodik prevence',
  },
  {
    shortcut: 'ŠP',
    desc: 'školní parlament',
  },
  {
    shortcut: 'ŠPP',
    desc: 'školní poradenské pracoviště',
  },
  {
    shortcut: 'ŠPZ',
    desc: 'školská poradenská zařízení (viz PPP a SPC)',
  },
  {
    shortcut: 'ŠR',
    desc: 'školská rada',
  },
  {
    shortcut: 'ŠVP',
    desc: 'školní vzdělávací program, škola v přírodě',
  },
  {
    shortcut: 'TK',
    desc: 'třídní kniha',
  },
  {
    shortcut: 'TU',
    desc: 'třídní učitel',
  },
  {
    shortcut: 'TV',
    desc: 'třídní výkaz, tělesná výchova',
  },
  {
    shortcut: 'VDO',
    desc: 'výchova demokratického občana',
  },
  {
    shortcut: 'VU 1',
    desc: 'vedoucí učitel 1. stupně ZŠ',
  },
  {
    shortcut: 'VU 2',
    desc: 'vedoucí učitel 2. stupně ZŠ',
  },
  {
    shortcut: 'ZŘS',
    desc: 'zástupce ředitele školy',
  },
  {
    shortcut: 'ZZ',
    desc: 'zákonný zástupce',
  },
  {
    shortcut: 'ŽK',
    desc: 'žákovská knížka',
  },
];

const ShortCuts = () => {
  return (
    <Section id="pouzivane-zkratky" withBackground>
      <SectionTitle>Používané zkratky</SectionTitle>
      <Table>
        {data.map(({ shortcut, desc }) => (
          <tr key={shortcut}>
            <th>{shortcut}</th>
            <td>{desc}</td>
          </tr>
        ))}
      </Table>
      <BackToTopButton />
    </Section>
  );
};

export default ShortCuts;
