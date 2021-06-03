import Modal from '@material-ui/core/Modal';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
	const top = 40
	const left = 50

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 600,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	text: {
		textAlign: 'center'
	}
}));

const SimpleModal = () => {
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(true);

	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<h2 className={classes.text} id="simple-modal-title">Service for the registration of cases of theft of bicycles</h2>
			<p className={classes.text} id="simple-modal-description">
				On this site you can register bicycle theft incidents!
			</p>
			<button onClick={handleClose}>I got it</button>
		</div>
	);

	return (
		<div>
			<Modal
				open={open}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>
		</div>
	);
}

export default SimpleModal;