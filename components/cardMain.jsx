/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Text } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import '@splidejs/react-splide/css';
import { cardVariants, SplideProps } from './Variants';
import { motion } from 'framer-motion';
import Link from 'next/link';

import card from '../styles/card.module.css';

const Card = () => {
  const price = 5000;
  return (
    <motion.div
      variant={cardVariants}
      initial="hidden"
      animate="visible"
      className={card.card}
    >
      <div className={card.top}>
        <img
          className={card.cardImg}
          height="30%"
          src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/a1/fd9a9b0f404af6842d49aad8cf141a/Andrew-WA-Thompson-699-1-.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=216&fit=fill&q=50"
          alt="course-img"
        />
        <img
          className={card.courseProviderLogo}
          src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40"
        />
      </div>
      <div className={card.bottom}>
        <div className={card.platform}>Coursera</div>
        <h2 className={card.title}>
          Applied Data Science with Python Specialization
        </h2>

        <Splide className={card.courseBadges} options={SplideProps}>
          <SplideSlide className={card.tagStar}>
            4.5 <AiFillStar style={{ color: '#F2D049', display: 'inline' }} />
          </SplideSlide>
          <SplideSlide className={card.tag}>3-4 Months</SplideSlide>
          <SplideSlide className={card.tag}>Beginner</SplideSlide>
          <SplideSlide className={card.tag}>Specilisation</SplideSlide>
          <SplideSlide className={card.tag}>Credit Eligible</SplideSlide>
          <SplideSlide className={card.tag}>Certificate</SplideSlide>
          <SplideSlide className={card.tag}>Fun</SplideSlide>
          <SplideSlide className={card.tag}>Technology</SplideSlide>
        </Splide>

        <div className={card.provider}>University of Michigan</div>

        <Text className={card.desc} noOfLines={6}>
          Gain new insights into your data . Learn to apply data science methods
          and techniques, and acquire analysis skills. The 5 courses in this
          University of Michigan specialization introduce learners to data
          science through the python programming language. This skills-based
          specialization is intended for learners who have a basic python or
          programming background, and want to apply statistical, machine
          learning, information visualization, text analysis, and social network
          analysis techniques through popular python toolkits such as pandas,
          matplotlib, scikit-learn, nltk, and networkx to gain insight into
          their data.
        </Text>

        <Link href="/details" className={card.readmore}>
          Read more
        </Link>

        <div className={card.btns}>
          <a
            href="https://in.coursera.org/specializations/data-science-python"
            className={card.siteBtn}
          >
            Go to course
          </a>
          <div className={card.price}>
            {price == 0 ? 'Free' : price + 'INR'}
          </div>
          {/* <div className='price'>{price == 0 ? 'Free' : price + 'INR'}</div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
