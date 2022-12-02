import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './styles.module.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = ({ setSearch }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <img
              className={styles.logo_image}
              src="./images/logo.png"
              alt="logo"
              className="logo"
            />
          </Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>
          <Form className="d-flex w">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={({ currentTarget: input }) => setSearch(input.value)}
            />
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
