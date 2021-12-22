const contextReducer = (state, action) => {
  let transaction;

  switch (action.type) {
    case "DELETE_TRANSCTION":
      transaction = state.filter((item,index) => index !== action.payload);
      // console.log(transaction);
      return transaction;

    case "ADD_TRANSCTION":
      transaction = [action.payload, ...state];
      return transaction;
    default:
      return state;
  }
};

export default contextReducer;
