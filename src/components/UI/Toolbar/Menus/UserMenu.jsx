import React from 'react';
import {Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../../../../store/actions/usersActions';

const UserMenu = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.users.user);

	const logoutHandler = () => {
		dispatch(logoutUser());
	};

	return (
		<>
			<Typography>Hello {user.displayName}! You can</Typography>
			<Button component={Link} to="/new-product" color="secondary">Add new item</Button>
			<Button color="secondary" onClick={logoutHandler}>Log out</Button>
		</>
	);
};

export default UserMenu;