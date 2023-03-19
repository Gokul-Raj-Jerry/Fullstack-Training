import React from 'react'

const LoginButton = (props) => {
    return (
        <>
            <div className="container">
                <button className='btn btn-primary' onClick={props.onClick}>
                    Login
                </button>
            </div>

        </>
    )
}

export default LoginButton
