

import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
         
      
      <h1> Dictionary</h1>
        
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>

      <footer className="App-footer">
        <small> <a href="https://github.com/jquebec31/dictionary_project" target="_blank" rel="noopener noreferrer">
        Open-sourced on Github
        </a> by Jocelyn D</small>
      </footer>
      </div>
      </div>
  );
}


