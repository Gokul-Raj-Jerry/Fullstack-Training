import React, { useState } from 'react';

const Hooksstateclock = () => {

    let [time, setTime] = useState(now) // state is array

    function now() {
        console.log(new Date());
        return new Date().toLocaleTimeString();
    }

    function updTime() {
        setTime(now())
    }

    setInterval(updTime)

    return (
        <>
            <div className="container-fluid">
                <h1>Clock: {time}</h1>
            </div>
        </>
    )
}

export default Hooksstateclock;