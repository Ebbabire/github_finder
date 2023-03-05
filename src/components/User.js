import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../store/UserContext';

const User = ({ user }) => {
  const { getUser, getRepos } = useContext(UserContext);

  const getUserHandler = () => {
    getUser(user.login);
    getRepos(user.login);
  };
  return (
    <div className="bg-[#A7BEAE] shadow-md p-2 text-black rounded-lg flex flex-row items-center">
      <div className="avatar ">
        <div className="rounded-full w-14 h-14 p-2">
          <img src={user.avatar_url} alt="avatar" />
        </div>
      </div>
      <div>
        <h2 className="card-title">{user.login}</h2>
        <Link
          onClick={getUserHandler}
          className="text-opacity-40 text-black"
          to={`/user/${user.login}`}
        >
          Visit Profile
        </Link>
      </div>
    </div>
  );
};

export default User;
