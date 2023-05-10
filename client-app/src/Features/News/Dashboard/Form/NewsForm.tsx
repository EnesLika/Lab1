import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { News } from '../../../../App/layout/models/news';
//import { maxNewsId, nextNewsId } from '../../../..';


interface Props {
    news: News | undefined;
    closeForm: () => void;
    createOrEdit: (news: News) => void;
    submitting: boolean;
}

export default function NewsForm({ news: selectedNews, closeForm,
     createOrEdit, submitting }: Props) {
    

    const initialState = selectedNews ?? {
        newsId: 10, /*Somehow get max value from newsId, maybe sqlquery*/
        newsHeadline: '',
        newsImage: '',
        newsUploadTime: '',
        newsDescription: ''
    }

    const [news, setNews] = useState(initialState);

    function handleSubmit() {
        createOrEdit(news);
    }


    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setNews({ ...news, [name]: value })
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Headline' value={news.newsHeadline} name='newsHeadline' onChange={handleInputChange} />
                <Form.Input placeholder='Image' value={news.newsImage} name='newsImage' onChange={handleInputChange} />
                <Form.Input type='date' placeholder='Time of creation' value={news.newsUploadTime} name='newsUploadTime' onChange={handleInputChange} />
                <Form.Input placeholder='Description' value={news.newsDescription} name='newsDescription' onChange={handleInputChange} />

                <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='submit' content='Cancel' />
            </Form>
        </Segment>
    )
}
