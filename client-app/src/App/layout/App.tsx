import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { News } from './models/news';
import NavBar from './navbar';
import NewsDashboard from '../../Features/News/Dashboard/NewsDashboard';


function App() {
  const [newss, setNewss] = useState<News[]>([]);
  const [selectedNews, setSelectedNews] = useState<News | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);


  useEffect(() => {
    axios.get<News[]>('http://localhost:5000/api/news').then(response => {
      setNewss(response.data);
    })
  }, [])

  function handleSelectNews(newsId: number) {
    setSelectedNews(newss.find(x => x.newsId == newsId));
  }

  function handleCancelSelectedNews() {
    setSelectedNews(undefined);
  }

  function handleFormOpen(newsId?: number) {
    newsId ? handleSelectNews(newsId) : handleCancelSelectedNews();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditNews(news: News){
    news.newsId 
    ? setNewss([...newss.filter(x => x.newsId !== news.newsId), news])
    : setNewss([...newss, news]);
    setEditMode(false);
    setSelectedNews(news);
  }


  return (
    <Fragment>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <NewsDashboard
          newss={newss}
          selectedNews={selectedNews}
          selectNews={handleSelectNews}
          cancelSelectNews={handleCancelSelectedNews}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditNews}
        />
      </Container>
    </Fragment>
  );
}

export default App;

