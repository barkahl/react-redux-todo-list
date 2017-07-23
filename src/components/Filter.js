import React from 'react';
import styles from './../styles/Filter.css';

const Filter = ({currentFilterType, handleFilterTypeChange}) =>
    <div className={styles.base}>
        <label className={styles.label}>
            <input
                type="radio"
                name="filterType"
                value="ALL"
                checked={currentFilterType === 'ALL'}
                onChange={event => handleFilterTypeChange(event.target.value)}
            />
            All
        </label>

        <label className={styles.label}>
            <input
                type="radio"
                name="filterType"
                value="COMPLETED_ONLY"
                checked={currentFilterType === 'COMPLETED_ONLY'}
                onChange={event => handleFilterTypeChange(event.target.value)}
            />
            Completed only
        </label>

        <label className={styles.label}>
            <input
                type="radio"
                name="filterType"
                value="NOT_COMPLETED_ONLY"
                checked={currentFilterType === 'NOT_COMPLETED_ONLY'}
                onChange={event => handleFilterTypeChange(event.target.value)}
            />
            Not completed only
        </label>
    </div>
;

export default Filter;
