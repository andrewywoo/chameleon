import React from "react";
import classes from "./About.module.css";
import SocialMediaBar from "./SocialMediaBar/SocialMediaBar";
import pfPic from "./../../assets/profilepic.jpg";

const about = () => {
  return (
    <>
      <img
        className={classes.profilePic}
        src={pfPic}
        alt="Andrew Woo's Profile"
      />
      <div className={classes.bio}>
        <div className={classes.bioTitle}>
          <h2>
            HELLO I'M <span style={{ color: "#f3d516" }}>ANDREW WOO</span>
          </h2>
          <h3>Full Stack Software Engineer | Web Engineer</h3>
        </div>
        <div className={classes.bioDes}>
          <ul>
            <li>
              I'm a highly motivated individual with an interest in the growing
              trend of modern web applications. Solving complex problems and
              keeping up with current technology is something I have a passion
              for. I am currently working in FinTech building large scale
              applications but spend a good amount of time working on side
              projects. Feel free to contact me with job opportunities.
            </li>
          </ul>
        </div>
        <div className={classes.bioInfo}>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto: andrew.woo@verizon.net">
                andrew.woo@verizon.net
              </a>
            </li>
            <li>
              <button className={classes.resumeDl}>Download Resume</button>
            </li>
          </ul>
        </div>
      </div>
      <SocialMediaBar />
    </>
  );
};

export default about;
