import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Detail from './components/Detail';

const App: FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
