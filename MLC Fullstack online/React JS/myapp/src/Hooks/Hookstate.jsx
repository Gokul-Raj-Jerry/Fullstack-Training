import React, { useState } from 'react'

const Hookstate = () => {
  const [state, setstate] = useState(0) // state is array is destructured
  
  const icr = () => {
    setstate(state + 1)
  }

  const dcr = () => {
    setstate(state - 1)
  }

  return (
    <>
      <div className="container">
        <h1>React Hook & useState Example</h1>
        <h1>Count: {state}</h1>
        <button className='btn btn-primary' onClick={icr}>PLUS</button>&nbsp;
        <button className='btn btn-danger' onClick={dcr}>MINUS</button>
      </div>
    </>
  )
}

export default Hookstate;