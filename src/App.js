import React from 'react';
import Menu from "./components/Menu/Menu";
import { BrowserRouter as Router} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Menu/>
    </Router>
  )
};

export default App;