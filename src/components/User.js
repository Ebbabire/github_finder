import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  return (
    <div className="bg-[#FCEDDA] shadow-md p-2 text-black rounded-lg flex flex-row items-center">
      <div className="avatar ">
        <div className="rounded-full w-14 h-14 p-2">
          <img src={user.avatar_url} alt="avatar" />
        </div>
      </div>
      <div>
        <h2 className="card-title">{user.login}</h2>
        <Link
          className="text-opacity-40 text-black"
          to={`/users/${user.login}`}
        >
          Visit Profile
        </Link>
      </div>
    </div>
  );
};

export default User;
