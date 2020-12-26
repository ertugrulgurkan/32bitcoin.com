import React from 'react';
import './App.css';
import Tickers from './components/Tickers';
import Links from './components/Links';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>32Bitcoin.com</h2>
      </div>
      <Links/>
      <Tickers/>
    </div>
  );
}

export default App;
