import React from 'react';
import './App.css';

import { Button } from './components/Button'
import { Display } from './components/Display'
import { Wheel } from './components/Wheel'

// SVG icons
import banana from './assets/banana.svg'
import monkey from './assets/monkey.svg'
import orange from './assets/orange.svg'
import strawberry from './assets/strawberry.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Slot Machine</h1>
        <Display>

          <Wheel>
            <img className="slot__icon" src={ banana }/>
          </Wheel>

          <Wheel>
            <img className="slot__icon" src={ orange }/>
          </Wheel>

          <Wheel>
            <img className="slot__icon" src={ strawberry }/>
          </Wheel>

        </Display>
        <div className="button__container">
          <Button primary> Start </Button>
          <Button> Stop </Button>
        </div>
      </header>
    </div>
  );
}

export default App;

/**
 * {{// eslint-disable-next-lin🤑😭}}
 * 
 */