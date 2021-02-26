import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Navbar from './components/pages/layout/Navbar';
import  Notfound from "./components/pages/About"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/AddUser" component={AddUser} />
          <Route exact path="/users/EditUser:id" component= {EditUser} />
          <Route exact path="/users/User" component= {User} />
          <Route component= {Notfound} />
        </Switch>
     
      </div>

    </Router>

  );
}

export default App;
