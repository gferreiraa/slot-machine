import React from 'react';
import './App.css';

//Styled Components
import { Button, Display, Container, Wheel } from './components/Styled'

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
        <p>You win or You lose 🤑😭</p>
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
        <Container>
          <Button primary onClick={console.log('The link was clicked.')}> Start </Button>
          <Button> Stop </Button>
        </Container>
      </header>
    </div>
  );
}

export default App;

/**
 * {{// eslint-disable-next-lin🤑😭}}
 * 
 */