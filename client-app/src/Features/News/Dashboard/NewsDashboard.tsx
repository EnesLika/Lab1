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
    deleteNews: (newsId: number) => void;
    submitting: boolean;
}

export default function NewsDashboard({ newss, selectedNews,
    selectNews, cancelSelectNews, editMode, openForm, closeForm,
     createOrEdit, deleteNews, submitting }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <NewsList newss={newss} 
                selectNews={selectNews} 
                deleteNews={deleteNews}

                />
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
                    <NewsForm 
                        closeForm={closeForm} 
                        news={selectedNews} 
                        createOrEdit={createOrEdit}
                        submitting={submitting}
                    />}
            </Grid.Column>
        </Grid>
    )
}