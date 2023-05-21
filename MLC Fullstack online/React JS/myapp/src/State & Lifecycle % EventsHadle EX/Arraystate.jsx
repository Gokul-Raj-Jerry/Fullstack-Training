import React, { Component } from 'react'

class Arraystate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myArray: [
        { title: "REACT", text: "React is a SPA" },
        { title: "JS", text: "JS si frontend libirary" },
        { title: "HTML", text: "HTML is WEBPAGE" }
      ]
    }
    this.handleArray = this.handleArray.bind(this)
  }

  handleArray() {
    this.setState({
      myArray: [
        { title: "CHITTY", text: "CHITTY THE ROBOT" },
        { title: "KUTTY", text: "KUTTY SMALL BOY" },
        { title: "ROBOT", text: "ROBOT FROM CHITTY" }
      ]
    })
  }

  render() {
    return (
      <>
        <div>
          <h1>Table Data</h1>
          <ul>
            <li>{this.state.myArray[0].title}</li>
            <li>{this.state.myArray[1].title}</li>
            <li>{this.state.myArray[2].title}</li>
          </ul>
          <button onClick={this.handleArray}>CHANGE DATA</button>
        </div>
      </>
    )
  }
}

export default Arraystate
