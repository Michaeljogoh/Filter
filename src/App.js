import React, {useState} from 'react'
import './App.css';


const USERS = [
  { 
    id: 1,  name: 'Christian', age: "15 years ",  title: 'C.E.O'
  },

  {
     id: 2,  name: 'PJmiles', age: 30, title: 'Senior Software Engineer'
  },

  {
     id: 3, name: 'Michael', age: 40 ,title: 'Senior Software Engineer'
   },
  { 
    id: 4, name: 'Victor', age: 50 ,title: 'Senior Software Engineer'
 },
  { 
    id: 5, name: 'Tayo', age: 30,  title: 'Senior Software Engineer'
  },
  {
     id: 6, name: 'Mark', age: 68 , title: 'Senior Software Engineer'
  },
  {
    id: 7, name: 'Mark', age: 68 , title: 'Senior Software Engineer'
 }, 
 
 {
  id: 8, name: 'Mark', age: 68 , title: 'Senior Software Engineer'
},

{
  id: 9, name: 'Mark', age: 68 , title: 'Senior Software Engineer'
}, 

{
     id: 10, name: 'Mark', age: 68 , title: 'Senior Software Engineer'
  },
  
{
    id: 11, name: 'Mark', age: 68 , title: 'Senior Software Engineer'
 }, 
 
 {
  id: 12, name: 'Mark', age: 68 , title: 'Senior Software Engineer'
},
 
  {
     id: 13, name: 'Tom Riddle', age: 28 ,title: 'Senior Software Engineer'
  },
  { 
    id: 14, name: 'Kenny', age: 23, title: 'Senior Software Engineer'
  },

  { 
    id: 15, name: 'Kenny', age: 23, title: 'Senior Software Engineer'
  },

  { 
    id: 16, name: 'Kenny', age: 23, title: 'Senior Software Engineer'
  },

  { 
    id: 17, name: 'Kenny', age: 23, title: 'Senior Software Engineer'
  },

  { 
    id: 18, name: 'Kenny', age: 23, title: 'Senior Software Engineer'
  },

  { 
    id: 19, name: 'Kenny', age: 23, title: 'Senior Software Engineer'
  },

  { 
    id: 20, name: 'Kenny', age: 23, title: 'Senior Software Engineer'
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

      <div className = "header">
        <h1>Software Engineer Overview</h1>
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search"
      />
        
        
         </div>
    

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} year old</span>
              <span className="user-age">{user.title}</span>
            
          
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}


export default Map;
