/* eslint-disable @next/next/no-img-element */
import React from 'react';
import cardD from '../styles/carddetails.module.css';

import { AiFillStar } from 'react-icons/ai';
import { BsStack, BsCalendar3Event } from 'react-icons/bs';
import { IoSpeedometerOutline } from 'react-icons/io';

const Carddetail = (props) => {
  const features = [
    {
      type: "platform",
      value: props.provider,
      available: true,
      // icon: '<BsStack />'
    },
    {
      type: "mode",
      value: "Flexible",
      // icon: '<BsCalendar3Event />',
      available: true,
    },
    {
      type: "duration",
      value: props.duration,
      available: true,
      // icon: '<IoSpeedometerOutline />'
    },
    {
      type: "start-date",
      value: "23 Feb 2023",
      available: true,
    },
    {
      type: "comment",
      available: false,
    },
    {
      type: "pricing",
      value: props.pricing,
    },
  ];

  const filterFeatures = features.filter((item) => item.available);
  // console.log(filterFeatures)

  return (
    <div className={cardD.container}>
      <div className={cardD.one}>
        <div className={cardD.top}>
          <div className={cardD.topLeft}>
            <img
              className={cardD.img}
              src="https://ccweb.imgix.net/https%3A%2F%2Fugc.futurelearn.com%2Fuploads%2Fimages%2F47%2F2e%2Fthumbnail_472ee5af-d085-4fc6-8023-d038cc421508.jpg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=315&ixlib=php-3.3.1&w=560&s=66f18efb924bd568f190d19b07af9fc3"
              alt="Picture of the author"
            />
          </div>
          <div className={cardD.topRight}>
            <div className={cardD.provider}>{props.provider}</div>
            <h2 className={cardD.heading}>{props.title}</h2>
            <div className={cardD.review}>
              <span>
                <span>4.5</span>
                <AiFillStar style={{ color: "#F2D049", display: "inline" }} />
              </span>
              <span>1641 reviews</span>
            </div>
          </div>
        </div>
        <div className={cardD.bottom}>
          <p className={cardD.desc}>{props.content}</p>

          <div className={cardD.btns}>
            <button className={cardD.btn}>View Details</button>
          <a href={props.key}> <button className={cardD.btn} >Go to Course</button></a> 
          </div>
        </div>
      </div>
      <div className={cardD.two}>
        <ul className={cardD.featureUl}>
          {filterFeatures.map((item, index) => (
            <li className={cardD.featureItem} key={index}>
              <span>
                {/* {console.log(item.type)} */}
                {/* {console.log(item.type === 'mode')} */}
                {/* {item.type==='platform' && <BsStack/>} */}
                {/* {item.type==='mode' && <BsCalendar3Event/>} */}
                {/* {item.type==='duration' && <IoSpeedometerOutline/>} */}
                {/* {item.type==='platform' && <BsStack/>} */}
                {/* {item.type==='platform' && <BsStack/>} */}
              </span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carddetail;
