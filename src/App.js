import { useState } from 'react';
import './App.css';
import Tooltip from './Tooltip';

function App() {
     const Position = ["left", "right", "top", "bottom"];

     const[textPostion, setTextPosition] = useState(0);
   
     const handlePosition = () => {
      const randomInt = Math.floor(Math.random() * 4);
      console.log(randomInt);
          setTextPosition(randomInt);
     }
 
     

  return (
    <>
      <div className="App">
        <Tooltip onclick={handlePosition} position={Position[textPostion]} />
      </div>
    </>
  );
}

export default App;
