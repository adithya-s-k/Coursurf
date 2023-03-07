import React from 'react'
import provider from '../styles/provider.module.css'

const Provider = ({ imgSrc, name, number }) => {
  return (
    <div className={provider.card}>
      <div className={provider.left}>
        <img src={imgSrc} alt='course-provider' className={provider.img} />
        {/* <div src={imgSrc} alt='course-provider' className={provider.img} /> */}
        <p className={provider.name}>{name}</p>
      </div>

      <div className={provider.right}>
        {/* <div src='' alt='course-provider' className={provider.img} >d</div> */}
        <span className={provider.count}>{number} courses</span>
      </div>

    </div>
  )
}

export default Provider