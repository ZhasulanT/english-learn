import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import { About } from './pages/About';
import { Home } from './pages/Home';
import StartTests from './pages/StartTests';

function App() {
  return (
    <>
    <BrowserRouter>
    
      <Navbar />
    <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/about'} component={About} />
        <Route path={'/startTestsEasy'} render={ () => <StartTests live={1} /> }  />
        <Route path={'/startTestsHard'} render={ () => <StartTests live={0} /> }  />
      </Switch> 
     
        
    </BrowserRouter>
    </>
  );
}

export default App;
