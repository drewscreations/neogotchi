import React from 'react';
// import NavBar from './components/NavBar';
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
import {GameEngine} from 'react-game-engine';
import Box from './components/renderer';
import MoveBox from './systems/system'

function App() {
  const { loading } = useAuth0();

  // if (loading){
  //   return <div>Loading...</div>;
  // } <--testing do not remove!--

  return (
    <div className="App">
      <div className="App-header">
          {/* add id to paths after building and testing is complete */}
          <GameEngine
            style={{ width: 800, height: 600, backgroundColor: "blue" }}
            systems={[MoveBox]}
            entities={
              {
                house: { x: 200,  y: 200, name:'house', color:'green', renderer: <Box />},
                shop: { x: 400,  y: 300, name:'shop', color:'purple', renderer: <Box />},
                hatchery: { x: 600,  y: 100, name:'hatchery', renderer: <Box />},
                user: { x: 100,  y: 100, name:'user', renderer: <Box />},
              }}>
          </GameEngine>
        <Router>
          {/* <NavBar path='/'/>  */}
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
