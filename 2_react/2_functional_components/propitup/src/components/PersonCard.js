import React from 'react';


const PersonCard = (props) => {
    const moduleStyle = {
        textAlign: "left",
        marginLeft: "400px",
        marginRight: "400px",
        backgroundColor: "yellow",
        paddingLeft: "15px",
        paddingBottom: "2px"
    };

    return(
        <div>
            <div style={ moduleStyle }>
                <h1>{ props.lastName }, { props.firstName } { props.middleInitial }</h1>
                <p>Age: { props.age }</p>
                <p>Hair Color: { props.hairColor }</p>
            </div>
        </div>
    );
}
export default PersonCard;