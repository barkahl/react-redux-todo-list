import React from 'react';
import PropTypes from 'prop-types';

import styles from './../styles/Search.css';

const Search = ({handleSearchPhraseChange}) => {
    // refs
    let input;

    return (
        <div className={styles.base}>
            <input
                type="text"
                placeholder="Search phrase..."
                ref={node => input = node}
                onKeyUp={event => handleSearchPhraseChange(event.target.value)}
                className={styles.input}
            />

            <button onClick={event => {
                handleSearchPhraseChange('');
                input.value = '';
            }}>
                Clear
            </button>
        </div>
    );
};

Search.propTypes = {
    handleSearchPhraseChange: PropTypes.func
};

export default Search;
