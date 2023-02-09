import React from "react";
import { connect } from "react-redux";

function Response( { isFetching, err, results } ) {
    return (
        <div id="response">
            {isFetching ? <p id="loading">Loading...</p> : <></>}
            {err ? <p id="err">{err}</p> : <></>}
            {results ? <p id="res">{results}</p> : <></>}
        </div>
    )
}

const mapProps = state => {
    return {
        isFetching: state.isFetching,
        err: state.err,
        results: state.results
    }
}

export default connect(mapProps, {})(Response);