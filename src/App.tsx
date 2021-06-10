import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Simple Character Designer
        </p>
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <label htmlFor="race">Choose a race: </label>

        <select name="race" id="race">
          <option value="human">Human</option>
          <option value="orc">Orc</option>
          <option value="elf">Elf</option>
          <option value="troll">Troll</option>
          <option value="changeling">Changeling</option>
        </select>

        <label htmlFor="class">Choose a class: </label>

        <select name="class" id="class">
          <option value="warrior">Human</option>
          <option value="sorcerer">Orc</option>
          <option value="druid">Elf</option>
          <option value="ranger">Troll</option>
          <option value="rogue">Changeling</option>
        </select>

        <label htmlFor="alignment">Choose your alignment: </label>

        <select name="alignment" id="alignment">
          <option value="lawful good">Human</option>
          <option value="good">Orc</option>
          <option value="chaotic good">Elf</option>
          <option value="lawful neutral">Troll</option>
          <option value="true neutral">Changeling</option>
          <option value="chaotic neutral">Troll</option>
          <option value="lawful evil">Changeling</option>
          <option value="evil">Troll</option>
          <option value="chaotic evil">Changeling</option>
        </select>

        <form action="/action_page.php">
          <label htmlFor="eyeColor">Select your character's eye color: </label>
          <input type="color" id="eyeColor" name="eyeColor" value="#ff0000"></input>
          <input type="submit"></input>
        </form>
      </header>
      <div>

      </div>
    </div>
  );
}

export default App;
