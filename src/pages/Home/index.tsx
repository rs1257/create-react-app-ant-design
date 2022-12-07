import CustomButton from '../../components/CustomButton';
import LinkButton from '../../components/LinkButton';
import Loader from '../../components/Loader';
import './Home.scss';

const Home = (): JSX.Element => {
  const onClick = (): void => {
    // eslint-disable-next-line no-console
    console.log('click');
  };

  return (
    <>
      <div className="home">Home</div>

      <div>
        <h1>Primary</h1>
        <CustomButton type="primary" size="large" onClick={onClick}>
          Click Me
        </CustomButton>
        <CustomButton type="primary" size="middle" onClick={onClick}>
          Click Me
        </CustomButton>
        <CustomButton type="primary" size="small" onClick={onClick}>
          Click Me
        </CustomButton>
      </div>

      <div>
        <h1>Secondary</h1>
        <CustomButton size="large" onClick={onClick}>
          Click Me
        </CustomButton>
        <CustomButton size="middle" onClick={onClick}>
          Click Me
        </CustomButton>
        <CustomButton size="small" onClick={onClick}>
          Click Me
        </CustomButton>
      </div>

      <div>
        <h1>Link</h1>
        <LinkButton size="large" href={'#'} target="_blank">
          Click Me New tab
        </LinkButton>
        <LinkButton size="large" href={'#'}>
          Click Me
        </LinkButton>
      </div>
      <div>
        <h1>Loader</h1>
        <Loader />
      </div>
    </>
  );
};

export default Home;
