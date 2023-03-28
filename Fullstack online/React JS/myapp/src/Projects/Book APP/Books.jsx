import React, { Component } from "react";

class Books extends Component {
  state = {
    books: [],
    newBookData: {
      title: "",
      rating: "",
    },
    editBookData: {
      id: "",
      title: "",
      rating: "",
    },
    newBookModal: false,
    editBookModal: false,
  };

  componentWillMount() {
    // react lifecycle
    this._refrestBooks(); // selfcall back method
  }

  toggleNewBookModal() {
    this.setState({
      newBookModal: !this.state.newBookModal,
    });
  }

  toggleEditBookModal() {
    this.setState({
      editBookModal: !this.state.editBookModal,
    });
  }

  render() {
    return <></>;
  }
}

export default Books;
