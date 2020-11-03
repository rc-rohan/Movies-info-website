import React from "react";
import Header from "./Components/Header";
const App = () => {
    return(
        <div className='app'>
            <Header/>
            {/* 1. Header navgationa menu either hamburger menu or navbar */}
            {/* 2. Trending mvoies sliders showng buttons and link to visit the movie */}
            {/* 3.  MovieList Rows*/}
            {/* 4. YouTube Trailers:In theaters trailers of the movie list */}
            <header>
                <div>
                    <small>Select Products: </small>
                    <div>
                        {/* Prouct selectd Selector */}
                    </div>
                </div>
            </header>
        </div>
    )
};
export default App;
