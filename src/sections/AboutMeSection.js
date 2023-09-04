import React, { useRef, useEffect, useState } from "react";
import { Zigzag } from "../styling/Zigzag";
import "./AboutMeSection.scss";

export function AboutMeSection(props) {
  const { scrollPosition, windowHeight, borderWidth } = props;
  const [titleTextIsVisible, setTitleTextIsVisible] = useState(false);
  const [skillsSectionIsVisible, setSkillsSectionIsVisible] = useState(false);
  const titleTextVisibilityMarker = useRef(null);
  const skillsSectionVisibilityMarker = useRef(null);
  const [skillsSectionOffset, setSkillsSectionOffset] = useState(0);

  useEffect(() => {
    if (!titleTextIsVisible) {
      setTitleTextIsVisible(
        titleTextVisibilityMarker.current.getBoundingClientRect().bottom -
          windowHeight -
          borderWidth <
          0
      );
    }
    const bottom =
      skillsSectionVisibilityMarker.current.getBoundingClientRect().bottom;
    const height =
      skillsSectionVisibilityMarker.current.getBoundingClientRect().height;
    setSkillsSectionOffset(
      (skillsSectionVisibilityMarker.current.getBoundingClientRect().top -
        windowHeight / 2 +
        height / 2 -
        borderWidth) /
        2
    );
    if (
      !skillsSectionIsVisible &&
      skillsSectionVisibilityMarker.current.getBoundingClientRect().top -
        windowHeight / 1.5 -
        borderWidth <
        0
    )
      setSkillsSectionIsVisible(true);
  }, [
    scrollPosition,
    windowHeight,
    borderWidth,
    titleTextIsVisible,
    skillsSectionOffset,
    skillsSectionIsVisible,
  ]);

  return (
    <div className="about-me-section">
      <div ref={titleTextVisibilityMarker} className="title-section">
        <div
          className={`zigzag-wrapper${titleTextIsVisible ? " visible" : ""}`}
        >
          <Zigzag className="zigzag" />
        </div>
        <div className="text-wrapper">
          <h2 className={`text${titleTextIsVisible ? " visible" : ""}`}>
            About
          </h2>
        </div>
        <div className="text-wrapper">
          <h2 className={`text${titleTextIsVisible ? " visible" : ""}`}>Me.</h2>
        </div>
      </div>
      <div className="content-section">
        <div className="text-section">
          <p className="text">
            I am a <b>Full Stack Typescript</b> developer who loves building
            exciting, engaging, experiences on the web using <b>React</b> and{" "}
            <b>Node.js</b>.
          </p>
          <p className="text">
            The end user experience is the sum of the design, front end, and
            back end all working harmoniously with one another. I am passionate
            about all three, and I strive to create the best possible experience
            for the end user.
          </p>
          <p className="text">
            I believe that well-crafted animations can play a pivotal role in
            enhancing usability. Thoughtful animations can guide users and
            elevate the overall experience of an application.
          </p>
        </div>
        <div
          ref={skillsSectionVisibilityMarker}
          className="skills-section-main-wrapper"
        >
          <div
            className={`skills-section-offset-wrapper${
              skillsSectionIsVisible ? " visible" : ""
            }`}
            style={{ top: `${skillsSectionOffset}px` }}
          >
            <div className="section-wrapper developer">
              <div className="title-wrapper">
                <div
                  className={`zigzag-wrapper${
                    skillsSectionIsVisible ? " visible" : ""
                  }`}
                >
                  <Zigzag className="zigzag" />
                </div>
                <h2 className="title">Developer</h2>
              </div>
              <div className="skills-wrapper developer desktop">
                <p>Typescript</p>
                <p>React</p>
                <p>Node.js</p>
                <p>Redux</p>
                <p>SQL</p>
                <p>CSS</p>
                <p>Docker</p>
                <p>Jest</p>
                <p>Git</p>
                <p>Linux</p>
              </div>
              <div className="skills-wrapper developer small-tablet">
                <p>Typescript</p>
                <p>React</p>
                <p>Redux</p>
                <p>Node.js</p>
                <p>SQL</p>
                <p>CSS</p>
                <p>Docker</p>
                <p>Jest</p>
                <p>Git</p>
                <p>Linux</p>
              </div>
            </div>
            <div className="section-wrapper designer">
              <div className="title-wrapper">
                <div
                  className={`zigzag-wrapper${
                    skillsSectionIsVisible ? " visible" : ""
                  }`}
                >
                  <Zigzag className="zigzag" />
                </div>
                <h2 className="title">Designer</h2>
              </div>
              <div className="skills-wrapper designer">
                <p>Adobe XD</p>
                <p>Figma</p>
                <p>Adobe Photoshop</p>
                <p>Balsamiq</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
