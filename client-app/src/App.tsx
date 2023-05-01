import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';


function App() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    axios.get('http;//localhost:5000/api/admins').then(response => {
      console.log(response);
      setAdmins(response.data);
    })
  }, [])


  return ( 
    <div>
      <Header as='h2' icon='users' content='Admins'/>
       
        <List>
          {admins.map((admin: any) => (
            <List.Item key={admin.id}>
              {admin.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
