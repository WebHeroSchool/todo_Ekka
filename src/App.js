import React from 'react';
import logo from './logo.svg';
import './App.css';

const isLogo = true;
const numberOfProject = 1;
const desireToLearn = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={
          { color: '#61dafb',
            margin: 0
          }
        }>
          Hi, It's my the {numberOfProject} project!
        </h1>
        <p>
          I did {numberOfProject - 1} react project before 
        </p>
        <p>
          {isLogo && 'It has a mesmerizing logo'}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {desireToLearn ? 'Learn React' : "Don't use the link"}
        </a>
        <p>
          undefined: {undefined},
          null: {null},
          false: {false},
          true: {true},
          NaN: {NaN}
        </p>
      </header>
    </div>
  );
}

export default App;
