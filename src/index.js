import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';

import App from './components/App';

import itemReducer from './reducers/itemReducer';
import itemsReducer from './reducers/itemsReducer';
import filterReducer from './reducers/filterReducer';
import searchReducer from './reducers/searchReducer';

const app = combineReducers({
    item: itemReducer,
    items: itemsReducer,
    filter: filterReducer,
    search: searchReducer
});

const store = createStore(app);

const render = () =>
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );

store.subscribe(render);
render();
