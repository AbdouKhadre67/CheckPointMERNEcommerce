const userReducer = (state = null, action) => {
    switch (action.type) {
      case 'REGISTER_USER':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default userReducer;
  