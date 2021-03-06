import React from 'react';
import PropTypes from 'prop-types';

import Search from './Search';
import Filter from './Filter';

const FilterOptions = ({store}) => {
    const handleFilterTypeChange = filterType => store.dispatch({
        type: 'SET_FILTER_TYPE',
        filter: filterType
    });

    const handleSearchPhraseChange = phrase => store.dispatch({
        type: 'SET_SEARCH_PHRASE',
        phrase: phrase
    });

    return (
        <div>
            <Search handleSearchPhraseChange={handleSearchPhraseChange} />
            <Filter
                currentFilterType={store.getState().filter}
                handleFilterTypeChange={handleFilterTypeChange}
            />
        </div>
    );
};

FilterOptions.propTypes = {
    store: PropTypes.object
};

export default FilterOptions;
