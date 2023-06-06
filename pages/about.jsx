/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React from 'react';

const About = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 relative  bottom-10 ">
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-6/12">
            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-black leading-9">
            Coursurf is an online platform designed to help individuals find
              and compare courses from top providers.
            </h2>
            <p className="font-normal text-base leading-6 text-gray-900 dark:text-gray-900 mt-6">
            Whether you&lsquo;re looking to learn a new skill, advance your career,
              or simply explore your interests, Coursurf provides a
              one-stop-shop for all your educational needs. Coursurf offers a
              user-friendly interface that allows you to search and compare
              courses based on your interests, budget, and goals. Our platform
              provides detailed information on each course, including reviews,
              ratings, and accreditation, to help you make informed decisions
              about your education.
              <br />
              <br />
              At Coursurf, we believe that education should be accessible to
              everyone. That&lsquo;s why we strive to make our platform easy to use
              and affordable, so that anyone can find the course that&lsquo;s right
              for them.
              <br />
              <br />
              Whether you&lsquo;re a student, a working professional, or simply
              someone looking to learn something new, Coursurf is here to help
              you start your educational journey.
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <img
              className="lg:block hidden w-full"
              src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif"
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full"
              src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
              alt="people discussing on board"
            />
            <img
              className="sm:hidden block w-full"
              src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
              alt="people discussing on board"
            />
          </div>
        </div>

        <div className="relative mt-24">
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg"
                alt="flag"
              />
            </div>

            <img
              className="z-20"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg"
              alt="note"
            />

            <img
              className="z-20 sm:block hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
              alt="users"
            />
          </div>
          <hr className="z-10 absolute top-2/4 w-full bg-gray-900" />
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-black mt-6">
              Founded
            </p>
            <p className="font-normal text-base leading-6 text-gray-900 dark:text-gray-900 mt-6">
            Coursurf was founded by Adithya S Kolavi, A Sakthe Balan, and
              Sarang Kumar, a group of students with a shared passion for
              education and a desire to make learning more accessible and
              enjoyable for individuals across the globe.
            </p>
          </div>
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-black mt-6">
              Content
            </p>
            <p className="font-normal text-base leading-6 text-gray-900 dark:text-gray-900 mt-6">
            Coursurf&lsquo;s comprehensive course catalog includes content from top
              course providers in various fields, ensuring that users have
              access to high-quality educational opportunities that are tailored
              to their interests and goals.
            </p>
          </div>
          <div className="sm:block hidden">
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-black mt-6">
              Goal
            </p>
            <p className="font-normal text-base leading-6 text-gray-900 dark:text-gray-900 mt-6">
            Coursurf&lsquo;s goal is to empower individuals by providing them with
              access to high-quality educational opportunities that are tailored
              to their interests, budget, and goals.
            </p>
          </div>
        </div>
        <div className="sm:hidden block relative mt-8">
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
              alt="user"
            />
          </div>
          <hr className="z-10 absolute top-2/4 w-full bg-gray-900" />
        </div>
        <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-black mt-6">
              400k User
            </p>
            <p className="font-normal text-base leading-6 text-gray-900 dark:text-gray-900 mt-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
          <div className="w-full lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-black">
              Our Mission
            </h2>
            <p className="font-normal text-base leading-6 text-gray-900 dark:text-gray-900 mt-6 w-full lg:w-10/12 xl:w-9/12">
            The mission of Coursurf is to empower individuals by providing
              them with access to high-quality educational opportunities that
              are tailored to their interests, budget, and goals. Coursurf aims
              to be the go-to platform for anyone seeking to learn new skills,
              advance their careers, or explore their passions. By offering a
              comprehensive catalog of courses from top providers, and providing
              users with the information they need to make informed decisions
              about their education, Coursurf seeks to make learning more
              accessible, affordable, and enjoyable for everyone.
            </p>
            <p className="font-normal text-base leading-6 text-gray-900 dark:text-gray-900 w-full lg:w-10/12 xl:w-9/12 mt-10">
            Coursurf&lsquo;s mission is to make learning more accessible,
              affordable, and enjoyable for everyone. By providing individuals
              with the tools and resources they need to pursue their educational
              goals, Coursurf is helping to create a more informed and empowered
              society.
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
              <div className="flex p-4 shadow-md">
                <div className="mr-6">
                  <img
                    className="mr-6"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg4.svg"
                    alt="team card"
                  />
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-black">
                    Team
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-900 dark:text-gray-900">
                  Coursurf&lsquo;s team embodies a collaborative, innovative, and
                    resourceful spirit that is dedicated to providing
                    high-quality educational opportunities and making learning
                    accessible and enjoyable for everyone.
                  </p>
                </div>
              </div>

              <div className="flex p-4 shadow-md">
                <div className="mr-6">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg5.svg"
                    alt="board card"
                  />
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-black">
                    Board
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-900 dark:text-gray-900">
                  Coursurf is a platform that was founded by students with
                    personal experience in various fields, which enables them to
                    provide an educational platform that is tailored to the
                    needs of learners
                  </p>
                </div>
              </div>

              <div className="flex p-4 shadow-md">
                <div className="mr-6">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg6.svg"
                    alt="press card"
                  />
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-black">
                    Press
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-900 dark:text-gray-900">
                  Individuals interested in contacting Coursurf can easily do
                    so by visiting our website and accessing our contact form or
                    email address listed in the &quot;Contact Us&quot; section.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact us */}
      <div className="bg-grey rounded-md shadow-md p-6 relative left-10 xs:left-auto md:left-[130px] bottom-5 w-5/6 border-2">

  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label htmlFor="name" className="block font-medium mb-2">
        Name
      </label>
      <input
        id="name"
        type="text"
        className="w-full border-black-600 rounded-md p-2 border-gray-300 border-2"
        onChange={(event) => setName(event.target.value)}
      />
    </div>
    <div>
      <label htmlFor="email" className=" block font-medium mb-2">
        Email
      </label>
      <input
        id="email"
        type="email"
        className="w-full border-black-300 rounded-md p-2 border-gray-300 border-2"
        onChange={(event) => setEmail(event.target.value)}
      />
    </div>
    <div className="col-span-1 md:col-span-2">
      <label htmlFor="message" className="block font-medium mb-2">
        Message
      </label>
      <textarea
        id="message"
        className="w-full border-black-300 rounded-md p-2 border-gray-300 border-2"
        rows="5"
        onChange={(event) => setMessage(event.target.value)}
      ></textarea>
    </div>
    <div className="col-span-1 md:col-span-2">
      <button
        type="submit"
        className="bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
      >
        Send
      </button>
    </div>
  </form>
</div>
</div>

  );
};

export default About;
