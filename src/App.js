import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Homepage from './components/Homepage/Homepage';
import DogInfo from './components/DogInfo/DogInfo';
import OrgPage from './components/Organisations/OrgPage';
import ChatPage from './components/Chat/ChatPage';
import DogGif from './components/DogGif/DogGif';

function App() {
  return (
      <Router>
          <div className='container'>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/dogs/:dogId" component={DogInfo} />
            <Route exact path="/org" component={OrgPage} />
            <Route exact path="/chat" component={ChatPage} />
            <Route exact path="/gifs" component={DogGif} />
          </div>
      </Router>
  );
}

export default App;
