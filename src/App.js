import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Switch } from "react-router";
import Homepage from './components/Homepage';
import ProtectedRoute from './components/ProtectedRoute';

// import Login from './features/User/Login';
// import Signup from './features/User/Signup';
// import Dashboard from './features/User/Dashboard';
// import { PrivateRoute } from './helpers/PrivateRoute';

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route component={Signin} path="/login" />
          <Route exact component={Signup} path="/signup" />
          <ProtectedRoute exact component ={Homepage} path="/home" />
          {/* <PrivateRoute exact component={Dashboard} path="/" /> */}
        </Switch>
    </Router>

    </div>
  );
}

export default App;
