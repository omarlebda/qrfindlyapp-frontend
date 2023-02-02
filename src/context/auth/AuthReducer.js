
const AuthReducer = (state, { type, payload }) => {
    switch (type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
        };
    }
  };


  export default AuthReducer