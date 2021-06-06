import React from 'react';
import { Container } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppToolbar from './components/UI/Toolbar/AppToolbar';
import Register from './container/Register/Register';
import Incident from './container/Incident/Incident';
import NewIncidentForm from './components/NewIncidentForm/NewIncidentForm';
import Staff from './container/Staff/Staff';
import Main from './container/Main/Main';
import NewStaffForm from './components/NewStaffForm/NewStaffForm';
import EditStaffForm from './components/EditStaffForm/EditStaffForm';
import EditIncidentForm from './components/EditIncidentForm/EditIncidentForm';

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
            <ProtectedRoute
              isAllowed={user}
              redirectTo='/'
              path='/all-incidents'
              exact
              component={Incident}
            />
            <ProtectedRoute
              isAllowed={user}
              redirectTo='/'
              path='/staff/new'
              exact
              component={NewStaffForm}
            />
            <ProtectedRoute
              isAllowed={!user}
              redirectTo='/'
              path='/register'
              exact
              component={Register}
            />
            <ProtectedRoute
              isAllowed={user}
              redirectTo='/'
              path='/staff'
              exact
              component={Staff}
            />
            <ProtectedRoute
              isAllowed={user}
              redirectTo='/'
              path='/staff/:id'
              exact
              component={EditStaffForm}
            />
            <ProtectedRoute
              isAllowed={user}
              redirectTo='/'
              path='/incident/:id'
              exact
              component={EditIncidentForm}
            />
            <Route path='/new-incident' exact component={NewIncidentForm} />
          </Switch>
        </Container>
      </main>
    </>
  );
}

export default App;
