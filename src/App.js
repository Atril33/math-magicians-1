import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Quote from './components/Quote';
import './App.css';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<Logo />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
