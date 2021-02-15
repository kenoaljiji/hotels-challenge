import React, { Fragment, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Container, Nav, ListGroup} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import HotelContext from '../context/hotel/hotelContext'; 

const Header = () => {
    const hotelContext = useContext(HotelContext);


    const { isAuthenticated, logout, user} = hotelContext;

    const onLogout = () => {
        logout();
}


    return (
        <header>
          <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect className="justify-content-between p-4">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className="d-flex">
                    <LinkContainer to='/'>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/'>
                        <Nav.Link href="/favorite">Favorites</Nav.Link>
                    </LinkContainer>
                </div>
                <div className='d-flex ml-auto'>
                <LinkContainer to='/'>
                    <Nav.Link href="/email">usernameGmail@gmail.com<i className='<i class="fas fa-user"></i>'></i></Nav.Link>
                </LinkContainer>
                <div>
                    <a onClick={onLogout} href='#!'>
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span className='hide-sm'>Logout</span>
                    </a>
                </div>
                
                
                </div>
            </Navbar.Collapse>
            </Container>
            </Navbar>

        </header>
        
      );
}


export default Header
