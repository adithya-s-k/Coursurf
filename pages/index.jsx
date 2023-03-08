import Head from 'next/head';
import Card from '../components/cardMain';
import Search from '../components/search';
import { CardSkeleton } from '../components/skeleton';
import Titles from '../components/Titles';
import Provider from '../components/provider';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coursurf</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Coursurf is the ultimate online platform for finding and comparing courses from top providers. With Coursurf, you can easily search and compare courses based on your interests, budget, and learning goals. Whether you're looking to upskill in a new subject, enhance your career prospects, or simply follow a personal passion, Coursurf provides you with all the information you need to make informed decisions about your education. Our website aggregates courses from leading providers, so you can compare options and find the perfect course for you. Get started today and take the first step towards reaching your educational goals."
        />
      </Head>

      <section id="hero-section">
        <div className="content">
          <h1>Let&apos;s get you a new course</h1>
          <Search />
        </div>
      </section>

      <section id="institutions">
        <Titles
          certificate="Courses and Specializations"
          heading="Advance your career with new skills"
          desc="Choose from over 4,000 courses in topics like business analytics, graphic design, Python, and more."
        />
        <div className="card-container">
          <div className="universities">
            <h1>1000+ Universities</h1>
            <div className="university-cards">
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Fcoursera-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=25870ffbba482c2c8dca6ab7233fa851"
                name="Coursera"
                number="100"
              />
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Fudemy-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=918f4790c5c5818a022e23be21061434"
                name="Udemy"
                number="300"
              />
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Fcoursera-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=25870ffbba482c2c8dca6ab7233fa851"
                name="Coursera"
                number="100"
              />
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Fudemy-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=918f4790c5c5818a022e23be21061434"
                name="Udemy"
                number="300"
              />
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Fedx-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=86be374faaa2c332611cd8a1cb508975"
                name="edX"
                number="400"
              />
            </div>
            <Link href="/" aria-label="browse universities">
              Browse Universities
            </Link>
          </div>

          <div className="providers">
            <h1>70 Provideres</h1>
            <div className="provider-cards">
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Flinkedin-learning-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=7deeee41ea2d12f795bfdc405a89c496"
                name="Linkedin"
                number="6600"
              />
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Fskillshare-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=d9e51a1e711dbb0e1cb34e4c63551231"
                name="SkillShare"
                number="400"
              />
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Fedx-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=86be374faaa2c332611cd8a1cb508975"
                name="edX"
                number="400"
              />
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Flinkedin-learning-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=7deeee41ea2d12f795bfdc405a89c496"
                name="Linkedin"
                number="6600"
              />
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Fskillshare-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=d9e51a1e711dbb0e1cb34e4c63551231"
                name="SkillShare"
                number="400"
              />
            </div>
            <Link href="/" aria-label="browse universities">
              Browse Providers
            </Link>
          </div>

          <div className="institutions">
            <h1>600+ Institutions</h1>
            <div className="institution-cards">
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Flinkedin-learning-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=7deeee41ea2d12f795bfdc405a89c496"
                name="Linkedin"
                number="6600"
              />
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Fskillshare-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=d9e51a1e711dbb0e1cb34e4c63551231"
                name="SkillShare"
                number="400"
              />
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Fedx-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=86be374faaa2c332611cd8a1cb508975"
                name="edX"
                number="400"
              />
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Flinkedin-learning-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=7deeee41ea2d12f795bfdc405a89c496"
                name="Linkedin"
                number="6600"
              />
              <Provider
                imgSrc="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Fskillshare-trn-sq.png?auto=format&cs=strip&fit=&h=50&ixlib=php-3.3.1&w=50&s=d9e51a1e711dbb0e1cb34e4c63551231"
                name="SkillShare"
                number="400"
              />
            </div>
            <Link href="/" aria-label="browse universities">
              Browse Institutions
            </Link>
          </div>
        </div>
      </section>

      <section id="trending-courses">
        <Titles
          certificate="Master's and Bachelor's Degrees"
          heading="Find a top degree that fits your life"
          desc="Breakthrough pricing on 100% online degrees from top universities."
        />
        <div className="card-container">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}
