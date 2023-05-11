import React, { Fragment, useEffect } from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import NavBar from './navbar';
import NewsDashboard from '../../Features/News/Dashboard/NewsDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
//import { maxNewsId, nextNewsId } from '../..';

function App() {
  const {newsStore} = useStore();



  useEffect(() => {
    newsStore.loadNewss();
  }, [newsStore])




  if (newsStore.loadingInitial) return <LoadingComponent content='Loading app'/>

  return (
    <Fragment>
      <NavBar/>
      <Container style={{ marginTop: '7em' }}>

        <NewsDashboard
        />
      </Container>
    </Fragment>
  );
}

export default observer(App);



