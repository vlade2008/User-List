import React from 'react';
import { Input, Divider, Button } from 'semantic-ui-react'
import UserCard from '../components/UserCard';

function User() {
  return (
    <div className="App">
      <header className="App-header">
        <Divider hidden />
        <Input icon='search'
          placeholder='User Id...'
        />
        <Divider hidden />
        <Input icon='search'
          placeholder='Name...'
        />
        <Divider hidden />
        <Button primary size='medium'>Search</Button>
        <Divider hidden />
        <UserCard />
      </header>
    </div>
  );
}

export default User;
