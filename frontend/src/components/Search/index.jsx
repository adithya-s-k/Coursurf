import styles from './styles.module.css';

import React from 'react';

const Search = ({ setSearch }) => {
  return (
    <input
      type="text"
      className={styles.search}
      placeholder="What do you want to learn?"
      onChange={({ currentTarget: input }) => setSearch(input.value)}
    />
  );
};

export default Search;
