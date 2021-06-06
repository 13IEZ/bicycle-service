import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: '0 2rem',
    cursor: 'pointer',
  },
}));

const StaffItem = ({ staff, approveHandler, deleteHandler }) => {
  const classes = useStyles();

  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        direction='row'
        justify='space-between'
        className={classes.grid}
        wrap='nowrap'
        alignItems='center'>
        <CardActionArea component={Link} to={`/staff/${staff._id}`}>
          <Grid item container justify='space-between' alignContent='center'>
            <Typography variant='h6'>{`${staff.firstName} ${staff.lastName}`}</Typography>
            <Typography variant='h6'>id: {staff._id}</Typography>
            <Typography variant='h6'>{staff.email}</Typography>
          </Grid>
        </CardActionArea>
        {!staff.approved ? (
          <Button onClick={(e) => approveHandler(staff._id)} color='primary'>
            Approve
          </Button>
        ) : (
          <Button onClick={(e) => deleteHandler(staff._id)} color='secondary'>
            Delete
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default StaffItem;
