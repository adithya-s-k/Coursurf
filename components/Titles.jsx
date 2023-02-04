import React from 'react'

const Titles = ({ certificate, heading, desc }) => {
    return (
        <h2 className='title-box'>
            <div className="certificate">{certificate}</div>
            <p className="heading">{heading}</p>
            <p className="desc">{desc}</p>
        </h2>
    )
}

export default Titles