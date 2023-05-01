import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { News } from '../../../../App/layout/models/news';


interface Props {
    news: News
    cancelSelectNews: () => void;
    openForm: (newsId: number) => void;
}


export default function NewsDetails({ news, cancelSelectNews, openForm /*selectNews*/ }: Props) {


    /*function selectNews(newsId: number): void {
        throw new Error('Function not implemented.');
    }

    function deleteNews(newsId: number): void {
        throw new Error('Function not implemented.');
    }*/

    return (

        <Card fluid>
            <Image src={`/assets/${news.newsImage}.jpg`} />
            <Card.Content>
                <Card.Header>{news.newsHeadline}</Card.Header>
                <Card.Meta>
                    <span>
                        {news.newsUploadTime}
                    </span>
                </Card.Meta>
                <Card.Description>
                    {news.newsDescription}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(news.newsId)} basic color="green" content="Edit" />
                    <Button onClick={cancelSelectNews} basic color="red" content="Cancel" />
                </Button.Group>
            </Card.Content>
        </Card>

    )
}