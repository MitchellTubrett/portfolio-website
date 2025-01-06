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
        date="2010"
        iconStyle={{ background: "#007bff", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Server , Bartender</h3>
        <p>Started my first job as a server / bartender while I attended St. Thomas University.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2013"
        iconStyle={{ background: "#007bff", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Key holder, Manager</h3>
        <p>After being in the industry a few years while going through school I became a Manager at different Montana's around NB / NS</p>
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
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">
          NSCC
        </h3>
        <p>
          I began my education at NSCC for the programming distinction.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
