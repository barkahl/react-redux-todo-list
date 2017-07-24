import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

import styles from './../styles/List.css';

const List = ({getItems, dispatch}) => {
    const items = getItems();
    const renderedItems = items.map(item =>
        <Item 
            text={item.text}
            done={item.done}
            id={item.id}
            key={item.id}
            dispatch={dispatch}
        />
    );

    return (
        <ul className={styles.base}>
            {renderedItems}
        </ul>
    );
};

List.propTypes = {
    getItems: PropTypes.func,
    dispatch: PropTypes.func
};

export default List;
