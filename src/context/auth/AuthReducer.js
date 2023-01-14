
const AuthReducer = (state, { type, payload }) => {
    switch (type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          user: payload.user,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
    }
  };


  export default AuthReducer