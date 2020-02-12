import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/users/Homepage';
import InventoryPage from './components/pages/users/Inventory';
import Loginpage from './components/pages/admin/Loginpage'
import Dashboard from './components/pages/admin/Dashboard'
import AddUser from './components/pages/admin/AddUser';
import ViewUsers from './components/pages/admin/ViewUsers'
import AddVehicle from './components/pages/admin/AddVehicle'
import ViewVehicles from './components/pages/admin/ViewVehicles'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
//Redux
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './components/layout/admin/PrivateRoute'
import 'antd/dist/antd.css';



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
        {/*<Fragment className="App">*/}
          <Fragment>

          <section>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/inventory" component={InventoryPage} />
              {/* ALL THE ADMIN ROUTES ARE BELOW  */}
              <Route exact path="/login" component={Loginpage} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/dashboard/addusers" component={AddUser} />
              <PrivateRoute exact path="/dashboard/viewusers" component={ViewUsers} />
              <PrivateRoute exact path="/dashboard/addvehicle" component={AddVehicle} />
              <PrivateRoute exact path="/dashboard/getvehicles" component={ViewVehicles} />

            </Switch>
          </section>




        </Fragment>
      </Router>
    </Provider>
  )
}







export default App;
