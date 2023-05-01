import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';


interface Props {
    openForm: () => void;
}

export default function NavBar({ openForm }: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '20px' }} />
                    News
                </Menu.Item>
                <Menu.Item name='News' />
                <Menu.Item name='Users' />
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create News' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}