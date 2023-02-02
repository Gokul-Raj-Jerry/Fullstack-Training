import React, { Component } from "react";
import Axios from "axios";

class Usersaxios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch();
  }

  /*  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({
          contacts: response.data,
        });
      })
      .catch();
  } */

  render() {
    return (
      <div>
        <div>
          <div className="container">
            <h1 className="text-center bg-light">Kiran Kumar</h1>
            <pre>{JSON.stringify(this.state.users)}</pre>
            <table className="table table-hover table-stripped">
              <thead className="table table-dark">
                <tr>
                  <th>ID Number</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody className="table bg-secondary table-stripped">
                {this.state.users.length > 0 ? (
                  <>
                    {this.state.users.map((user) => {
                      return (
                        <tr>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                        </tr>
                      );
                    })}
                  </>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Usersaxios;
