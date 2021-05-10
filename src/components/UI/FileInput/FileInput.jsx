import React, {useRef, useState} from 'react';
import {Button, Grid, TextField} from '@material-ui/core';

const FileInput = props => {
	const inputRef = useRef();
	const [filename, setFilename] = useState('');

	const fileChangeHandler = e => {
		if (e.target.files[0]) {
			setFilename(e.target.files[0].name);
		} else {
			setFilename('');
		}
		props.onChange(e);
	};

	const activateInput = () => {
		inputRef.current.click();
	};

	return (
		<>
			<input
				type="file"
				style={{display: 'none'}}
				name={props.name}
				ref={inputRef}
				onChange={fileChangeHandler}
				required
			/>
			<Grid container direction="row" spacing={2} alignItems="center">
				<Grid item>
					<TextField
						variant="outlined"
						disabled
						fullWidth
						label={props.label}
						value={filename}
						onClick={activateInput}
					/>
				</Grid>
				<Grid item>
					<Button variant="contained" onClick={activateInput}>
						Browse
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

export default FileInput;