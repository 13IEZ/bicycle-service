import React from 'react';
import {Container} from '@material-ui/core';
import {Redirect, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import AppToolbar from './components/UI/Toolbar/AppToolbar';
import Login from './container/Login/Login';
import Register from './container/Register/Register';


const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
  return isAllowed ?
      <Route {...props} /> :
      <Redirect to={redirectTo}/>;
};

function App() {
  const user = useSelector(state => state.users.user);

  return (
      <>
        <AppToolbar />
        <main>
          <Container maxWidth='xl'>
            <Switch>
              <ProtectedRoute isAllowed={!user}
                              redirectTo="/"
                              path='/login'
                              exact
                              component={Login}
              />
              <ProtectedRoute isAllowed={!user}
                              redirectTo="/"
                              path='/register'
                              exact
                              component={Register}
              />
            </Switch>
          </Container>
        </main>
      </>
  );
}

export default App;
