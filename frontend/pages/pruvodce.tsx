import Configurator from '@pages/Configurator/Configurator';
import Error404 from '@pages/Errors/Error404/Error404';

const Page: React.FC = () => {
  if (process.env.NODE_ENV === 'development') {
    return <Configurator />;
  }

  return <Error404 />;
};

export default Page;
