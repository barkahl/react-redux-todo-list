import itemReducer from './itemReducer';

const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                itemReducer(undefined, action)
            ];
        case 'TOGGLE_ITEM':
            return state.map(item => itemReducer(item, action));
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
};

export default itemsReducer;
