import React, { useState } from 'react';

const BoxGenerator = (props) => {
    const [boxColor, setBoxColor] = useState("");

    const generateBox = (e) => {
        e.preventDefault();
        props.setBoxes([...props.boxes, boxColor]);
        setBoxColor(""); //reset the value of the box color input to empty
    }

return(
    <div>
        <form onSubmit={ (e) => generateBox(e) }>
            <div className="divider">
                <label htmlFor="boxColor">Color: </label>
                <input style={{borderColor: 'none', borderRadius: 5, textAlign: 'center'}} placeholder="Enter a color"
                    type="text" 
                    value={ boxColor } 
                    onChange={ (e) => setBoxColor( e.target.value ) }/>
                
                <button type="submit" onSubmit={ (e) => generateBox() }>Add</button>
            </div><br></br>
        </form>

        {/*move this to App.js -- lifting state
         <div>
            {
                boxes.map((color, i) =>{
                    return (
                        <div 
                            key={i} 
                            style={{ display: 'inline-block', backgroundColor: color, width: 200, height: 200, marginRight: 15 }}>
                        </div>
                    )
                })
            }
        </div> */}
    </div>
    );
}

export default BoxGenerator;