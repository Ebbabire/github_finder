import React from 'react';
import SearchBar from '../SearchBar';
import UsersList from './UsersList';

const Home = () => {
  return (
    <div className="container mx-auto mb-12">
      <SearchBar />
      <UsersList />
    </div>
  );
};

export default Home;
