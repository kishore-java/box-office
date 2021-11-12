/* eslint-disable */
import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
const Home = () => {
  const [input, setInput] = useState('');

  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json)
      .then();
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) onSearch();
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={onSearch}>
        search
      </button>
    </MainPageLayout>
  );
};

export default Home;
