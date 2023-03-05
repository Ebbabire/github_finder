import { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';

const UserContext = createContext();

const initialStates = {
  users: [],
  user: {},
  repos: [],
  loading: false,
  error: null,
};

export const UserContextProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(UserReducer, initialStates);

  const searchUser = async (enteredValue) => {
    const param = new URLSearchParams({
      q: enteredValue,
    });
    try {
      dispatch({ type: 'SET_LOADING' });

      const response = await fetch(
        `https://api.github.com/search/users?${param}`
      );

      if (!response.ok) {
        throw new Error('something went wrong...');
      } else {
        const { items } = await response.json();
        dispatch({ type: 'GET_USERS', payload: items });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const getUser = async (login) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await fetch(`https://api.github.com/users/${login}`);
      if (response.status === 404) {
        window.location = '/notfound';
      } else {
        const data = await response.json();
        dispatch({ type: 'GET_USER', payload: data });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const getRepos = async (login) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await fetch(
        `https://api.github.com/users/${login}/repos`
      );
      if (response.status === 404) {
        window.location = '/notfound';
      } else {
        const data = await response.json();
        dispatch({ type: 'GET_REPOS', payload: data });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const clearUsersList = () => {
    dispatch({ type: 'CLEAR_USER' });
  };

  return (
    <UserContext.Provider
      value={{
        users: userState.users,
        user: userState.user,
        repos: userState.repos,
        loading: userState.loading,
        error: userState.error,
        searchUser,
        getUser,
        getRepos,
        clearUsersList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
