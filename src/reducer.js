export const initialState = {
    user: []
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_USER':
        return{
            
        };

        case 'REMOVE_USER':
            return {

            };
        default:
            return state;
    }

  }

  export default reducer;