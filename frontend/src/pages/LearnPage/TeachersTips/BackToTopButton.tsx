import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import ArrowUpIcon from '@icons/arrow-up.svg';

const BackToTopButton = () => {
  return (
    <BackToHomeButton
      visible
      href="tipy-pro-zacinajici-ucitele/#vyber-tipu-od-ellen"
      icon={<ArrowUpIcon />}
    >
      Zpátky na výběr tipů od Ellen
    </BackToHomeButton>
  );
};

export default BackToTopButton;
