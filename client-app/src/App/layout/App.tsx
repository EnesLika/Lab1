import React, { Fragment, useEffect, useState } from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import { News } from './models/news';
import NavBar from './navbar';
import NewsDashboard from '../../Features/News/Dashboard/NewsDashboard';
import newsAgent from '../api/newsAgent';
import LoadingComponent from './LoadingComponent';
//import { maxNewsId, nextNewsId } from '../..';

function App() {
  const [newss, setNewss] = useState<News[]>([]);
  const [selectedNews, setSelectedNews] = useState<News | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);


  useEffect(() => {
    newsAgent.Newss.list().then(response => {
      let newss: News[] = [];
      response.forEach((news: News) => {
        news.newsUploadTime = news.newsUploadTime.split('T')[0];
        newss.push(news);
      })
      setNewss(response);
      setLoading(false);
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
    setSubmitting(true);
    if (news.newsId){
      newsAgent.Newss.update(news).then(() => {
        setNewss([...newss.filter(x => x.newsId !== news.newsId), news])
        setSelectedNews(news);
        setEditMode(false);
        setSubmitting(false);
      })
    } else {
      

      news.newsId = 10; /*Somehow get max value from newsId, maybe sqlquery*/
      newsAgent.Newss.create(news).then(() => {
        setNewss([...newss, news])
        setSelectedNews(news);
        setEditMode(false);
        setSubmitting(false);

        //var maxNewsId= nextNewsId;
      })
    }
  }

  function handleDeleteNews(newsId: number){
    setSubmitting(true);
    newsAgent.Newss.delete(newsId).then(() => {
      setNewss([...newss.filter(x => x.newsId !== newsId)])
      setSubmitting(false);
    })
    
  }

  if (loading) return <LoadingComponent content='Loading app'/>

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
          deleteNews={handleDeleteNews}
          submitting={submitting}
        />
      </Container>
    </Fragment>
  );
}

export default App;



