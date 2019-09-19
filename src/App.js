import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/Scroll/ScrollToTop';

import Homepage from './components/Homepage/Homepage';
import OrgPage from './components/Organisations/OrgPage';
import Chat from './components/Chat/Chat';

function App() {
  return (
      <Router>
          <ScrollToTop>
              <div className='container'>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/org" component={OrgPage} />
                <Route exact path="/chat" component={Chat} />
              </div>
          </ScrollToTop>
      </Router>
  );
}

export default App;
