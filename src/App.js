import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Page404 from './components/page404/Page404';
import Jeopardy from './components/jeopardy/Jeopardy';
import Navigation from './components/navigation/Navigation';
//Import the Route component
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
    
    <Switch>
      <Route exact path="/" render={(props) => <Welcome {...props} name="Nita" />} />
      <Route path="/welcome/:name" component={Welcome} />
      <Route path="/clock" component={Clock} /> 
      <Route path="/contact" component={Contact} />
      <Route path="/jeopardy" component={Jeopardy}/>
      <Route component={Page404} />
    </Switch>
      <Navigation />
    </div>

  );
}

export default App;
