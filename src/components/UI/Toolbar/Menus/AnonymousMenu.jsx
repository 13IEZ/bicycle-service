import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const AnonymousMenu = () => {
	return (
		<>
			<Button component={Link} to="/login" color="inherit">sign in</Button>
			<Button component={Link} to="/register" color="inherit">Sign up</Button>
		</>
	);
};

export default AnonymousMenu;