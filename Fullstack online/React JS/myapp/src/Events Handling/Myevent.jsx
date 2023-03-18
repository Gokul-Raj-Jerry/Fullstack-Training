import React, { Component } from 'react'

class Myevent extends Component {
    constructor() {
        super()
        console.log("Hello world");
        this.state = {
            displayinfo: false
        }
        this.togledis = this.togledis.bind(this)
        // this.readMore = this.readMore.bind(this)
    }
    /* readMore() {
        console.log('read info');
        // this.state.displayinfo = true
        this.setState({ displayinfo: true })
    }

    showLess() {
        this.setState({ displayinfo: false })
    } */
    togledis() {
        this.setState({ displayinfo: !this.state.displayinfo }) 
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
                            {
                                <button onClick={this.togledis}>SHOW LESS</button>
                            }
                        </div> : (
                            <button onClick={this.togledis}>Read more</button>
                        )
                    }
                </div>
            </>
        )
    }
}

export default Myevent
