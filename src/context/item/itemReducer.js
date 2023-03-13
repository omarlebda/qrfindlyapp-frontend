
const ItemReducer = (state, { type, payload }) => {
    switch (type) {
      case 'GET_ITEMS':
        return {
          ...state,
          items: payload.items,
        };
      case 'ADD_ITEM':
        return {
          ...state,
          items: [payload.newItem, ...state.items],
        }; 
    }
  };


  export default ItemReducer