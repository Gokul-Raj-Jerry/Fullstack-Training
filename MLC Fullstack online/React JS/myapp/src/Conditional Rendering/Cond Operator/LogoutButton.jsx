import React from 'react'

const LogoutButton = (props) => {
    return (
        <>
            <div className="container">
                <button className='btn btn-danger' onClick={props.onClick}>
                    Logout
                </button>
            </div>
        </>
    )
}

export default LogoutButton
