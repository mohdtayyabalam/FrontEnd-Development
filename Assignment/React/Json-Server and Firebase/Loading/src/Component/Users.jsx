import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetching = () => {
    setLoading(true);
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res.users);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetching();
  }, []);

  if (loading) {
    return <div style={{fontSize:'50px'}}> Loading </div>;
  }

  return (
    <div>
      <h1>List of the User: </h1>
      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone-No</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
