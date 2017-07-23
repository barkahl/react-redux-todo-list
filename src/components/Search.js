import React from 'react';
import styles from './../styles/Search.css';

const Search = ({handleSearchPhraseChange}) => {
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

export default Search;
