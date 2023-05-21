import React, { Component } from 'react'

class classOps extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        let info = (
            <div>
                <p>Tech Training</p>
                <p>ReactJS </p>
            </div>
        )
        return (
            <>
                <h1>OOPS, State, This, Events</h1>
                {info}
            </>
        )
    }
}

export default classOps
