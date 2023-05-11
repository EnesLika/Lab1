import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../../../App/stores/store';
import { observer } from 'mobx-react-lite';
//import { maxNewsId, nextNewsId } from '../../../..';


export default observer(function NewsForm(){

    const {newsStore} = useStore();
    const {selectedNews, selectedNewsce, closeForm, createNews, updateNews, loading } = newsStore;

    const initialStatece = selectedNewsce ?? {
        newsHeadline: '',
        newsImage: '',
        newsUploadTime: '',
        newsDescription: '',
    }
    const initialState = selectedNews ?? {
        newsId: 0,
        newsHeadline: '',
        newsImage: '',
        newsUploadTime: '',
        newsDescription: ''
    }

    const [news, setNews] = useState(initialState);
    const [newsce, setNewsce] = useState(initialStatece);

    function handleSubmit() {
        news.newsId ? updateNews(news) : createNews(newsce);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setNews({...news, [name]:value })
        setNewsce({...newsce, [name]:value })

    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Headline' value={news.newsHeadline} name='newsHeadline' onChange={handleInputChange} />
                <Form.Input placeholder='Image' value={news.newsImage} name='newsImage' onChange={handleInputChange} />
                <Form.Input type='date' placeholder='Time of creation' value={news.newsUploadTime} name='newsUploadTime' onChange={handleInputChange} />
                <Form.Input placeholder='Description' value={news.newsDescription} name='newsDescription' onChange={handleInputChange} />

                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='submit' content='Cancel' />
            </Form>
        </Segment>
    )
})