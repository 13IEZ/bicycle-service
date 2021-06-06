import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BG from '../../assets/img/bg-main.jpg';
import { Link as LinkReact } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/actions/usersActions';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
  },
  image: {
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    textAlign: 'center',
  },
}));

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.users.loginError);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    await dispatch(loginUser({ ...state }));
  };

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form
            className={classes.form}
            onSubmit={submitFormHandler}
            noValidate>
            {error && (
              <Alert severity='error' className={classes.alert}>
                <AlertTitle>Error</AlertTitle>
                {error.error.message}
              </Alert>
            )}
            <TextField
              variant='outlined'
              margin='normal'
              // required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              value={state.email}
              onChange={inputChangeHandler}
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              // required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              value={state.password}
              onChange={inputChangeHandler}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component={LinkReact} to='/new-incident' variant='body2'>
                  Report incident
                </Link>
              </Grid>
              <Grid item>
                <Link component={LinkReact} to='/register' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Typography className={classes.title} variant='h2'>
              Report Service
            </Typography>
            <Typography variant='h4'>
              If your bike has been stolen, just submit a report,
              <Link component={LinkReact} to='/new-incident' variant='h4'>
                click here! {''}
              </Link>
              We will do all of need to help your!
            </Typography>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Main;
