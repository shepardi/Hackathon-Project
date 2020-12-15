import React , {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';


function App() {
  const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
  );
  const [username, setUsername] = useState(localStorage.getItem('user'));
	return (
		<div className='App'>
			<NavigationBar />
			<Route
				path='/'
				render={() => {
					return <Home />;
				}}
			/>
			<Route
				path='/signup'
				render={() => {
					return <Signup />;
				}}
			/>
			<Route
				path='/signin'
				render={() => {
					return <Signin setLoggedIn setUsername/>;
				}}
			/>
		</div>
	);
}

export default App;
