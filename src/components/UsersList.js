import React, { useEffect, useState } from 'react';

import User from '../components/User';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
