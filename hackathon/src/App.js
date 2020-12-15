import React , {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import SnakeGame from './Components/SnakeGame/SnakeGame.js';


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
        exact
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
