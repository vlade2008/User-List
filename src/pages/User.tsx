import React from 'react';
import UserCard from '../components/UserCard';

function User() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link">
          User List
        </a>
        <UserCard />
      </header>
    </div>
  );
}

export default User;
