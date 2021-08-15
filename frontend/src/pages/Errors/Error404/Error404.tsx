import errorImage from './404.svg';
import ErrorPage from '../ErrorPage';

const Error404 = () => (
  <ErrorPage
    title="Jej, tady nic není"
    text="Omlouváme se, ale tady nic není."
    image={errorImage}
  />
);

export default Error404;
