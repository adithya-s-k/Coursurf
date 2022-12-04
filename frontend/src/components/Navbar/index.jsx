import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './styles.module.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from '../Search';

const NavigationBar = ({ setSearch }) => {
  return (
    <>
      <Navbar className={styles.navbar} expand="lg">
        <Container className={styles.navbarContainer} fluid>
          <Navbar.Brand>
            <a href="/">
              <img
                className={styles.logo_image}
                src="./images/logo.png"
                alt="logo"
              />
            </a>
          </Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>
          <Search setSearch={(search) => setSearch(search)} />
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
