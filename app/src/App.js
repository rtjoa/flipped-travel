import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExploreView from './pages/ExploreView';
import SubmitView from './pages/SubmitView';
import Home from './pages/Home'

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route path="/" component={Home} exact/>
     <Route path="/explore" component={ExploreView}/>
     <Route path ="/submit" component={SubmitView}/>
   </Switch>
   </BrowserRouter>

  );
}

export default App;
