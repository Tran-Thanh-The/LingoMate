import Banner from './components/banner/Banner';
import Chat from './components/chat/Chat';
import Partner from './components/partner/Partner';
import Prize from './components/prize/Prize';
import ScrollToTopButton from './components/scroll-to-top/ScrollToTopButton';
import Slider from './components/slider/Slider';
import Trademark from './components/trademark/Trademark';

const Home = () => {
  return (
    <>
      <Banner />
      <Prize />
      <Trademark />
      <Slider />
      <Partner />
      <ScrollToTopButton />
      <Chat />
    </>
  );
};

export default Home;
