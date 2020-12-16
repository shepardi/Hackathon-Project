import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Nav, Button, Navbar, NavbarBrand } from 'react-bootstrap';
import './NavigationBar.css'

function NavigationBar(props) {
	return (
		<Navbar className='nav' collapseOnSelect variant='light' expand='md'>
			{/* Logo */}
			<Link to='/'>
				<Navbar.Brand>
					<h3 className='logo'>Product Name</h3>
				</Navbar.Brand>
			</Link>

			{/* Search & Signup with Hamburger Menu Toggle */}
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<input type='text' placeholder='Search' className='searchBox' />
				<Nav>
					<Link to='/signup' className='signupButton'>
						<button className='btn-sm btn signupButton'>SignUp</button>
					</Link>
=======
import { Nav, Button, Navbar } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import './NavigationBar.css';

function NavigationBar({ loggedIn, searchValue, setSearchValue, setFoundUser }) {
	const finduser = `https://backend-social-2021.herokuapp.com/finduser/`;

	const handleChange = (event) => {
		setSearchValue(event.target.value);
		console.log('changing')
		fetch(finduser + event.target.value).then((res)=>res.json()).then((res)=>{
			console.log(res);
			if(res.username){
				setFoundUser(res)
				
			}else if(res === 'User not found'){

			}
		}).catch((error)=>{
			console.log(error)
		})
		
	};

	return (
		<Navbar className='nav' collapseOnSelect variant='light' expand='md'>
			<Link to='/'>
				<Navbar.Brand>
					<h4 className='logo'>Product Name</h4>
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<input
					type='text'
					placeholder='Search'
					className='searchBox'
					value={searchValue || ' '}
					onChange={handleChange}
				/>
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
>>>>>>> 40a615adc81c99263be21aba2a6964cd2d1568d8
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavigationBar;
