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
        <Route exact path={'/english-learn'} component={Home} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/startTestsEasy'} render={ () => <StartTests live={1} /> }  />
        <Route exact path={'/startTestsHard'} render={ () => <StartTests live={0} /> }  />
      </Switch> 
     
        
    </BrowserRouter>
    </>
  );
}

export default App;
