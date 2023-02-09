import React from 'react';
import { connect } from 'react-redux'

import './App.css';

import Form from "./Form"
import Results from "./Results"

function App( { results } ) {

  return (
    <div className="App">

      <h1>
        Async Redux Project
      </h1>

      <h2>
        Change a sentence into Yoda Speak!!
      </h2>

      <Form />
      
      <p>{results}</p>

    </div>
  );
}

const mapProps = state => {
  return {
    results: state.results
  }
}

export default connect(mapProps, {})(App);