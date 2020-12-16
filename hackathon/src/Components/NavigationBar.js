import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button, Navbar } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import './NavigationBar.css';

function NavigationBar({ loggedIn }) {
	return (
		<Navbar className='nav' collapseOnSelect variant='light' expand='md'>
			<Link to='/'>
				<Navbar.Brand>
					<h4 className='logo'>Product Name</h4>
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<input type='text' placeholder='Search' className='searchBox' />
				<Nav>
					{loggedIn ? (
						<Link to='/' className='signupButton'>
							Add Board
						</Link>
					) : (
						<Link to='/signup' className='signupButton'>
							SignUp
						</Link>
					)}
				</Nav>
				<Nav>
					<FaUserAlt className='userIcon' />
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavigationBar;
