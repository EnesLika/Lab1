import React, { SyntheticEvent, useState } from 'react';
import { News } from '../../../App/layout/models/news';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import NewsDetails from './Details/NewsDetails';
import { useStore } from '../../../App/stores/store';
import { observer } from 'mobx-react-lite';


export default observer(function NewsList() {

    const {newsStore} = useStore();
    const {deleteNews, newss, loading} = newsStore;

    const [target, setTarget] = useState('');


    function handleNewsDelete(e: SyntheticEvent<HTMLButtonElement>, newsId: number){
        setTarget(e.currentTarget.name);
        deleteNews(newsId);
    }


    return (
        <Segment>
            <Item.Group divided>
                {newss.map(news => (
                    <Item key={news.newsId}>
                        <Item.Content>
                            <Item.Header as='n'>{news.newsHeadline}</Item.Header>
                            <Item.Meta>ID = {news.newsId}</Item.Meta>
                            <Item.Description>
                                <div>{news.newsDescription}</div>
                                <div>{news.newsImage}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => newsStore.selectNews(news.newsId)} floated='right' content='View' color='blue' />
                                <Button 
                                    name={news.newsId}
                                    loading={loading /*&& target === news.newsId*/} 
                                    onClick={(e) => handleNewsDelete(e, news.newsId)} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red' 
                                    />
                                <Label basic content={news.newsUploadTime} />
                            </Item.Extra>


                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )


})
