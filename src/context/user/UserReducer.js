
const ContextReducer = (state, { type, payload }) => {
    switch (type) {
      case 'GETUSER':
        return {
          ...state,
          user: payload.user,
        };
    }
  };


  export default ContextReducer