import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { Admin } from '../../../../App/layout/models/admin';


interface Props {
    admin: Admin
    cancelSelectAdmin: () => void;
    openForm: (adminId: string) => void;
}


export default function AdminDetails({ admin, cancelSelectAdmin, openForm /*selectAdmin*/ }: Props) {


    /*function selectAdmin(adminId: number): void {
        throw new Error('Function not implemented.');
    }

    function deleteAdmin(adminId: number): void {
        throw new Error('Function not implemented.');
    }*/

    return (

        <Card fluid>
            <Card.Content>
                <Card.Header>{admin.adminName}</Card.Header>
                <Card.Meta>
                    <span>
                        {admin.adminId}
                    </span>
                </Card.Meta>
                <Card.Description>
                    {admin.adminEmail}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(admin.adminId)} basic color="green" content="Edit" />
                    <Button onClick={cancelSelectAdmin} basic color="red" content="Cancel" />
                </Button.Group>
            </Card.Content>
        </Card>

    )
}