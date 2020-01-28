import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/users/Homepage';
import Inventory from './components/pages/users/Inventory';
import Loginpage from './components/pages/admin/Loginpage'
import Dashboard from './components/pages/admin/Dashboard'
import AddUser from './components/pages/admin/AddUser';
import ViewUsers from './components/pages/admin/ViewUsers'
import Alert from "./components/layout/ui/Alert"
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
//Redux
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './components/layout/admin/PrivateRoute'


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider
      store={store}>
      <Router>
        <Fragment className="App">
          <Route exact path="/" component={Homepage} />
          <Route exact path="/inventory" component={Inventory} />

          <section>
            <Switch>
              {/* ALL THE ADMIN ROUTES ARE BELOW  */}
              <Route exact path="/login" component={Loginpage} />

              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/dashboard/addusers" component={AddUser} />
              <PrivateRoute exact path="/dashboard/viewusers" component={ViewUsers} />


            </Switch>
          </section>




        </Fragment>
      </Router>
    </Provider>
  )
}







export default App;
