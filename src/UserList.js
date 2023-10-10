import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

function UserList (){
  const [List, setList] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {


        setList(response.data);
      })
      .catch((error) => {
        console.error("Couldn't fetch data", error)
      });
  }, [])



  return (
    <div>
      <h1>User List</h1>
      <ul>
        {List.map((user) => (
          <ul className='userlist'>
            <strong>Name</strong>: {user.name} <br />
            <strong>Username</strong> : {user.username} <br />
            <strong>Email</strong> : {user.email} <br />
            <strong>Address</strong>: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode} <br />
            <strong>Phone</strong> : {user.phone} <br />
            <strong>Website</strong> : {user.website} <br />
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
