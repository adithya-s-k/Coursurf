import styles from './styles.module.css';

import React from 'react';

const Sort = ({ sort, setSort, total }) => {
  const onSelectChange = ({ currentTarget: input }) => {
    setSort({ sort: input.value, order: sort.order });
  };

  const onArrowChange = () => {
    if (sort.order === 'asc') {
      setSort({ sort: sort.sort, order: 'desc' });
    } else {
      setSort({ sort: sort.sort, order: 'asc' });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.results}>Showing {total} Results</div>
      <div className={styles.sortContainer}>
        <div className={styles.sort_by}>Sort By :</div>
        <select
          onChange={onSelectChange}
          className={styles.select}
          defaultValue={sort.sort}
        >
          <option value="year">Price</option>
          <option value="rating">Rating</option>
        </select>
        <button className={styles.arrow_btn} onClick={onArrowChange}>
          <div className={styles.up_arrow}>&uarr;</div>
          <div className={styles.down_arrow}>&darr;</div>
        </button>
      </div>
    </div>
  );
};

export default Sort;
