import React from 'react';
import { Container } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppToolbar from './components/UI/Toolbar/AppToolbar';
import Login from './container/Login/Login';
import Register from './container/Register/Register';
import Incident from './container/Incident/Incident';
import NewIncidentForm from './components/NewIncidentForm/NewIncidentForm';
import Staff from './container/Staff/Staff';
import Main from './container/Main/Main';

const ProtectedRoute = ({ isAllowed, redirectTo, ...props }) => {
  return isAllowed ? <Route {...props} /> : <Redirect to={redirectTo} />;
};

function App() {
  const user = useSelector((state) => state.users.user);

  return (
    <>
      <AppToolbar />
      <main>
        <Container maxWidth='xl'>
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/all-incidents' exact component={Incident} />
            {/* <ProtectedRoute
              isAllowed={!user}
              redirectTo='/'
              path='/login'
              exact
              component={Login}
            /> */}
            <ProtectedRoute
              isAllowed={!user}
              redirectTo='/'
              path='/register'
              exact
              component={Register}
            />
            <ProtectedRoute
              isAllowed={!user}
              redirectTo='/'
              path='/staff'
              exact
              component={Staff}
            />
            <Route path='/new-incident' exact component={NewIncidentForm} />
          </Switch>
        </Container>
      </main>
    </>
  );
}

export default App;
