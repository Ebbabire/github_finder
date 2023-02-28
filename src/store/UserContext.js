import { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';

const UserContext = createContext();

const initialStates = {
  users: [],
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
      }
      const { items } = await response.json();
      dispatch({ type: 'GET_USER', payload: items });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const clearUser = () => {
    dispatch({ type: 'CLEAR_USER' });
  };

  return (
    <UserContext.Provider
      value={{
        users: userState.users,
        loading: userState.loading,
        error: userState.error,
        searchUser,
        clearUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
