import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ pokemon, setPokemon ] = useState([]);

  //get all of the Pokemon
    useEffect(() =>{

  //Replaced Fetch with the use of Axios
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1099")
      .then((response) => {
        console.log(Date.now().toLocaleString());
        console.log(response);
        setPokemon(response.data.results); //"navigates to" response.data.results and grabs the data
      })
      .catch((error) => {
        console.log(error);
      });
    
    console.log("\tTook this many fractions of a second since January 1, 1970  ==>", Date.now().toLocaleString())//timestamp for completion
    console.log("Waiting for the Pokemon API to return data!");
    }, []); //run once and stop

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      {/* <button onClick={ (e) => getPokemon() }>Fetch Pokemon</button> //Button is not required for this assignment */}
      <hr></hr>
      {
        pokemon.map((pokemon, index) => (
          <div className="List" key={ index }>
            <ul>
              <li>
              <h4>&#10051; { pokemon.name }</h4>
              </li>
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default App;


// USEFUL RESOURCES:

// MERN Lecture week 4 day 1 - Axios, Routing with Reach Router with StarWars API
// https://www.toptal.com/designers/htmlarrows/symbols/
// https://www.w3schools.com/css/css_align.asp
