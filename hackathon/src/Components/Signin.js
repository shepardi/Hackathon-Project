import React, {useState} from 'react';
import './SignupAndSignin.css';

const signinUrl = `https://backend-social-2021.herokuapp.com/login`;
function Signin({setUsername, setLoggedIn}) {
    const [info, setInfo] = useState({
			name: '',
			email: '',
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
							localStorage.setItem('user', res.name);
							localStorage.setItem('userId', res.id);
							setUsername(res.name);
							if (res.token) {
								setLoggedIn(true);
								window.location.replace('/');
							}
						})
						.catch((error) => {
							if (error) {
								setWrongInput(true);
								setLoggedIn(false);
							}
						});
				}
			} else {
				setValid(false);
			}
		};
		const handleCancel = (event) => {
			event.preventDefault();
			setInfo({
				name: '',
				email: '',
				password: '',
			});
			setConfirmPassword('');
			setValid(false);
		};

		const handleChange = (event) => {
			let id = event.target.id;
			let value = event.target.value;
			if (id === 'email') {
				setInfo({ name: info.name, email: value, password: info.password });
			} else if (id === 'password') {
				setInfo({ name: info.name, email: info.email, password: value });
			} else if (id === 'username') {
				setInfo({ name: value, email: info.email, password: info.password });
			} else if (id === 'confirm') {
				setConfirmPassword(value);
			}
		};
    return (
        <div>
            
        </div>
    );
}

export default Signin;