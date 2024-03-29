const initialState = {
    items: []
};

export default(state = initialState, action) => {
    switch (action.type) {
       case 'ADD_TO_CARD':
        return {
            ...state, 
            items: [
                ...state.items,
                action.payload
            ],
        };
        case 'REMOVE_FROM_CARD':
            return {
                ...state,
                items: state.items.filter(ob => ob.id !== action.payload)
            };
            
        default:
            return state;
    }
};