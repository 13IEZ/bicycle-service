import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const AnonymousMenu = () => {
  return (
    <>
      <Button component={Link} to='/new-incident' color='inherit'>
        Report incident
      </Button>
      <Button component={Link} to='/' color='inherit'>
        sign in
      </Button>
      <Button component={Link} to='/register' color='inherit'>
        Sign up
      </Button>
    </>
  );
};

export default AnonymousMenu;
