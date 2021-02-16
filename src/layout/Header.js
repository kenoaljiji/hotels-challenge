import React, {useContext } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import HotelContext from '../context/hotel/hotelContext'; 
import { useHistory } from "react-router-dom";

const Header = () => {
    const hotelContext = useContext(HotelContext);


    const {logout, user} = hotelContext;

    const history = useHistory();

    const onLogout = () => {
        logout();
        history.push('/')
    }

    return (
        <header>
          <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect className="justify-content-between p-4">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className="d-flex">
                    <LinkContainer to='/dashboard'>
                        <Nav.Link >Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/favorites'>
                        <Nav.Link >Favorites</Nav.Link>
                    </LinkContainer>
                </div>
                <div className='d-flex ml-auto align-items-center'>
                <LinkContainer to='/'>
                    <Nav.Link href="/email">{user.username}<i className='<i class="fas fa-user"></i>'></i></Nav.Link>
                </LinkContainer>
                <div>
                    
                <div className=''>
                    <a onClick={onLogout} href='#'>
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span>Logout</span>
                </a>
                 </div>
                </div>
                
                
                </div>
            </Navbar.Collapse>
            </Container>
            </Navbar>

        </header>
        
      );
}


export default Header
