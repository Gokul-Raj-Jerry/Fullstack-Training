import React from 'react'

const Clock = (props) => {
    return (
        <div>
            <h1>Child fun, Receive data from Parent. using props</h1>
            <h2>DT: {props.date.toLocaleString()}</h2>
        </div>
    )
}

export default Clock
