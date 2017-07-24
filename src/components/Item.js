import React from 'react';
import PropTypes from 'prop-types';

import styles from './../styles/Item.css';

const Item = ({text, done, id, dispatch}) =>
    <li className={[styles.base, done ? styles.done : ''].join(' ')}>
        <input 
            type="checkbox" 
            checked={done} 
            className={styles.checkbox} 
            onChange={() => dispatch({
                type: 'TOGGLE_ITEM',
                id: id
            })}
        />
        <span>{text}</span>
        <button 
            className={styles.button} 
            onClick={() => dispatch({
                type: 'REMOVE_ITEM',
                id: id
        })}>
            Remove
        </button>
    </li>
;

Item.propTypes = {
    text: PropTypes.string,
    done: PropTypes.bool,
    id: PropTypes.number,
    dispatch: PropTypes.func
};

export default Item;
