import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/Scroll/ScrollToTop';

import Homepage from './components/Homepage/Homepage';
import DogInfo from './components/DogInfo/DogInfo';
import OrgPage from './components/Organisations/OrgPage';
import Chat from './components/Chat/Chat';
import DogGif from './components/DogGif/DogGif';


function App() {
  return (
      <Router>
          <ScrollToTop>
              <div className='container'>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/dogs/:dogId" component={DogInfo} />
                <Route exact path="/org" component={OrgPage} />
                <Route exact path="/chat" component={Chat} />
                <Route exact path="/gifs" component={DogGif} />
              </div>
          </ScrollToTop>
      </Router>
  );
}

export default App;
