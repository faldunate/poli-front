import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './containers/UserList';
import AddUser from './containers/AddUser';

function App() {
  return (
    <div className="App container">
      <div className="row">
        <UserList />
        <AddUser />
      </div>
    </div>
  );
}

export default App;
