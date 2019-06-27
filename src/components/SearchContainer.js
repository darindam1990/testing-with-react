import '../css/SearchContainer.css';

import React, { useEffect, useState } from 'react';

import { SearchField } from './SearchField';
import { SearchResults } from './SearchResults';

export const SearchContainer = () => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(undefined);

  const fetchData = () => {
    if (keyword) {
      setLoading(true);
      fetch(`/search?term=${keyword}`)
        .then(response => response.json())
        .then(data => {
          setLoading(false);
          if (data && data.results && Array.isArray(data.results)) {
            setResults(data.results);
          }
        })
        .catch(err => {
          setLoading(false);
          setResults([]);
        })
    } else {
      setResults(undefined);
    }
  };

  useEffect(fetchData, [keyword]);

  const handleSearch = (event) => {
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchContainer">
      <SearchField value={keyword} onSearch={handleSearch} />
      <SearchResults results={results} loading={loading}/>
    </div>
  );
};