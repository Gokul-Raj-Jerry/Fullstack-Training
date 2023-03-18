import React from 'react'
import Clock from './Clockfun1'

const Tick = () => {
    return (
        <>
            <div className="container-fluid">
                <h1>Patent Functional component Lifecycle method</h1>
                {/* <h2>Clock: {new Date().toLocaleTimeString()}</h2> */}
                <Clock date={new Date()} />
            </div>

        </>
    )
}

export default Tick
