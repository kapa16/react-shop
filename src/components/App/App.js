import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "../Header/Header";
import Carousel from "../Carousel/Carousel";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Header/>
        <Carousel/>
      </ErrorBoundary>
    </Router>
  )
};

export default App;