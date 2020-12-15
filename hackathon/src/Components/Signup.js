import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignupAndSignin.css';
const createUrl = `https://backend-social-2021.herokuapp.com/`;
function Signup(props) {
	const [info, setInfo] = useState({
		name: '',
		username: '',
		password: '',
	});
	const [wrongInput, setWrongInput] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [valid, setValid] = useState(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		if (info.password.length >= 6 && confirmPassword.length >= 6) {
			if (info.password === confirmPassword) {
				setValid(true);
				fetch(createUrl, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(info),
				})
					.then((res) => res.json())
					.catch((error) => {
						if(error){
                            setWrongInput(true)
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
		if (id === 'email') {
			setInfo({ name: info.name, username: value, password: info.password });
		} else if (id === 'password') {
			setInfo({ name: info.name, username: info.username, password: value });
		} else if (id === 'username') {
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
					id='username'
					placeholder='User Name'
					value={info.name || ''} //because it displayed an uncontrolled error
					onChange={handleChange}
				/>
				<input
					className='control'
					type='text'
					id='email'
					placeholder='Email'
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
