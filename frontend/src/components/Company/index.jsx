import styles from './styles.module.css';

import React from 'react';

const Website = ({ company, filterCompany, setFilterCompany }) => {
  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterCompany, input.value];
      setFilterCompany(state);
    } else {
      const state = filterCompany.filter((val) => val !== input.value);
      setFilterCompany(state);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Company</h1>
      <div className={styles.genre_container}>
        {company.map((company) => (
          <div className={styles.website} key={company}>
            <input
              className={styles.genre_input}
              type="checkbox"
              value={company}
              onChange={onChange}
            />
            <p className={styles.genre_label}>{company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Website;
