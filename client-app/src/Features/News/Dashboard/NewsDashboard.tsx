import React from 'react';
import { Grid, GridColumn, List } from 'semantic-ui-react';
import { News } from '../../../App/layout/models/news';
import NewsList from './NewsList';
import NewsDetails from './Details/NewsDetails';
import NewsForm from './Form/NewsForm';

interface Props {
    newss: News[];
    selectedNews: News | undefined;
    selectNews: (newsId: number) => void;
    cancelSelectNews: () => void;
    editMode: boolean;
    openForm: (newsId: number) => void;
    closeForm: () => void;
    createOrEdit: (news: News) => void;

}

export default function NewsDashboard({ newss, selectedNews,
    selectNews, cancelSelectNews, editMode, openForm, closeForm, createOrEdit }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <NewsList newss={newss} selectNews={selectNews} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedNews && !editMode &&
                    <NewsDetails
                        news={selectedNews}
                        cancelSelectNews={cancelSelectNews}
                        openForm={openForm}
                    /*selectNews={selectNews}*/
                    />}

                {editMode &&
                    <NewsForm closeForm={closeForm} news={selectedNews} createOrEdit={createOrEdit}/>}
            </Grid.Column>
        </Grid>
    )
}