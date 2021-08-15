import React from 'react';
import { routes } from '@routes';
import WhyTeach from './WhyTeach/WhyTeach';
import CtaSection from './CtaSection/CtaSection';

import tryTeachingImage from './tryTeaching.png';
import startTeachingImage from './startTeaching.png';
import VylukaSection from './VylukaSection/VylukaSection';
import Header from './Header/Header';
import Meta from '@components/Meta/Meta';
import PartnersSection from './PartnersSection/PartnersSection';
import PathSection from './PathSection/PathSection';

const HomePage: React.FC = () => (
  <>
    <Meta title="Začni učit" />
    <Header />

    <PathSection />

    <CtaSection
      title="Vyzkoušejte si učení"
      image={tryTeachingImage}
      text={
        <>
          <p>
            Nevíte, zda je učitelství pro vás? S naším programem <strong>Zkus učit!</strong> se na
            týden stanete učitelem.
          </p>
          <p>
            Učení vás láká, ale máte málo času? Zúčastněte se <strong>Dne pro školu</strong> a
            předejte své odborné znalosti během jednoho dne.
          </p>
        </>
      }
      button={{ text: 'Chci zkusit učit', href: routes.tryTeaching.main, color: '#FF2F5B' }}
      link={{ text: 'Věnujte 1 den škole', href: routes.dayForSchool }}
    />
    <WhyTeach />
    <CtaSection
      title="Začínám učit"
      image={startTeachingImage}
      text={
        <>
          <p>Začátky za katedrou jsou velkou výzvou.</p>
          <p>
            Nejste na to ale sami – můžete se zapojit do našeho rozvojového programu{' '}
            <strong>Zauč se!</strong> nebo se inspirovat tipy kolegyň a kolegů.
          </p>
        </>
      }
      button={{ text: 'Chci se zaučit', href: routes.learn.main, color: '#FFB60B' }}
      link={{ text: 'Tipy pro začínající učitele', href: routes.teachersTips }}
    />
    <VylukaSection />
    <PartnersSection />
  </>
);

export default HomePage;
