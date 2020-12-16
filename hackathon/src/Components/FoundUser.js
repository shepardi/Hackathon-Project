import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { TiUserAdd } from 'react-icons/ti';
import './FoundUser.css';
function FoundUser({ searchValue, foundUser }) {
	const handleAdd = () => {};
	return (
         foundUser.username === undefined ? '' : <div className='foundUserContainer'>
			<BiSearchAlt className='search'/> <p>{foundUser.username}</p> <TiUserAdd onClick={handleAdd} className='addIcon'/>
		</div>
    
		
	);
}

export default FoundUser;
