import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { h1Variants, linkVariants } from './Variants'

// import { Oswald } from '@next/font/google'

// const oswald = Oswald({
//   weight: ['200','300','400','500','600','700'],
//   subsets : ['latin']
// })

const Footer = () => {
    return (
        <footer>
            <div className='footer-left'>
                {/* <Image height={150} width={150} src='/image2.png' alt='footer-logo'/> */}
            </div>
            <div className="footer-right">
                <div className="footer-right-top">
                    <motion.h2 variants={h1Variants} animate='visible' initial='hidden'>Take ownership of your course</motion.h2>
                    <p>Finally a partner that handles that does something</p>
                    <div className="links">
                        <motion.a variants={linkVariants} initial='hidden' animate='visible' whileHover='hover' href="/">HOME</motion.a>
                        <motion.a variants={linkVariants} initial='hidden' animate='visible' whileHover='hover' href="/">SERVICES</motion.a>
                        <motion.a variants={linkVariants} initial='hidden' animate='visible' whileHover='hover' href="/">CASE STUDY</motion.a>
                        <motion.a variants={linkVariants} initial='hidden' animate='visible' whileHover='hover' href="/">ABOUT US</motion.a>
                    </div>
                </div>
                <div className="footer-right-bottom">
                    <div className="bar">
                        <h1>start a converstation</h1>
                        <span />
                    </div>
                    <div className='contact-links'>
                        <BsInstagram className='contact-icons' />
                        <FiMail className='contact-icons' />
                        <FiMail className='contact-icons' />
                        <FiMail className='contact-icons' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer