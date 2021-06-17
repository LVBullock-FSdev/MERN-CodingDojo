import React from "react";

const Home = (props) => {
    console.log(props);
    if (!props.word) { //if not the word entered in the address bar, return the home page
        return (
        <div>
            <h1>Welcome!</h1>
            <p>Change "/home" to a word or number and hit enter.</p>

        </div>
        );
    } 
    else {
        if (isNaN(props.word)) { //if entry is not a number, the get the word?  or isNaN=true
            return (
                <div>
                    <h1 style={
                        props.textColor
                            ? { color: props.textColor, backgroundColor: props.bGroundColor }  //if colors enter in address ie. word/teal/yellow, make change the color of the text teal and the background yellow
                            : null}>  {/* else no change in text color or background */}
                        The word is: {props.word} {/* grab the word entered in the address bar */}
                    </h1>
                    <p>Leave your word and enter 2 colors separated by /, i.e. localhost:3000/colors/red/blue.  </p>
                    <p><strong>NOTE:</strong>  The first color entered changed the font color; the second changed the background.</p>

                </div>
            );
        } 
        else {
            return (
                <div>
                    <h1>The number is: {props.word}</h1> {/* grab the number(which is a word in this case -- isNaN) entered in the address bar */}
                    <p>Change your number to a word and hit enter.</p>
                    <p><strong>OR</strong> follow first set of instructions on this page to return home.</p>

                </div>
            );
        }
    }
};

export default Home;

//RESOURCE:
//https://www.w3schools.com/cssref/css_colors.asp