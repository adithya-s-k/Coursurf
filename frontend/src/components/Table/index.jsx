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
          <div className={styles.leftSection}>
            <div className={styles.title_container}>
              <div className={styles.course_title}>{course.name}</div>
            </div>
            <div>
              <div className={styles.textParameter}>
                <div>{course.website}</div>
                <div>{course.company}</div>
                <div>{course.certificate}</div>
                <div>{course.hours} hrs</div>
                <div className={styles.rating_container}>
                  <img
                    src="./images/star.png"
                    alt="star"
                    className={styles.star_img}
                  />
                  <div className={styles.movie_rating}>{course.rating}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pricing}> ₹{course.price}</div>
          <div className={styles.rightSection}>
            <div>
              <button className={styles.button}>View Details</button>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div>
              <a href={course.link}>
                <button className={styles.button1}>Go to Course</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
