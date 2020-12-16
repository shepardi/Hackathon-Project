import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignupAndSignin.css';

const signinUrl = `https://backend-social-2021.herokuapp.com/login`;
function Signin({ setUsername, setLoggedIn }) {
	const [info, setInfo] = useState({
		name: '',
		password: '',
	});
	const [wrongInput, setWrongInput] = useState(false);
	const data = new FormData();
	data.append('username', info.name);
	data.append('password', info.password);
	const handleSubmit = (event) => {
		event.preventDefault();
		fetch(signinUrl, {
			method: 'POST',
			body: data,
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.username) {
					setLoggedIn(true);
					setUsername(res.username);
					localStorage.setItem('username', res.username);
					window.location.replace('/');
				}
			})
			.catch((error) => {
				if (error) {
					setLoggedIn(false);
					setWrongInput(true);
				}
			});
	};
	const handleChange = (event) => {
		event.preventDefault();
		let targetName = event.target.name;
		let value = event.target.value;
		if (targetName === 'name') {
			setInfo({ name: value, password: info.password });
		} else if (targetName === 'password') {
			setInfo({ password: value, name: info.name });
		}
	};
	return (
		<Form onSubmit={handleSubmit} className='form'>
			<h4 className='formTitle'>Sign In</h4>
			{wrongInput && <p>Email and Password do not match</p>}
			<input
				className='control'
				type='text'
				name='name'
				value={info.name || ''}
				placeholder='Name'
				onChange={handleChange}
			/>
			<input
				className='control'
				type='password'
				name='password'
				value={info.password || ''}
				placeholder='Password'
				onChange={handleChange}
			/>
			<button type='submit' className='button'>
				Submit
			</button>
			<p className='bottomText'>
				Don't have an account? <Link to='/signup'>Sign Up</Link>
			</p>
		</Form>
	);
}

export default Signin;
