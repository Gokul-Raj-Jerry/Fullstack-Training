import React, { Component } from 'react'

class Myevent extends Component {
    constructor() {
        super()
        console.log("Hello world");
        this.state = {
            displayinfo: false
        }
    }
    readMore() {
        console.log('read info');
        // this.state.displayinfo = true
        this.setState({ displayinfo: true })
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>Event Handling</h1>
                    <p>React events are named using camelCase, rather than lowercase.</p>
                    {
                        this.state.displayinfo ? <div>
                            <p>Passing Arguments to Event Handlers</p>
                        </div> : (
                            <button onClick={this.readMore}>Read more</button>
                        )
                    }
                </div>
            </>
        )
    }
}

export default Myevent
