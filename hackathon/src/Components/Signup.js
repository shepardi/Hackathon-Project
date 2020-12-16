import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignupAndSignin.css';
const createUrl = `https://backend-social-2021.herokuapp.com/create`;
function Signup({ setLoggedIn, setUsername }) {
	const [info, setInfo] = useState({
		name: '',
		username: '',
		password: '',
	});
	const [wrongInput, setWrongInput] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [valid, setValid] = useState(true);

	const data = new FormData();
	data.append('name', info.name);
	data.append('username', info.username);
	data.append('password', info.password);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		if (info.password.length >= 6 && confirmPassword.length >= 6) {
			if (info.password === confirmPassword) {
				setValid(true);
				fetch(createUrl, {
					method: 'POST',
					body: data,
				})
					.then((res) => res.json())
					.then((res) => {
						localStorage.setItem('username', res.username);
						setUsername(res.username);
						if (res.username) {
							setLoggedIn(true);
							window.location.replace('/');
						}
					})
					.catch((error) => {
						if (error) {
							console.log(error);
							setLoggedIn(false);
						}
					});
			}
		} else {
			setValid(false);
		}
	};

	const handleChange = (event) => {
		let id = event.target.id;
		let value = event.target.value;
		if (id === 'username') {
			setInfo({ name: info.name, username: value, password: info.password });
		} else if (id === 'password') {
			setInfo({ name: info.name, username: info.username, password: value });
		} else if (id === 'name') {
			setInfo({
				name: value,
				username: info.username,
				password: info.password,
			});
		} else if (id === 'confirm') {
			setConfirmPassword(value);
		}
	};

	return (
		<Container>
			{!valid && submitted && <p>Your password is incorrect!</p>}
			<Form onSubmit={handleSubmit} className='form'>
				<h4 className='formTitle'>Sign Up</h4>
				{wrongInput && <p>Email and Password do not match</p>}
				<input
					className='control'
					type='text'
					id='name'
					placeholder='Name'
					value={info.name || ''} //because it displayed an uncontrolled error
					onChange={handleChange}
				/>
				<input
					className='control'
					type='text'
					id='username'
					placeholder='User Name'
					value={info.username || ''}
					onChange={handleChange}
				/>
				<input
					className='control'
					type='password'
					id='password'
					placeholder='Password'
					value={info.password || ''}
					onChange={handleChange}
				/>
				<input
					className='control'
					type='password'
					id='confirm'
					placeholder=' Re-type Password'
					value={confirmPassword || ''}
					onChange={handleChange}
				/>
				<button type='submit' className='button'>
					{' '}
					Create Account
				</button>
				<p className='bottomText'>
					Already have an account? <Link to='/signin'>Sign in</Link>
				</p>
			</Form>
		</Container>
	);
}

export default Signup;
