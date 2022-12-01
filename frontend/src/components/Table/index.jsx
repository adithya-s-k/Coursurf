import styles from './styles.module.css';

import React from 'react';

const Table = ({ courses }) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.heading}>
        <p className={styles.title_tab}>Title</p>
        <p className={styles.genre_tab}>Genre</p>
        <p className={styles.rating_tab}>Rating</p>
      </div> */}
      {courses.map((course) => (
        <div className={styles.course} key={course._id}>
          <div className={styles.title_container}>
            <img src={course.img} alt="course" className={styles.movie_img} />
            <p className={styles.movie_title}>
              {course.name} ({course.year})
            </p>
          </div>
          <div className={styles.genre_container}>
            {course.genre.map((genre, index) => (
              <p key={genre} className={styles.movie_genre}>
                {genre}
                {index !== course.genre.length - 1 && '/'}
              </p>
            ))}
          </div>
          <div className={styles.rating_container}>
            <img
              src="./images/star.png"
              alt="star"
              className={styles.star_img}
            />
            <p className={styles.movie_rating}>{course.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
