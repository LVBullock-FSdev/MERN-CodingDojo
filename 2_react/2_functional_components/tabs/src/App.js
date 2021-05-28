import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs 
        tabButtons={ [ 
          {label: "Tab 1", content: "Tab 1, we're almost done.", 
          callback(){
            console.log(this.label, "clicked");
          } 
        },
          {label: "Tab 2", content: "Tab 2 is never blue!", 
          callback(){
            console.log(this.label, "clicked");
          } 
        },
          {label: "Tab 3", content: "Tab 3 --> WE BELIEVE!", 
          callback(){
            console.log(this.label, "clicked");
          } 
        },
          {label: "Tab 4", content: "Tab 4 has the floor.", 
          callback(){
            console.log(this.label, "clicked");
          } 
        },
          {label: "Tab 5", content: "Tab 5 --> GO LIVE!!", 
          callback(){
            console.log(this.label, "clicked");
          } 
        }
        ]}
      />
    </div>
  );
}

export default App;
