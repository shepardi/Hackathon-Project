import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import FoundUser from './Components/FoundUser';
import SnakeGame from './Components/SnakeGame/SnakeGame.js';

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('username') ? true : false
	);
	const [username, setUsername] = useState(localStorage.getItem('username'));
	const [searchValue, setSearchValue] = useState('')
	const [foundUser, setFoundUser] = useState({})
	return (
		<div className='App'>
			<NavigationBar
				loggedIn={loggedIn}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				setFoundUser={setFoundUser}
			/>
			<FoundUser searchValue={searchValue} setSearchValue={setSearchValue} foundUser={foundUser} />
			<Route
				path='/'
				exact
				render={() => {
					return <Home />;
				}}
			/>
			<Route
				path='/signup'
				render={() => {
					return <Signup setLoggedIn={setLoggedIn} setUsername={setUsername} />;
				}}
			/>
			<Route
				path='/signin'
				render={() => {
					return <Signin setLoggedIn={setLoggedIn} setUsername={setUsername} />;
				}}
			/>
			<Route
				path='/play'
				render={() => {
					return <SnakeGame />;
				}}
			/>
		</div>
	);
}

export default App;
