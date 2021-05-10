import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import AnonymousMenu from './Menus/AnonymousMenu';
import UserMenu from './Menus/UserMenu';


const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1
	},
	staticToolbar: {
		marginBottom: theme.spacing(2)
	}
}));


const AppToolbar = () => {
	const classes = useStyles();
	const user = useSelector(state => state.users.user);

	return (
		<AppBar className={classes.staticToolbar} position="static" maxWidth="xl">
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					<Button component={Link} to="/" color="inherit">Service <DirectionsBikeIcon /></Button>
				</Typography>
				{user ? <UserMenu/> : <AnonymousMenu/>}
			</Toolbar>
		</AppBar>
	);
};

export default AppToolbar;