import React, { Component } from 'react'
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LoginControl extends Component {
    constructor(props) {
        super(props); // props to communicate

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this); // event bind this value

        this.state = { isLoggedIn: false };  // initializing state
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true }); // event handler
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;  // assign and excecute with if else condition render buttons
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />; // assigned button and return UI below  
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div className='container'>
                <h1>Conditional Operator: Ternary</h1>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export default LoginControl;
