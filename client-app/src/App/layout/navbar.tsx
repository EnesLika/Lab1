import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';



export default function NavBar() {

    const {newsStore} = useStore();

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
                    <Button onClick={() => newsStore.openForm()} positive content='Create News' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}