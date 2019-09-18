import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Org from './components/Organisations/Org';

function App() {
  return (
      <Router>
          <div className='container'>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/org" component={Org} />
          </div>
      </Router>
  );
}

export default App;
