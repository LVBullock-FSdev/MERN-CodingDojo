import React, { useState } from 'react';


const PersonCard = (props) => {
    const moduleStyle = {
        textAlign: "left",
        marginLeft: "400px",
        marginRight: "400px",
        backgroundColor: "yellow",
        paddingLeft: "15px",
        paddingBottom: "10px"
    };

    const [state, setState] = useState({
        incrementAge: props.age
    });

    const clickHandler = () =>{
        setState({
            incrementAge: state.incrementAge + 1
        });
    };

    return(
        <div>
            <div style={ moduleStyle }>
                <h1>{ props.lastName }, { props.firstName } { props.middleInitial }</h1>
                <p>Age: { state.incrementAge }</p>
                <p>Hair Color: { props.hairColor }</p>
                <button onClick={clickHandler}>BIRTHDAY BUTTON - Click to increase {props.firstName}'s age</button>
            </div>
        </div>
    );
}
export default PersonCard;