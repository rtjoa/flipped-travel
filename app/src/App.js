import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExploreView from './ExploreView';
import SubmitView from './SubmitView';
import Home from './Home'

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
