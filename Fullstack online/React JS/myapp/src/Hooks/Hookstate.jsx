import React, { useState } from 'react'

function Hookstate() {
    const state = useState(1000) // state is array
    console.log(state);


    const [red, blue, green] = [31, 184, 90]
    console.log(red)
    console.log(blue)
    console.log(green)

    return (
        <>
            <div className="container">
                <h2>React Hook State</h2>
                <button>PLUS</button>
                <button>Minus</button>
            </div>
        </>
    )
}

export default Hookstate;