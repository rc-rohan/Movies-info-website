import React, { useState } from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import "./App.css";
import Favourites from "./Pages/Favourites";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Search from "./Pages/Search";
import PageNotFound from "./Pages/PageNotFound";
import {FavouritesContext} from './Context/context'

// todo add import for toastify whenever user click upon the page favourites icon


const App = () => {
  // todo add theme context


  const favourites = useState([])
  // todo set all favourites movie to the localStorage with all the image id and name and rating

  return (
    <Router>
      <div className="app">
        <FavouritesContext.Provider value={favourites}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favourites" component={Favourites} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/details/:type/:id" component={Details} />
            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </FavouritesContext.Provider>
      </div>
    </Router>
  );
};
export default App;
