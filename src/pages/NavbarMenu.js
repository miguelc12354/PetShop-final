
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import petShopLogo from'../imagens/petShopLogo.png';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
             <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand className='logo'>
            <Link to='/'>
            <img src={ petShopLogo } alt='Logo Pet Shop' />
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link  className='menu' href="#"><Link to='/' >Home</Link></Nav.Link>
            <Nav.Link  className='menu' href="#"><Link to='/banho-e-tosa' >Banhoe Tosa</Link></Nav.Link>
            <Nav.Link  className='menu' href="#"><Link to='/hotel-resort' >Hotel Resor</Link></Nav.Link>
            <Nav.Link  className='menu' href="#"><Link to='/adestramento' >Adestramento</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar