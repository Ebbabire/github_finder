import React, { useContext } from 'react';

import User from '../components/User';
import userContext from '../store/UserContext';

const UsersList = () => {
  const { users, loading, error } = useContext(userContext);

  return (
    <>
      {!loading && error && (
        <p className="text-black text-4xl m-auto mt-8 font-bold">{error}</p>
      )}
      {loading && !error ? (
        <p className="text-black text-4xl m-auto mt-4 font-bold">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user, index) => (
            <User key={index} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default UsersList;
