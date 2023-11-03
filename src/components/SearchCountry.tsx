import React from 'react';

type PropsType = {
  handleSearch: Function;
};
const SearchCountry = (props: PropsType) => {
  return (
    <div className='search'>
      <input
        type='text'
        placeholder='search...'
        onChange={(e) => props.handleSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchCountry;
