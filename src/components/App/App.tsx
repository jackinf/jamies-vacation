import React from 'react';
import './App.css';
import ApiTokenConfigurator from '../ApiTokenConfigurator';
import Search from '../Search';

function App() {
  return (
    <div className="App">
      <p>
        This app will help you decide which office is better for you <span role="img" aria-label="palmtree">🌴</span>
      </p>
      <p>
        <ApiTokenConfigurator />
      </p>
      <Search />
    </div>
  );
}

export default App;
