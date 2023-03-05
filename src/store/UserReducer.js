const UserReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'SET_ERROR':
      return {
        ...state,
        users: [],
        error: action.payload,
        loading: false,
      };
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case 'CLEAR_USER':
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default UserReducer;
