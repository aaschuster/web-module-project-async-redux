import React from 'react';

import './App.css';

import Form from "./Form"
import Response from './Response';

function App() {

  return (
    <div className="App">

      <h1>
        Async Redux Project
      </h1>

      <h2>
        Change a sentence into <span id="yoda">Yoda</span> Speak!!
      </h2>

      <Form />
      <Response />

    </div>
  );
}

export default App;