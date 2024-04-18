import React from 'react';
import Button from '@mui/material/Button';
import { Puck } from './components/Puck.jsx';
import Circle from './components/Circle.jsx';
import Welcome from './components/Welcome.jsx';

function App() {
  return (
    <div>
      {/* <Welcome></Welcome>
      <Button variant="contained">Hello world</Button>
      <Puck></Puck> */}
      <Circle id={101} initialX={0} initialY={0}></Circle>
    </div>
  );
}

export default App;