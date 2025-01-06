import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa"; // Import icons

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2009"
        iconStyle={{ background: "#333", color: "#fff" }}
        icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title">
          Finished High School
        </h3>
        <p>Completed my high school education at Sackville High School</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2017"
        iconStyle={{ background: "#007bff", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Hospitality Management</h3>
        <p>Initially out of school I went to the university of St. Thomas where I picked up a position as a server. Over the next few years I transitioned to Bartender, to Keyholder,
            to Manager. I managed both the Kitchen and Bar at different establishments, with the main one being the franchise Montana's.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017"
        iconStyle={{ background: "#28a745", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">
          Account Manager - Xerox
        </h3>
        <p>After a few years in the service industry I was approached by someone who works at a reseller of Xerox in Nova Scotia. They brought me on as an account manager for the Dartmouth
            territory.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019"
        iconStyle={{ background: "#ff4500", color: "#fff" }}
        icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title">
          NSCC
        </h3>
        <p>
          I began my education at NSCC for the programming distinction.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021"
        iconStyle={{ background: "#ff4500", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">
          NSCC
        </h3>
        <p>
          Graduated from NSCC with a diploma in IT-Programming with distinction
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021"
        iconStyle={{ background: "#ff4500", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">
          Pineapple Bytes - Junior developer & Analyst
        </h3>
        <p>
          I was initially hired as an Analyst out of school by Pineapple Bytes who made me a developer. I worked on integrations with Aloha and Counterpoint. I built different
          plugins that ran reports on their databases, customer reset functions, and general efficiency improvements through scripting and automation.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
