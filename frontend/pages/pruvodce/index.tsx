import ConfiguratorLayout from '@pages/Configurator/ConfiguratorLayout/ConfiguratorLayout';
import Configurator from '@pages/Configurator/Configurator';

const Page: React.FC = () => (
  <ConfiguratorLayout queryRequired={false}>
    <Configurator />
  </ConfiguratorLayout>
);

export default Page;
