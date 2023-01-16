import styles from './styles.module.css';

import React from 'react';

const Website = ({ website, filterWebsite, setFilterWebsite }) => {
  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterWebsite, input.value];
      setFilterWebsite(state);
    } else {
      const state = filterWebsite.filter((val) => val !== input.value);
      setFilterWebsite(state);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Course Provide</h1>
      <div className={styles.genre_container}>
        {website.map((website) => (
          <div className={styles.website} key={website}>
            <input
              className={styles.genre_input}
              type="checkbox"
              value={website}
              onChange={onChange}
            />
            <p className={styles.genre_label}>{website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Website;
