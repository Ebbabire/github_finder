import React from 'react';
import SearchBar from '../components/SearchBar';
import UsersList from '../components/UsersList';

const Home = () => {
  return (
    <div className="container mx-auto mb-12">
      <SearchBar />
      <UsersList />
    </div>
  );
};

export default Home;
