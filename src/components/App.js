// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/step1" component={Step1} />
        <Route path="/step2" component={Step2} />
        {/* Add routes for Preview and Profile pages */}
      </Switch>
    </Router>
  );
}

export default App;
