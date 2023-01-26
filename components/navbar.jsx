import { Button, ButtonGroup, HStack, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <motion.div className='nav-logo'>
        <img src="image2.png" alt="logo" height={30} width={30} />
        <p>Coursurf</p>
        <HStack className='nav-pagelinks'>
          <Link href='/'><AiFillHome className='nav-images' size={18}/><p>Home</p></Link>
          <Link href='/'><BsSearch className='nav-images' size={18}/><p>Search</p></Link>
          {/* <Link href='/'><AiFillHome className='nav-images' /><p>Home</p></Link> */}
        </HStack>
      </motion.div>

      <div className="navbar-links">
        <div className="buttons">Sign-up</div>
        <div className="buttons">Login</div>
      </div>
    </nav>
  )
}

export default Navbar