import React from 'react';
import { Grid, GridColumn, List } from 'semantic-ui-react';
import { News } from '../../../App/layout/models/news';
import NewsList from './NewsList';
import NewsDetails from './Details/NewsDetails';
import NewsForm from './Form/NewsForm';
import { useStore } from '../../../App/stores/store';
import { observer } from 'mobx-react-lite';
import { Newsce } from '../../../App/layout/models/newsce';


export default observer(function NewsDashboard() {

    const {newsStore} = useStore();
    const {selectedNews, editMode} = newsStore;
    return (
        <Grid>
            <Grid.Column width='10'>
                <NewsList 
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedNews && !editMode &&
                    <NewsDetails/>}

                {editMode &&
                    <NewsForm
                    />}
            </Grid.Column>
        </Grid>
    )
})