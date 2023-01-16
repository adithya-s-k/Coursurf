import React from 'react';

import heroImage from './assets/img/heroImage.png';
import logo from './assets/img/logo.png';
import heroBackground from './assets/img/heroBackground.png';
import content from './assets/img/content.png';
import navBackground from './assets/img/navbar.png';

export default function home() {
  return (
    <>
      <div>
        <img
          alt="image101"
          style={{
            position: 'absolute',
            overflow: 'hidden',
            width: '100%',
            height: '2380.24',
            marginTop: 412,
          }}
          src={content}
        />
        <img
          alt="image101"
          style={{
            position: 'absolute',
            overflow: 'hidden',
            width: '100%',
            height: 800,
          }}
          src={heroBackground}
        />
        <img
          alt="image101"
          style={{
            position: 'absolute',
            overflow: 'hidden',
            width: '100%',
            height: 150,
          }}
          src={navBackground}
        />
      </div>

      <nav
        className="navbar navbar-light navbar-expand-md py-3"
        style={{ marginBottom: 0 }}
      >
        <div className="container">
          <img
            alt="."
            style={{ width: 60, height: 60, margin: 14 }}
            src={logo}
          />
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span
              style={{
                fontSize: 54,
                fontFamily: 'Almarai, sans-serif',
                fontWeight: 'bold',
                color: 'rgba(96, 96, 96, 0.9)',
              }}
            >
              Coursurf
            </span>
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-2"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-2">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" style={{ margin: 8 }}>
                <a
                  className="nav-link active"
                  href="hello"
                  style={{
                    fontSize: 30,
                    fontFamily: 'Almarai, sans-serif',
                    fontWeight: 'bold',
                    color: '#767676',
                    margin: 8,
                  }}
                >
                  Home
                </a>
              </li>
              <li
                className="nav-item"
                style={{
                  fontSize: 30,
                  fontFamily: 'Almarai, sans-serif',
                  fontWeight: 'bold',
                  color: '#767676',
                  margin: 8,
                }}
              >
                <a
                  className="nav-link"
                  href="/search"
                  style={{
                    fontSize: 30,
                    fontFamily: 'Almarai, sans-serif',
                    fontWeight: 'bold',
                    color: '#767676',
                    margin: 8,
                  }}
                >
                  Search
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div
          className="d-flex d-sm-block d-md-block d-xxl-flex justify-content-around justify-content-xxl-center align-items-xxl-center"
          style={{
            position: 'relative',
            display: 'flex',
            overflow: 'hidden',
            width: '100%',
            height: 'fit-content',
            marginTop: 40,
            marginBottom: 110,
          }}
        >
          <img
            alt="hello"
            width={562}
            height={435}
            style={{ width: 570, height: 435, margin: 0 }}
            src={heroImage}
          />
          <div
            className="d-lg-flex flex-column justify-content-lg-center"
            style={{
              position: 'relative',
              display: 'flex',
              width: '40vw',
              paddingLeft: 77,
            }}
          >
            <img
              alt="image101"
              src={logo}
              style={{ width: 80, margin: 0, marginBottom: 10 }}
            />
            <h1
              className="fw-bolder"
              style={{
                fontSize: 60,
                fontFamily: 'Oxanium, serif',
                color: 'rgb(247, 95, 75)',
                textShadow: '4px 4px 4px rgba(61, 61, 61, 0.24)',
                fontWeight: 800,
              }}
            >
              Up Skill Your Self
            </h1>
            <strong style={{ color: 'rgb(114, 114, 114)', marginBottom: 16 }}>
              Browse and Campare online courses and degress from various course
              providers and websites
            </strong>
            <div
              className="d-xxl-flex justify-content-xxl-start align-items-xxl-center"
              style={{ position: 'relative', display: 'flex' }}
            >
              <a
                className="btn btn-primary shadow-lg ms-md-2"
                role="button"
                href="/search"
                style={{
                  padding: '9px 20px',
                  fontSize: 20,
                  fontWeight: 'bold',
                  background: 'linear-gradient(90deg, #fd8a45, #f45556)',
                  borderStyle: 'none',
                  color: 'rgb(53, 53, 53)',
                  height: 'fit-content',
                }}
              >
                Browse Courses
              </a>
            </div>
          </div>
        </div>
        <div
          className="d-xxl-flex flex-column align-items-xxl-center"
          style={{
            width: '100%',
            height: 'fit-content',
            position: 'relative',
            display: 'flex',
            margin: 0,
            marginTop: 0,
          }}
        >
          <h1
            className="fw-bolder text-center"
            style={{
              fontSize: 52,
              fontFamily: 'Oxanium, serif',
              color: 'rgb(247, 95, 75)',
              textShadow: '4px 4px 4px rgba(61, 61, 61, 0.24)',
              fontWeight: 800,
            }}
          >
            Trending
          </h1>
          <div
            className="d-xxl-flex flex-wrap justify-content-xxl-center align-items-xxl-center"
            style={{
              width: '100%',
              height: 'fit-content',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              padding: 10,
            }}
          >
            <button
              className="btn btn-primary"
              type="button"
              style={{
                fontSize: 30,
                height: 'fit-content',
                padding: 0,
                paddingTop: 3,
                paddingBottom: 0,
                paddingRight: 30,
                paddingLeft: 30,
                margin: 15,
                marginBottom: 0,
                background: '#efefef',
                boxShadow: '4px 4px 10px 4px rgba(75, 75, 75, 0.11)',
                color: 'rgb(87, 87, 87)',
                fontFamily: 'Oxanium, serif',
                fontWeight: 'bold',
                borderStyle: 'none',
                borderRadius: 15,
              }}
            >
              UI UX
            </button>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                fontSize: 30,
                height: 50,
                padding: 0,
                paddingTop: 3,
                paddingBottom: 0,
                paddingRight: 30,
                paddingLeft: 30,
                margin: 15,
                marginBottom: 0,
                background: '#efefef',
                boxShadow: '4px 4px 10px 4px rgba(75, 75, 75, 0.11)',
                color: 'rgb(87, 87, 87)',
                fontFamily: 'Oxanium, serif',
                fontWeight: 'bold',
                borderStyle: 'none',
                borderRadius: 15,
              }}
            >
              Deep Leaning
            </button>
            <a href="/courses?page=1&sort=rating,desc&website=&company=&certificate=&search=python">
              <button
                className="btn btn-primary"
                type="button"
                style={{
                  fontSize: 30,
                  height: 50,
                  padding: 0,
                  paddingTop: 3,
                  paddingBottom: 0,
                  paddingRight: 30,
                  paddingLeft: 30,
                  margin: 15,
                  marginBottom: 0,
                  background: '#efefef',
                  boxShadow: '4px 4px 10px 4px rgba(75, 75, 75, 0.11)',
                  color: 'rgb(87, 87, 87)',
                  fontFamily: 'Oxanium, serif',
                  fontWeight: 'bold',
                  borderStyle: 'none',
                  borderRadius: 15,
                }}
              >
                Python
              </button>
            </a>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                fontSize: 30,
                height: 50,
                padding: 0,
                paddingTop: 3,
                paddingBottom: 0,
                paddingRight: 30,
                paddingLeft: 30,
                margin: 15,
                marginBottom: 0,
                background: '#efefef',
                boxShadow: '4px 4px 10px 4px rgba(75, 75, 75, 0.11)',
                color: 'rgb(87, 87, 87)',
                fontFamily: 'Oxanium, serif',
                fontWeight: 'bold',
                borderStyle: 'none',
                borderRadius: 15,
              }}
            >
              Data Science
            </button>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                fontSize: 30,
                height: 50,
                padding: 0,
                paddingTop: 3,
                paddingBottom: 0,
                paddingRight: 30,
                paddingLeft: 30,
                margin: 15,
                marginBottom: 0,
                background: '#efefef',
                boxShadow: '4px 4px 10px 4px rgba(75, 75, 75, 0.11)',
                color: 'rgb(87, 87, 87)',
                fontFamily: 'Oxanium, serif',
                fontWeight: 'bold',
                borderStyle: 'none',
                borderRadius: 15,
              }}
            >
              HTML CSS
            </button>
          </div>
          <div
            className="d-xxl-flex flex-wrap justify-content-xxl-center align-items-xxl-center"
            style={{
              width: '100%',
              height: 'fit-content',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              padding: 10,
            }}
          >
            <button
              className="btn btn-primary"
              type="button"
              style={{
                fontSize: 30,
                height: 50,
                padding: 0,
                paddingTop: 3,
                paddingBottom: 0,
                paddingRight: 30,
                paddingLeft: 30,
                margin: 15,
                marginBottom: 0,
                background: '#efefef',
                boxShadow: '4px 4px 10px 4px rgba(75, 75, 75, 0.11)',
                color: 'rgb(87, 87, 87)',
                fontFamily: 'Oxanium, serif',
                fontWeight: 'bold',
                borderStyle: 'none',
                borderRadius: 15,
              }}
            >
              Full Stack
            </button>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                fontSize: 30,
                height: 50,
                padding: 0,
                paddingTop: 3,
                paddingBottom: 0,
                paddingRight: 30,
                paddingLeft: 30,
                margin: 15,
                marginBottom: 0,
                background: '#efefef',
                boxShadow: '4px 4px 10px 4px rgba(75, 75, 75, 0.11)',
                color: 'rgb(87, 87, 87)',
                fontFamily: 'Oxanium, serif',
                fontWeight: 'bold',
                borderStyle: 'none',
                borderRadius: 15,
              }}
            >
              Business
            </button>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                fontSize: 30,
                height: 50,
                padding: 0,
                paddingTop: 3,
                paddingBottom: 0,
                paddingRight: 30,
                paddingLeft: 30,
                margin: 15,
                marginBottom: 0,
                background: '#efefef',
                boxShadow: '4px 4px 10px 4px rgba(75, 75, 75, 0.11)',
                color: 'rgb(87, 87, 87)',
                fontFamily: 'Oxanium, serif',
                fontWeight: 'bold',
                borderStyle: 'none',
                borderRadius: 15,
              }}
            >
              AWS
            </button>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                fontSize: 30,
                height: 50,
                padding: 0,
                paddingTop: 3,
                paddingBottom: 0,
                paddingRight: 30,
                paddingLeft: 30,
                margin: 15,
                marginBottom: 0,
                background: '#efefef',
                boxShadow: '4px 4px 10px 4px rgba(75, 75, 75, 0.11)',
                color: 'rgb(87, 87, 87)',
                fontFamily: 'Oxanium, serif',
                fontWeight: 'bold',
                borderStyle: 'none',
                borderRadius: 15,
              }}
            >
              Google Cloud
            </button>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                fontSize: 30,
                height: 50,
                padding: 0,
                paddingTop: 3,
                paddingBottom: 0,
                paddingRight: 30,
                paddingLeft: 30,
                margin: 15,
                marginBottom: 0,
                background: '#efefef',
                boxShadow: '4px 4px 10px 4px rgba(75, 75, 75, 0.11)',
                color: 'rgb(87, 87, 87)',
                fontFamily: 'Oxanium, serif',
                fontWeight: 'bold',
                borderStyle: 'none',
                borderRadius: 15,
              }}
            >
              Machine Learning
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
