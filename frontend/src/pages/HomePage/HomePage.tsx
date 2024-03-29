import React from 'react';

import CtaSection from './CtaSection/CtaSection';
import Header from './Header/Header';
import PartnersSection from './PartnersSection/PartnersSection';
import PathSection from './PathSection/PathSection';
import VylukaSection from './VylukaSection/VylukaSection';
import WhyTeach from './WhyTeach/WhyTeach';
import Meta from '@components/Meta/Meta';
import { routes } from '@routes';

import startTeachingImage from './startTeaching.png';
import tryTeachingImage from './tryTeaching.png';

const HomePage: React.FC = () => (
  <>
    <Meta
      title="Začni učit! | Pomáháme budoucím i začínajícím učitelům"
      description="Ukazujeme, jak se stát učitelem i jak zvládnout začátky v kariéře pedagoga. "
    />
    <Header />

    <PathSection />

    <CtaSection
      button={{ text: 'Chci zkusit učit', href: routes.tryTeaching.main, color: '#FF2F5B' }}
      image={tryTeachingImage}
      link={{ text: 'Věnujte 1 den škole', href: `${routes.tryTeaching.main}#den-pro-skolu` }}
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
      title="Vyzkoušejte si učení"
    />
    <WhyTeach />
    <CtaSection
      button={{ text: 'Chci se zaučit', href: routes.learn.learnPage, color: '#FFB60B' }}
      image={startTeachingImage}
      link={{ text: 'Tipy pro začínající učitele', href: `${routes.learn.teachersTips}` }}
      text={
        <>
          <p>Začátky za katedrou jsou velkou výzvou.</p>
          <p>
            Nejste na to ale sami – můžete se zapojit do našeho rozvojového programu{' '}
            <strong>Zauč se!</strong> nebo se inspirovat tipy kolegyň a kolegů.
          </p>
        </>
      }
      title="Začínám učit"
    />
    <VylukaSection />
    <PartnersSection />
  </>
);

export default HomePage;
