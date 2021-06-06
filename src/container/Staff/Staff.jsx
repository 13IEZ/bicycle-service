import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  approveStaff,
  deleteStaff,
  fetchStaff,
} from '../../store/actions/staffActions.js';
import StaffItem from '../../components/StaffItem/StaffItem';

const Staff = () => {
  const dispatch = useDispatch();
  const staff = useSelector((state) => state.staff.staff);
  const approveMessage = useSelector((state) => state.staff.approveMessage);
  const deleteMessage = useSelector((state) => state.staff.deleteMessage);

  useEffect(() => {
    dispatch(fetchStaff());
  }, [dispatch, approveMessage, deleteMessage]);

  const deleteHandler = (id) => {
    dispatch(deleteStaff(id));
  };

  const approveHandler = (id) => {
    dispatch(approveStaff(id));
  };

  return (
    <Grid container direction='column' justify='center'>
      <Grid container justify='space-around'>
        <Typography variant='h2'>Staff</Typography>

        <Button color='primary' component={Link} to='/staff/new'>
          Add new worker
        </Button>
      </Grid>
      {staff.map((staff) => {
        return (
          <StaffItem
            staff={staff}
            key={staff._id}
            approveHandler={approveHandler}
            deleteHandler={deleteHandler}
          />
        );
      })}
    </Grid>
  );
};

export default Staff;
