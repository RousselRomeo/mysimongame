export const initialState = {
    users: [],
    id: null
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_USER':
        return{
            ...state,
            users: [...state.users, action.users]
        };

        case 'REMOVE_USER':
                let index = action.id
              let newUsers = [...state.users];
        
              if(index >= 0){
                  newUsers.splice(index, 1)
              } else {
                  console.warn(`Cant remove product (id: ${action.id}) as its not in basket`)
              }
            return {
                ...state, 
                users:newUsers
            };
        default:
            return state;
    }

  }

  export default reducer;