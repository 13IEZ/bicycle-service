import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const user = useSelector((state) => state.users.user);

  return (
    <>
      <Typography>
        Hello {`${user.firstName} ${user.lastName}`}! You can
      </Typography>
      <Button component={Link} to='/all-incidents' color='secondary'>
        See All incident
      </Button>
      <Button component={Link} to='/staff' color='secondary'>
        Check Staff
      </Button>
    </>
  );
};

export default UserMenu;
