import React from 'react';
import { News } from '../../../App/layout/models/news';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import NewsDetails from './Details/NewsDetails';


interface Props {
    newss: News[];
    selectNews: (newsId: number) => void;
    deleteNews: (newsId: number) => void;
}

export default function NewsList({ newss, selectNews, deleteNews }: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {newss.map(news => (
                    <Item key={news.newsId}>
                        <Item.Content>
                            <Item.Header as='a'>{news.newsHeadline}</Item.Header>
                            <Item.Meta>ID = {news.newsId}</Item.Meta>
                            <Item.Description>
                                <div>{news.newsDescription}</div>
                                <div>{news.newsImage}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectNews(news.newsId)} floated='right' content='View' color='blue' />
                                <Button onClick={() => deleteNews(news.newsId)} floated='right' content='Delete' color='red' />
                                <Label basic content={news.newsUploadTime} />
                            </Item.Extra>


                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )


}
