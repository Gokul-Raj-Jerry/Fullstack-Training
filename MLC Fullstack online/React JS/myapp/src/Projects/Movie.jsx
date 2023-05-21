import axios from "axios";
import React, { useEffect, useState } from "react";

const Movie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setData(res.data));
  },[]);

  return (
    <>
      <div className="container-fluid">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.id}</td>
                <td>{movie.name}</td>
                <td>{movie.email}</td>
                <td>{movie.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Movie;
