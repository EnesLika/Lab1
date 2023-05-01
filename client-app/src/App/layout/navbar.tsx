import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '20px'}}/>
                    News
                </Menu.Item>
                <Menu.Item name='News' />
                <Menu.Item>
                    <Button positive content='Create News'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}