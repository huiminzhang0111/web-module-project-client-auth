import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import AddFriendForm from './components/AddFriendForm';
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from './components/FriendsList';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello Friends</h1>
        <Link to="/friends">See Friends</Link>
        <Link to="/friends/add-new">Add Friend</Link>

        <Switch>
          <PrivateRoute path="/friends/add-new" component={AddFriendForm}/>
          <PrivateRoute path='/friends' component={FriendsList} />

          <Route path='/login'>
            <Login />
          </Route>
          
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
