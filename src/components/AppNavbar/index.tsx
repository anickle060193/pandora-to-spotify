import * as React from 'react';
import * as Bootstrap from 'react-bootstrap';
import * as ReactRouterBootstrap from 'react-router-bootstrap';
import * as ReactRouter from 'react-router-dom';

import './styles.css';

const AppNavbar: React.SFC = ( props ) =>
{
    return (
        <Bootstrap.Navbar inverse={false} fluid={true} collapseOnSelect={true}>

            <Bootstrap.Navbar.Header>
                <Bootstrap.Navbar.Brand>
                    <ReactRouter.Link to="/">Pandora-to-Spotify</ReactRouter.Link>
                </Bootstrap.Navbar.Brand>
                <Bootstrap.Navbar.Toggle />
            </Bootstrap.Navbar.Header>

            <Bootstrap.Navbar.Collapse>
                <Bootstrap.Nav pullRight={true}>
                    <ReactRouterBootstrap.LinkContainer to="/">
                        <Bootstrap.NavItem>Home</Bootstrap.NavItem>
                    </ReactRouterBootstrap.LinkContainer>
                </Bootstrap.Nav>
            </Bootstrap.Navbar.Collapse>

        </Bootstrap.Navbar>
    );
};

export default AppNavbar;