import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import { Wrapper } from './styled/Wrapper.styled';

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <Hero/>
      </Wrapper>
    </>
  );
}

export default App;
