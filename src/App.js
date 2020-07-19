import React from 'react';
import './App.scss';
import Header from './components/Header';
import Controls from './components/Controls';
import Display_Container from './components/Display_Container';

function App() {
  return (
    <>
      <Header />
      <Controls />
      <Display_Container />
    </>
  );
}

export default App;
