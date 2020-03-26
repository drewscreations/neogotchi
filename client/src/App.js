import React from 'react';
import NavBar from './components/NavBar';
import { useAuth0 } from './react-auth0-spa';
import { Router, Route, Switch } from 'react-router-dom';
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


function App() {

  return (
    <div className="App">
      <div>
          {/* Private routes are protected for for logged in user only! */}
          <Router history={history}>
            <header>
              <NavBar/>
            </header>
            <Switch>
              <Route path='/' exact component={Login}/>
              <PrivateRoute path='/profile' exact component={Profile} />
              <PrivateRoute path='/neogotchi/world' exact component={World}/>
              <PrivateRoute path='/neogotchi/home' exact component={Home}/>
              <PrivateRoute path='/neogotchi/hatchery' exact component={Hatchery}/>
              <PrivateRoute path='/neogotchi/market' exact component={Market}/>
              <PrivateRoute path='/neogotchi/generalstore' exact component={GeneralStore}/>
              <PrivateRoute path='/neogotchi/wildarea' exact component={WildArea}/>
            </Switch>
          </Router>
      </div>
    </div>
  );
}

export default App;
