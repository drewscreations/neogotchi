import React from 'react';
import NavBar from './components/NavBar';
import { useAuth0 } from './react-auth0-spa';
import { Router } from '@reach/router';
import './App.css';
import Login from './views/Login';
import World from './views/World';
import Home from './views/Home';
import Hatchery from './views/Hatchery';
import Market from './views/Market';
import GeneralStore from './views/GeneralStore';
import WildArea from './views/WildArea';


function App() {
  const { loading } = useAuth0();

  // if (loading){
  //   return <div>Loading...</div>;
  // } <--testing do not remove!--

  return (
    <div className="App">
      <div className="App-header">
          {/* <NavBar path='/'/> */} 
          {/* add id to paths after building and testing is complete */}
        <Router>
          <Login path='/neogotchi/login'/>
          <World path='/neogotchi/world' />
          <Home path='/neogotchi/home'/>
          <Hatchery path='/neogotchi/hatchery'/>
          <Market path='/neogotchi/market'/>
          <GeneralStore path='/neogotchi/generalstore'/>
          <WildArea path='/neogotchi/wildarea'/>
        </Router>
      </div>
    </div>
  );
}

export default App;
