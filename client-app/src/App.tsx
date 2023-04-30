import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    axios.get('http;//localhost:5000/api/admins').then(response => {
      console.log(response);
      setAdmins(response.data);
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {admins.map((admin: any) => (
            <li key={admin.id}>
              {admin.title}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
