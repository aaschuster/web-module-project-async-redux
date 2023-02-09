import React from 'react';
import { connect } from 'react-redux'

import './App.css';

import Form from "./Form"
import Results from "./Results"

function App( { err, results, isFetching } ) {

  return (
    <div className="App">

      <h1>
        Async Redux Project
      </h1>

      <h2>
        Change a sentence into <span id="yoda">Yoda</span> Speak!!
      </h2>

      <Form />
      <div id="response">
        {isFetching ? <p id="loading">Loading...</p> : <></>}
        {err ? <p id="err">{err}</p> : <></>}
        {results ? <p id="res">{results}</p> : <></>}
      </div>

    </div>
  );
}

const mapProps = state => {
  return {
    err: state.err,
    results: state.results,
    isFetching: state.isFetching
  }
}

export default connect(mapProps, {})(App);