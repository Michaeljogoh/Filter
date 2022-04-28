import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import bolla from "./image/bolla.jpg"
import bring from "./image/bring.jpg"
import eco from "./image/eco.jpg"
import enlight from "./image/enlight.jpg"
import femi from "./image/femi.jpg"
import home from "./image/home.jpg"


const USERS = [
  {
    id: 1, 
    name: 'Christian', 
    title: 'C.E.O',
    image: bolla
  },

  {
    id: 2, 
    name: 'PJmiles', 
    title: 'Senior Software Engineer',
    image: bring
  },

  {
    id: 3, 
    name: 'Michael', 
    title: 'Senior Software Engineer',
    image: eco
  },
  {
    id: 4, 
    name: 'Victor', 
    title: 'Senior Software Engineer',
    image: enlight
  },
  {
    id: 5, 
    name: 'Tayo', 
    title: 'Senior Software Engineer',
    image: femi
  },
  {
    id: 6,
     name: 'Mark', 
     title: 'Senior Software Engineer',
     image: home
  },
  
];

function Map() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (

    <div className="container">
      <Navbar name={name} filter={filter}/>
        <div className="userContainer">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <div key={user.id} className="user">
              <img src={user.image} alt="bolla"/>
              <h3 className="user-name">{user.name}</h3>
              <p className="userTitle">{user.title}</p>
            </div >
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}


export default Map;
