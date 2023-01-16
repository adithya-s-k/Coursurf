import styles from './styles.module.css';

import React from 'react';

const Certificate = ({
  certificate,
  filterCertificate,
  setFilterCertificate,
}) => {
  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterCertificate, input.value];
      setFilterCertificate(state);
    } else {
      const state = filterCertificate.filter((val) => val !== input.value);
      setFilterCertificate(state);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Certification</h1>
      <div className={styles.genre_container}>
        {certificate.map((Certificate) => (
          <div className={styles.website} key={Certificate}>
            <input
              className={styles.genre_input}
              type="checkbox"
              value={Certificate}
              onChange={onChange}
            />
            <p className={styles.genre_label}>{Certificate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
