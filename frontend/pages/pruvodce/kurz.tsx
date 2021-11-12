import ConfiguratorLayout from '@pages/Configurator/ConfiguratorLayout/ConfiguratorLayout';
import CoursePage from '@pages/Configurator/CoursePage/CoursePage';

const Page: React.FC = () => (
  <ConfiguratorLayout queryRequired={false}>
    <CoursePage />
  </ConfiguratorLayout>
);

export default Page;
