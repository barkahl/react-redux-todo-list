import React from 'react';
import PropTypes from 'prop-types';

import styles from './../styles/Form.css';

const Form = ({dispatch}) => {
    // refs
    let input;

    const handleSubmitForm = () => {
        if (!input.value) {
            return;
        }

        dispatch({
            type: 'ADD_ITEM',
            text: input.value,
            done: false
        });

        input.value = '';
    };

    return (
        <form
            className={styles.base}
            onSubmit={event => {
                event.preventDefault();
                handleSubmitForm();
            }}
        >
            <input
                type="text"
                placeholder="Add new item..."
                autoFocus
                ref={node => input = node}
                className={styles.input}
            />
            <button type="submit">Add</button>
        </form>
    );
};

Form.propTypes = {
    dispatch: PropTypes.func
};

export default Form;
