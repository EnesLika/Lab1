import React from 'react';
import { Grid, GridColumn, List } from 'semantic-ui-react';
import { News } from '../../../App/layout/models/news';
import NewsList from './NewsList';
import NewsDetails from './Details/NewsDetails';
import NewsForm from './Form/NewsForm';

interface Props {
    newss: News[];
    selectedNews: News | undefined;
    selectNews: (newsId: string) => void;
    cancelSelectNews: () =>  void;
}

export default function NewsDashboard({newss, selectedNews, selectNews, cancelSelectNews}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <NewsList newss={newss} selectNews={selectNews}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedNews &&
                <NewsDetails news={selectedNews} cancelSelectNews={cancelSelectNews} /*selectNews={selectNews}*/ selectedNews={undefined} selectNews={function (newsId: string): void {
                    throw new Error('Function not implemented.');
                } } /*selectNews={selectNews}*//>}
                <NewsForm/>
            </Grid.Column>
        </Grid>
    )
}