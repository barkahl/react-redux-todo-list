const searchReducer = (state = '', action) => {
    if (action.type === 'SET_SEARCH_PHRASE') {
        return action.phrase;
    }

    return state;
};

export default searchReducer;
