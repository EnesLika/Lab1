import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

export default function NewsForm(){
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Headline'/>
                <Form.Input placeholder='Image'/>
                <Form.Input placeholder='Description'/>
                <Form.Input placeholder='Time of creation'/>

                <Button floated='right' positive type='submit' content='Submit'/>
                <Button floated='right' type='submit' content='Cancel'/>
            </Form>
        </Segment>
    )
}