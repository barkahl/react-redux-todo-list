import React from 'react';

import List from './List';
import Form from './Form';
import FilterOptions from './FilterOptions';

const App = ({store}) => {
    const getItemsToDisplay = () => {
        const state = store.getState();
        let items = state.items;

        switch (state.filter) {
            case 'COMPLETED_ONLY':
                items = items.filter(item => item.done);
                break;
            case 'NOT_COMPLETED_ONLY':
                items = items.filter(item => !item.done);
        }

        if (state.search) {
            items = items.filter(item => item.text.includes(state.search));
        }

        return items;
    };

    return (
        <div>
            <Form dispatch={store.dispatch} />
            <FilterOptions store={store} />
            <List getItems={getItemsToDisplay} dispatch={store.dispatch} />
        </div>
    );
};

export default App;
