import React from 'react';
import { connect } from 'react-redux'

import './App.css';

import Form from "./Form"
import Results from "./Results"

function App( { err, results } ) {

  return (
    <div className="App">

      <h1>
        Async Redux Project
      </h1>

      <h2>
        Change a sentence into Yoda Speak!!
      </h2>

      <Form />

      <p id="err">{err}</p>
      
      <p id="res">{results}</p>

    </div>
  );
}

const mapProps = state => {
  return {
    err: state.err,
    results: state.results
  }
}

export default connect(mapProps, {})(App);