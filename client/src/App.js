import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/Homepage';
import Inventory from './components/pages/Inventory';
import Loginpage from './components/pages/Loginpage'
import Dashboard from './components/pages/Dashboard'
import AddUser from './components/pages/AddUser';
import Alert from "./components/layout/ui/Alert"
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
//Redux
import { Provider } from 'react-redux';
import store from './store';


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
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/adduser" component={AddUser} />
          <section>

            {/* ALL THE ADMIN ROUTES ARE BELOW  */}
            <Route exact path="/login" component={Loginpage} />




          </section>




        </Fragment>
      </Router>
    </Provider>
  )
}







export default App;
