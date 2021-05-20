import React, { useState } from 'react';
import './App.css';
import BoxGenerator from './components/BoxGenerator';

function App() {
    const [boxes, setBoxes] = useState([]); //lifting state

  return (
    <div className="App">
      <h1>Box Generator</h1>

      <BoxGenerator boxes={ boxes } setBoxes={ setBoxes }/>

        <div>
            {boxes.map((color, i) =>{
              return (
                <div 
                  key={i} 
                    style={{ 
                      display: 'inline-block', 
                      backgroundColor: color, 
                      width: 200, 
                      height: 200, 
                      marginRight: 15 
                    }}>
                </div>);
            })
            }
        </div>
    </div>
  );
}

export default App;
