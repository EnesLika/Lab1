import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { User } from '../../../../App/layout/models/user';


interface Props {
    user: User
    cancelSelectUser: () => void;
    openForm: (userId: string) => void;
}


export default function UserDetails({ user, cancelSelectUser, openForm /*selectUser*/ }: Props) {


    /*function selectUser(userId: number): void {
        throw new Error('Function not implemented.');
    }

    function deleteUser(userId: number): void {
        throw new Error('Function not implemented.');
    }*/

    return (
        /*
        userId: number;
        userName: string;
        userEmail: string;
        userPassword: string;
        FirstName: string;
        LastName: string;
        Birthday: string;
        */

        <Card fluid>
            <Image src={`/assets/${user.userName}.jpg`} />
            <Card.Content>
                <Card.Header>{user.Birthday}</Card.Header>
                <Card.Description>
                    {user.FirstName}
                    {user.LastName}
                    {user.userEmail}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(user.userId)} basic color="green" content="Edit" />
                    <Button onClick={cancelSelectUser} basic color="red" content="Cancel" />
                </Button.Group>
            </Card.Content>
        </Card>

    )
}