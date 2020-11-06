import React from "react";

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import "./App.css";
import Favourites from "./Pages/Favourites";
import Home from "./Pages/Home";
import Detials from "./Pages/Detials";
import Search from "./Pages/Search";
import PageNotFound from "./Pages/PageNotFound";


const App = () => {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favourites" component={Favourites} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/details" component={Detials} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
