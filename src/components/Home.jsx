import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Sam</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Sam Kumar is an accomplished Full Stack Developer with an extensive
            skill set in building dynamic and interactive web applications. He
            has a solid foundation in React JS, Springboot, JPA, Hibernate,
            Postgres, Lombok, Swagger, and Postman. His dedication to his craft
            and passion for programming has led him to develop robust and
            scalable solutions that exceed client expectations. <br />
            Sam completed his B.Tech in Electronics and Communication from
            Jaipur Engineering College and Research Center, where he gained a
            strong understanding of the core principles of engineering. His
            education has provided him with a solid foundation in
            problem-solving and critical thinking, which he applies to his work
            as a developer.
            <br /> Sam is a highly motivated and detail-oriented professional
            who strives to create efficient, high-quality code. His expertise in
            various programming languages and frameworks, such as React, HTML,
            CSS, JS, Redux, React Router DOM, and Axios, makes him an asset to
            any project. With a keen eye for design and user experience, Sam has
            delivered exceptional solutions that have won the admiration of
            clients and users alike.
            <br /> In addition to his technical skills, Sam is an excellent
            communicator and collaborator. He has a proven track record of
            working effectively in teams and delivering projects on time. Sam's
            passion for learning and staying up-to-date with the latest
            technologies has also allowed him to keep pace with the
            ever-evolving tech landscape.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
