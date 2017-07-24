let id = 0;

const itemReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                id: id++,
                text: action.text,
                done: false
            };

        case 'TOGGLE_ITEM':
            if (state.id === action.id) {
                return Object.assign({}, state, {done: !state.done});
            }
            return state;

        default:
            return state;
    }
};

export default itemReducer;
