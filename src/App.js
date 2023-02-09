import React from 'react';
import './App.css';

import Form from "./Form"
import Results from "./Results"

function App() {

  function onChange() {

  }

  function onSubmit() {

  }

  return (
    <div className="App">

      <h1>
        Async Redux Project
      </h1>

      <h2>
        Find popular destinations from the airport of your choice!
      </h2>

      <Form />
      <Results />
      
    </div>
  );
}

export default App;