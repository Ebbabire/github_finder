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

  const searchUser = async () => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await fetch(`https://api.github.com/users`);
      if (!response.ok) {
        throw new Error('something went wrong...');
      }
      const data = await response.json();
      dispatch({ type: 'GET_USER', payload: data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  return (
    <UserContext.Provider
      value={{
        users: userState.users,
        loading: userState.loading,
        error: userState.error,
        searchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
