import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/users/Homepage';
import InventoryPage from './components/pages/users/Inventory';
import ViewVehicle from './components/pages/users/ViewVehicle'
import About from './components/pages/users/AboutPage'
import FinancePage from './components/pages/users/FincancePage'
import Loginpage from './components/pages/admin/Loginpage'
import Dashboard from './components/pages/admin/Dashboard'
import AddUser from './components/pages/admin/AddUser';
import ViewUsers from './components/pages/admin/ViewUsers'
import AddVehicle from './components/pages/admin/AddVehicle'
import ViewVehicles from './components/pages/admin/ViewVehicles'
import EditVehicle from './components/pages/admin/EditVehicle'
import ViewVehicleAdmin from './components/pages/admin/ViewVehicleAdmin'
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
  })

  return (
    <Provider
      store={store}>
      <Router>
        <Fragment >

          <section>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/inventory" component={InventoryPage} />
              <Route exact path="/inventory/:id" component={ViewVehicle} />
              <Route exact path="/about" component={About} />
              <Route exact path="/finance" component={FinancePage} />



              {/* ALL THE ADMIN ROUTES ARE BELOW  */}
              <Route exact path="/login" component={Loginpage} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/dashboard/addusers" component={AddUser} />
              <PrivateRoute exact path="/dashboard/viewusers" component={ViewUsers} />
              <PrivateRoute exact path="/dashboard/addvehicle" component={AddVehicle} />
              <PrivateRoute exact path="/dashboard/getvehicles" component={ViewVehicles} />
              <PrivateRoute exact path="/dashboard/getvehicles/edit/:id" component={EditVehicle} />
              <PrivateRoute exact path="/dashboard/getvehicles/view/:id" component={ViewVehicleAdmin} />



            </Switch>
          </section>




        </Fragment>
      </Router>
    </Provider>
  )
}







export default App;
