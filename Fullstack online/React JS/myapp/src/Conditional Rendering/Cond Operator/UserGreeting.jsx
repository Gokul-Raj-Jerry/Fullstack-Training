import React from 'react'

const UserGreeting = () => {
    const currentTime = new Date(2020, 7, 24, 13).getHours();
    return currentTime > 12 && <h1>Still Working</h1>
    // currentTime > 12 ? <h1>Still Working</h1> : <h1>Not Working</h1>


    /* (
        <>
            <div className="container">
                <h1>Welcome back! Buddy</h1>

            </div>
        </>
    ) */
}

export default UserGreeting
