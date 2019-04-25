import React from 'react';
import './App.css';

import { Button } from './components/Button'
import { Display } from './components/Display';
import { Wheel } from './components/Wheel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Slot Machine <span>🤑😭</span></h1>
        <Display>
          <Wheel>
          </Wheel>
          <Wheel></Wheel>
          <Wheel></Wheel>
        </Display>
        <Button primary> Start </Button>
        <Button> Stop </Button>
      </header>
    </div>
  );
}

export default App;
