import { HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Document } from 'postcss'
import React from 'react'
import { AiFillHome, AiOutlineAlignRight } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'


const Navbar = () => {

  const mobileView = () => {
    const mv = document.getElementById('mv');
    const toggle = document.getElementById('switch');
    const cross = document.getElementById('cross');
    const ham = document.getElementById('ham');

    if (toggle.innerText === 'ON') {
      toggle.innerText = 'OFF';
      mv.style.display = 'none'
      cross.style.display = 'none'
      ham.style.display = 'block'
    } else {
      ham.style.display = 'none'
      cross.style.display = 'block'
      toggle.innerText = 'ON';
      mv.style.display = 'block'
    }
  }

  return (
    <nav className='navbar'>
      <motion.div className='nav-logo'>
        <img src="image2.png" alt="logo" height={30} width={30} />
        <p>Coursurf</p>
        <HStack className='nav-pagelinks'>
          <Link href='/'><p>Home</p></Link>
          <Link href='/'><BsSearch className='nav-images' size={18} /><p>Search</p></Link>
          <Link href='/about'><AiFillHome className='nav-images' /><p>About</p></Link>
        </HStack>
      </motion.div>

      <div className="navbar-links">
        <div className="buttons">Sign-up</div>
        <div className="buttons">Login</div>

        <div className='mobile-view' onClick={mobileView}>
          <p id='switch'></p>
          <AiOutlineAlignRight id='ham' color='#333' size={26} />
          <RxCross1 id='cross' color='#333' size={26} />
          <motion.div layout animate={{ type: 'spring' }} className="mobile-links" id='mv'>
            <Link href='/'>Home</Link>
            <Link href='/'>About</Link>
            <Link href='/search'>Search</Link>
            <Link href='/'>SignUp</Link>
            <Link href='/'>Login</Link>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar