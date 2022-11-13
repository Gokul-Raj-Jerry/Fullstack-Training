import React, { Component } from "react";
import Axios from "axios";

export class Didmount extends Component {
  state = { users: [] };
  getDataHandler = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        this.setState({ users: resp.data });
      })
      .catch();
  };
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.users)}</pre>
        <button className="btn btn-info" onClick={this.getDataHandler}>
          Get Data
        </button>
        <div className="container">
          <table className="table table-hover table-stripped">
            <thead className="table table-dark">
              <tr>
                <th>ID</th>
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
    );
  }
}

export default Didmount;
