import './App.css';
import Benefits from './components/Benefits/Benefits';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import { Wrapper } from './styled/Wrapper.styled';

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <Hero/>
        <Benefits/>
        <Cards/>
        <Slider/>
        <Footer/>
      </Wrapper>
    </>
  );
}

export default App;
