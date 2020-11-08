import React, { useState } from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import "./App.css";
import Favourites from "./Pages/Favourites";
import Home from "./Pages/Home";
import Detials from "./Pages/Detials";
import Search from "./Pages/Search";
import PageNotFound from "./Pages/PageNotFound";
import {FavouritesContext} from './Context/context'


const App = () => {
  // theme context
  const favourites = useState([])
  return (
    <Router>
      <div className="app">
        <FavouritesContext.Provider value={favourites}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favourites" component={Favourites} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/details/:type/:id" component={Detials} />
            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </FavouritesContext.Provider>
      </div>
    </Router>
  );
};
export default App;
