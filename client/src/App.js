import React from 'react';
import NavBar from './components/NavBar';
import { useAuth0 } from './react-auth0-spa';
// import { Router } from '@reach/router';
import {Router, Route, Switch} from 'react-router-dom';
import Profile from './components/Profile';
import history from './utils/history';
import PrivateRoute from './components/PrivateRoute';

import './App.css';
import Login from './views/Login';
import World from './views/World';
import Home from './views/Home';
import Hatchery from './views/Hatchery';
import Market from './views/Market';
import GeneralStore from './views/GeneralStore';
import WildArea from './views/WildArea';
import hatchery from './views/Hatchery';


function App() {
  const { loading } = useAuth0();

  // if (loading){
  //   return <div>Loading...</div>;
  // } <--testing do not remove!--

  return (
    <div className="App">
      <div className="App-header">
          {/* add id to paths after building and testing is complete */}
          <Router history={history}>
            <header>
              <NavBar/>
            </header>
            <Switch>
              <Route path='/' exact />
              <PrivateRoute path='/profile' component={Profile} />
              <PrivateRoute path='/neogotchi/world' component={World}/>
              <PrivateRoute path='/neogotchi/home' component={Home}/>
              <PrivateRoute path='/neogotchi/hatchery' component={Hatchery}/>
              <PrivateRoute path='/neogotchi/market' component={Market}/>
              <PrivateRoute path='/neogotchi/generalstore' component={GeneralStore}/>
              <PrivateRoute path='/neogotchi/wildarea' component={WildArea}/>
            </Switch>
          </Router>

        {/* <Router>
          <Login path='/neogotchi/login'/>

        </Router> */}
      </div>
    </div>
  );
}

export default App;
