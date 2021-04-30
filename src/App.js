import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import  apiTest  from './apiTest'

import { MultiStepForm } from './components/MultiStepForm'
import { Opening } from './Opening';

function App() {
  return (
  <Router>
  <Switch>
      
      <Route exact path="/" component={Opening} />
      <Route exact path="/api" component={apiTest} />
      <Route path="/details" component={MultiStepForm} />
  </Switch>
</Router>
  )
}

export default App;
/** return (
    <div className="App">
      <Opening />
     <MultiStepForm />
    </div>
  ); */