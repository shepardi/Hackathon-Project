import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button, Navbar } from 'react-bootstrap';
import './NavigationBar.css'

function NavigationBar(props) {
    return (
			<Navbar className='nav' collapseOnSelect variant='light' expand='md'>
				<Link to='/'>
					<Navbar.Brand>
						<h3 className='logo'>Product Name</h3>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
                    <input type='text' placeholder='Search' className='searchBox'/>
					<Nav>
						<Link to='/signup' className='signupButton'>
							<button className='btn-sm btn signupButton'>SignUp</button>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
}

export default NavigationBar;