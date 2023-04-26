import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Board } from './components/Board/Board';
import { Footer } from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Board/>
      <Footer/>
    </div>
  );
}

export default App;
