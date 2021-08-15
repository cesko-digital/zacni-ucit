import errorImage from './500.svg';
import ErrorPage from '../ErrorPage';

const Error500 = () => (
  <ErrorPage
    title="Pracujeme na tom!"
    text="Omlouváme se, ale na obsahu této stránky pracujeme a ještě není hotová. Zkuste se za námi stavit později."
    image={errorImage}
  />
);

export default Error500;
