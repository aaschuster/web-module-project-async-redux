import React, { useState } from 'react'

function Form() {
    const [val, setVal] = useState("");

    function onChange(val) {
        setVal(val);
    }

    function onSubmit() {

    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Enter three letter airport code...
                <input type="text" value={val} onChange={e => onChange(e.target.value)} />
                <button>Submit</button>
            </label>
        </form>
    )
}

export default Form;