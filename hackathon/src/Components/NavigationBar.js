import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button, Navbar } from 'react-bootstrap';


function NavigationBar(props) {
    return (
			<Navbar className='nav' collapseOnSelect variant='light' expand='md'>
				<Link to='/'>
					<Navbar.Brand>
						<h1 className='logo'>Product Name</h1>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav>
						

						<Link to='/signup' className='button'>
							<button className='btn-sm btn button'>SignUp</button>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
}

export default NavigationBar;