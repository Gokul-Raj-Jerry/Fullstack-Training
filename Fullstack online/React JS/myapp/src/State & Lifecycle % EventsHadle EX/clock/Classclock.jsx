import React, { Component } from 'react'


class Classclock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }
    // Methods
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    // set state
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className='container'>
                <h1>Class based component</h1>
                <h2>DT: {this.state.date.toLocaleString()}.</h2>
            </div>
        )
    }
}

export default Classclock
