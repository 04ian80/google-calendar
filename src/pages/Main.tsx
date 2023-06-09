import Header from '../components/base/Header';
import HomeLayout from '../components/home/HomeLayout';
import MainTemplate from '../components/main/MainTemplate';

const Main = () => {
  return (
    <MainTemplate>
      <Header />
      <HomeLayout children={<>Main</>} />
    </MainTemplate>
  );
};

export default Main;
