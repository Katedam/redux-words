import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ searchTerm, wordColor, onChange }) {
  return (
    <>
    <input onChange={onChange} type="text" name="searchTerm" value={searchTerm}></input>
    <input onChange={onChange} type="color" name="wordColor" value={wordColor}></input>
    </>
  );
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  wordColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;
