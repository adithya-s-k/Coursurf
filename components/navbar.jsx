import { HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Document } from 'postcss';
import React from 'react';
import { AiFillHome, AiOutlineAlignRight } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import Image from "next/image";

const Navbar = () => {
  const mobileView = () => {
    const mv = document.getElementById("mv");
    const toggle = document.getElementById("switch");
    const cross = document.getElementById("cross");
    const ham = document.getElementById("ham");

    if (toggle.innerText === "ON") {
      toggle.innerText = "OFF";
      mv.style.display = "none";
      cross.style.display = "none";
      ham.style.display = "block";
      mv.style.height = "0";
    } else {
      ham.style.display = "none";
      cross.style.display = "block";
      toggle.innerText = "ON";
      mv.style.display = "block";
      mv.style.height = "calc( 50vh - 3.84rem )";
    }
  };

  return (
    <nav className="navbar">
      <motion.div className="nav-logo">
        <Image src="image2.png" alt="logo" height={30} width={30} />
        <p className="p">Coursurf</p>
        <HStack className="nav-pagelinks">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/about">
            <AiFillHome className="nav-images" />
            <p>About</p>
          </Link>
          <Link href="/dev">
            <AiFillHome className="nav-images" />
            <p>Filter</p>
          </Link>
        </HStack>
      </motion.div>

      <div className="navbar-links">
        <div className="buttons">Sign-up</div>
        <div className="buttons">Login</div>

        <div className="mobile-view" onClick={mobileView}>
          <p id="switch"></p>
          <AiOutlineAlignRight id="ham" color="#333" size={26} />
          <RxCross1 id="cross" color="#333" size={26} />
          <motion.div
            layout
            animate={{ type: "spring" }}
            className="mobile-links"
            id="mv"
          >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/dev">Filter</Link>
            <Link href="/">SignUp</Link>
            <Link href="/">Login</Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
