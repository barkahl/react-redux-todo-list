import React from 'react';
import styles from './../styles/Form.css';

const Form = ({dispatch}) => {
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

export default Form;
