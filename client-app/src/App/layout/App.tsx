import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { News } from './models/news';
import NavBar from './navbar';
import NewsDashboard from '../../Features/News/Dashboard/NewsDashboard';


function App() {
  const [newss, setAdmins] = useState<News[]>([]);
  const [selectedNews, setSelectedNews] = useState<News | undefined>(undefined);

  useEffect(() => {
    axios.get<News[]>('http://localhost:5000/api/news').then(response => {
      console.log(response);
      setAdmins(response.data);
    })
  }, [])

  function handleSelectedNews(newsId: string){
    setSelectedNews(newss.find(x => x.id == newsId));
  }

  function handleCancelSelectedNews(){
    setSelectedNews(undefined);
  }

  return ( 
    <Fragment>
       <NavBar/>
       <Container style={{marginTop: '7em'}}>
          <NewsDashboard
            newss={newss}
            selectedNews={selectedNews}
            selectNews={handleSelectedNews}
            cancelSelectNews={handleCancelSelectedNews}
          />
        </Container>
    </Fragment>
  );
}

export default App;
