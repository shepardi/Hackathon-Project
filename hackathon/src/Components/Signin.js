import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './SignupAndSignin.css';

const signinUrl = `https://backend-social-2021.herokuapp.com/login`;
function Signin({ setUsername, setLoggedIn }) {
	const [info, setInfo] = useState({
		username: '',
		password: '',
	});
	const [wrongInput, setWrongInput] = useState(false);
	const handleSubmit = (event) => {
		event.preventDefault();
		fetch(signinUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(info),
		})
			.then((res) => res.json())
			.then((res) => {
				localStorage.setItem('token', res.token);
				localStorage.setItem('user', res.user.name);
				localStorage.setItem('userId', res.user.id);
				return res;
			})
			.then((res) => {
				if (res.token) {
					setLoggedIn(true);
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
		let targetName = event.target.name;
		let value = event.target.value;
		if (targetName === 'username') {
			setInfo({ username: value, password: info.password });
		} else if (targetName === 'password') {
			setInfo({ password: value, email: info.email });
		}
	};
	return (
		<Form onSubmit={handleSubmit} className='form'>
			<h4 className='formTitle'>Sign In</h4>
			{wrongInput && <p>Email and Password do not match</p>}
			<input
				className='control'
				type='text'
				name='username'
				value={info.email || ''}
				placeholder='User Name'
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
				Don't have an account? <Link to='/signin'>Sign in</Link>
			</p>
		</Form>
	);
}

export default Signin;
