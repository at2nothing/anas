/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Future-Building Software Engineering Student, Innovation Through Collaboration";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Cloud computing",
  "Artificial intelligence",
  "C++",
  "React",
  "Raspberry Pi",
  "Robotics",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As you explore my online portfolio, you'll notice my insatiable curiosity and passion for exploring the frontiers of technology. I am a highly motivated learner and innovator with a diverse skillset that includes expertise in utilizing AI to tackle real-world problems across a variety of domains, developing scalable solutions through deep knowledge of cloud platforms, crafting efficient and robust software applications using Python, C++, and Raspberry Pi, and creating innovative robotic solutions that demonstrate my technical prowess.\n\nWhile I am dedicated to individual projects, my ultimate goal is to harness the transformative power of artificial intelligence in collaboration with like-minded individuals and organizations. As an entrepreneur, I strive to contribute to groundbreaking solutions that positively impact the world. I value diversity and teamwork and welcome new ideas, feedback, and collaborative opportunities.\n\nIf you share my vision of leveraging technology for a better future, I encourage you to connect with me. Together, let's embark on an innovative journey.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
