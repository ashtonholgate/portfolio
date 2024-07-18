import React, { useRef, useEffect, useState } from "react";
import { Zigzag } from "../styling/Zigzag";
import "./ExperienceSection.scss";
import moment from "moment";

export function ExperienceSection(props) {
  const { scrollPosition, windowHeight, borderWidth } = props;
  const [titleTextIsVisible, setTitleTextIsVisible] = useState(false);
  const titleTextVisibilityMarker = useRef(null);
  const ImageVisibilityMarker = useRef(null);
  const [ImageOffset, setImageOffset] = useState(0);

  useEffect(() => {
    if (!titleTextIsVisible) {
      setTitleTextIsVisible(
        titleTextVisibilityMarker.current.getBoundingClientRect().bottom -
          windowHeight -
          borderWidth <
          0
      );
    }
    const top = ImageVisibilityMarker.current.getBoundingClientRect().top;
    setImageOffset((top - windowHeight - borderWidth) / 2);
  }, [
    scrollPosition,
    windowHeight,
    borderWidth,
    titleTextIsVisible,
    ImageOffset,
  ]);

  const daemonStartDate = moment([2023, 11]);
  const daemonEndDate = moment();
  const daemonYears = daemonEndDate.diff(daemonStartDate, "years");
  const daemonMonths = daemonEndDate.diff(daemonStartDate, "months") % 12;
  const luxtripperStartDate = moment([2017, 9]);
  const luxtripperEndDate = moment([2023, 9]);
  const luxtripperYears = luxtripperEndDate.diff(luxtripperStartDate, "years");

  return (
    <div className="experience-section">
      <div ref={titleTextVisibilityMarker} className="title-section">
        <div
          className={`zigzag-wrapper${titleTextIsVisible ? " visible" : ""}`}
        >
          <Zigzag className="zigzag" />
        </div>
        <div className="text-wrapper">
          <h2 className={`text${titleTextIsVisible ? " visible" : ""}`}>
            Expe
          </h2>
        </div>
        <div className="text-wrapper">
          <h2 className={`text${titleTextIsVisible ? " visible" : ""}`}>
            rience.
          </h2>
        </div>
      </div>
      <div className="content-section">
        <div className="text-section">
          <a
            className="title-section"
            href="//www.dae.mn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="title">Daemon</p>
            <p className="sub-title">Senior Consultant</p>
            <p className="post-title">
              December 2023 - Present •{" "}
              {daemonYears ? `${daemonYears} Years ` : ""}
              {daemonMonths} Months
            </p>
          </a>
          <p className="text">
            At Daemon, I am a Senior Consultant, responsible for delivering
            projects and mentoring less experienced colleagues. Key achievements
            include:
          </p>
          <ul className="text">
            <li>
              Designed and built a 2-dimensional floor-plan manipulator, using
              React, Typescript, and HTML canvas, for Sainsbury’s. This system
              allowed users to group fixtures into temperature zones, define
              optimal paths, and supported drag-and-drop, zooming, panning, and
              rendering complex connections.
            </li>
            <li>
              Significantly contributed to the overall architecture plan for a
              large microservice-based system for Sainsbury’s, which used Kafka
              topics as one of its primary data sources.
            </li>
            <li>
              Led the UX, UI, and general architecture of an internal AI project
              to analyse and optimise a collection of Confluence pages.
            </li>
            <li>
              Guided and mentored junior colleagues, ensuring their growth and
              development within their roles.
            </li>
          </ul>
          <a
            className="title-section"
            href="//www.luxtripper.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="title">Luxtripper</p>
            <p className="sub-title">Full Stack Software Developer</p>
            <p className="post-title">
              Oct 2017 - October 2023 • {luxtripperYears} Years
            </p>
          </a>
          <p className="text">
            Over my tenure at Luxtripper, I've grown from a Junior Front End
            Developer to a Full Stack Software Developer, progressively taking
            on more intricate projects and responsibilities. The technical
            stack, at a high level, is <b>React</b>, <b>Node.js</b> and{" "}
            <b>SQL</b>, with many other supporting technologies utilized. Below
            are some of the key projects I've helped bring to fruition:
          </p>
          <ul className="text">
            <li>
              <b>Itinerary Builder</b> used by sales staff to construct
              international itineraries to sell to customers. Includes
              multi-layered nested form manipulation, relational validation
              rules (such as chronological line item validation, or ensuring
              that an activity happens during a hotel stay), drag and drop
              functionality, all while ensuring optimal performance in React.
            </li>
            <li>
              <b>Online Itinerary Viewer</b> for customers to view the
              itineraries that were made for them. I personally designed and
              built this side of the system, which was so successful it was
              responsible for a <b>270% increase in conversion</b>, has been
              used as a show piece to investors and shareholders, and has been
              used by the industry for inspiration for their own products.
            </li>
            <li>
              <b>Internal CMS</b> to support the selling, and continued
              management, of said itineraries. Includes a sales pipeline system
              with drag and drop functionality allowing managers to get
              immediate insight into salespeople’s estimates of when their leads
              are likely to sell.
            </li>
            <li>
              <b>Hotel Contract Editor & Searcher</b> which allows users to load
              in contracts that Luxtripper holds with hoteliers and then search
              through them, given various inputs, to have a 'calculated stay'
              generated for them. This stay would include the total cost, the
              room and rate that they would be on, and all perks available
              during that stay based on their room and rate. These stays are
              saved for future consumption, but can be converted into hotel line
              items for the itinerary builder and pasted in with a single click.
            </li>
            <li>
              <b>Automated Email Scheduling System</b> for sending emails to
              customers automatically, such as payment reminders, travel
              reminders, and post travel well wishes.
            </li>
            <li>
              <b>PDF Generators</b> which customers could use to generate
              offline versions of their itineraries, or Luxtripper could use to
              generate travel documents.
            </li>
            <li>
              <b>Autosaving Flight Pricing System</b> with all the complexity
              mentioned in the itinerary builder, but also will full auto-saving
              across the system. Both communicating this feature to users, and
              architecting the system itself, were instructive and exciting
              challenges that I was proud to overcome.
            </li>
            <li>
              <b>Buy Online System</b>, allowing customers to buy itineraries
              without reaching out to customers directly. Internal users can
              load itineraries, using the Itinerary Builder, and define
              availability and pricing periods for customers to then buy
              directly on the website.
            </li>
          </ul>
        </div>
        <div ref={ImageVisibilityMarker} className="images-wrapper">
          <div className="phone-main-wrapper">
            <div
              className="phone-frame"
              style={{
                transform: `translateY(${ImageOffset / 2}px) rotateX(${
                  ImageOffset / 50
                }deg) rotateY(${ImageOffset / 50}deg) rotateZ(${
                  ImageOffset / 50
                }deg)`,
              }}
            >
              <div className="phone-notch" />
              <img
                className="phone-content"
                src={require("../images/luxtripper/quote.png")}
                alt="Luxtripper iPhone"
                style={{ transform: `translateY(${ImageOffset * 2}px)` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
