import './App.css';
import PersonCard from './components/PersonCard'; //no need to add the .js since it is a javascript file

function App() {
  return (
    <div className="App">
      <h1>PROP IT UP!</h1>

      <PersonCard 
        firstName={ "Sandra" }
        middleInitial={ "L."} 
        lastName={ "Blackwell"} 
        age={ "45" } 
        hairColor={ "Blonde" }
      />

      <PersonCard 
        firstName={ "John" }
        middleInitial={ "J."} 
        lastName={ "Smith"} 
        age={ "88" } 
        hairColor={ "Brown" }
      />

      <PersonCard 
        firstName={ "Sierra" }
        middleInitial={ "A."} 
        lastName={ "Sunshine"} 
        age={ "32" } 
        hairColor={ "Brown" }
      />

      <PersonCard 
        firstName={ "Maria" } 
        middleInitial={ "R."} 
        lastName={ "Stevens"} 
        age={ "62" } 
        hairColor={ "Brunette" }
      />

    </div>
  );
}

export default App;


//Week1 Day2 Lecture 5/6/2021: First React App - Functional Components - Props - Styling