import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { News } from '../../../../App/layout/models/news';

interface Props {
    news: News | undefined;
    closeForm: () => void;
    createOrEdit: (news: News) => void;
}

export default function NewsForm({ news: selectedNews, closeForm, createOrEdit }: Props) {

    const initialState = selectedNews ?? {
        newsId: '',
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
                <Form.Input placeholder='Time of creation' value={news.newsUploadTime} name='newsUploadTime' onChange={handleInputChange} />
                <Form.Input placeholder='Description' value={news.newsDescription} name='newsDescription' onChange={handleInputChange} />

                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='submit' content='Cancel' />
            </Form>
        </Segment>
    )
}