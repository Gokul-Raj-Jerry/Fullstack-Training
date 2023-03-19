import React from 'react'
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    /* if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />; */
    return isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

export default Greeting;