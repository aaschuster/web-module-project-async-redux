import React, { useState } from 'react'
import { connect } from "react-redux"
import { getResults } from "./actions"

function Form({ getResults }) {
    const [val, setVal] = useState("");

    function onChange(val) {
        setVal(val);
    }

    function onSubmit(e) {
        e.preventDefault();
        getResults(val);
        setVal("");
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <textarea value={val} onChange={e => onChange(e.target.value)} placeholder="Insert text to be translated..."/>
            <button>Submit</button>
        </form>
    )
}

export default connect(null, { getResults })(Form);