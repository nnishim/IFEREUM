import './App.css';
import Benefits from './components/Benefits/Benefits';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { Wrapper } from './styled/Wrapper.styled';

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <Hero/>
        <Benefits/>
        <Cards/>
      </Wrapper>
    </>
  );
}

export default App;
