import { useFormikContext } from 'formik';
import React from 'react';

import ConfiguratorStep from './ConfiguratorStep/ConfiguratorStep';
import DegreePage from './DegreePage/DegreePage';
import StyleWrapper from '@components/StyledWrapper';
import Button from '@components/Button/Button';
import { H1, LightText } from '@components/Typography';
import { routes } from '@routes';
import { ConfiguratorValues } from './ConfiguratorLayout/ConfiguratorLayout';

const Configurator: React.FC = () => {
  const { values } = useFormikContext<ConfiguratorValues>();

  return (
    <>
      <StyleWrapper margin="3rem 0 1rem 0">
        <H1>Chcete se stát učitelem, ale nevíte jak na to?</H1>
      </StyleWrapper>
      <StyleWrapper margin="0 0 3rem 0">
        <LightText>
          Udělejte další krok na cestě za katedru. Chcete učit? Vyplňte náš dotazník a my vám
          doporučíme seznam potřebných pedagogických studijních programů a kurzů, nebo jednoduše
          zjistíte, že můžete začít učit třeba hned.
        </LightText>
      </StyleWrapper>

      <ConfiguratorStep
        title="Na jakém školním stupni chcete učit?"
        step={1}
        nextStep={{ url: routes.configurator.step2, disabled: !values.degree }}
        additionalText={
          <LightText>
            Nenašli jste vámi zvolený stupeň nebo vás zajímá jiná pedagogická profese?{' '}
            <Button href="#">Napište nám</Button> nebo se podívejte na{' '}
            <Button href="#">přehled zákona o ped. pracovnících</Button>.
          </LightText>
        }
      >
        <DegreePage />
      </ConfiguratorStep>
    </>
  );
};

export default Configurator;
