const filterReducer = (state = 'ALL', action) => {
    if (action.type === 'SET_FILTER_TYPE') {
        return action.filter;
    }

    return state;
};

export default filterReducer;
