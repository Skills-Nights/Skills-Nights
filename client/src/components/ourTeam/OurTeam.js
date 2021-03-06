import React from "react";
import "./OurTeam.css";

import teamData from "./teamData";
import Card from "./card/Card";

const OurTeam = () => {
  const founder = teamData.filter((data)=> data.team === "founder")
  const heads = teamData.filter((data) => data.team === "heads");
  const developers = teamData.filter((data) => data.team === "developers");
  const contentWriters = teamData.filter((data) => data.team === "content");
  const designers = teamData.filter((data) => data.team === "designers");
  const management = teamData.filter((data) => data.team === "management");
  const video = teamData.filter((data) => data.team === "video");

  return (
    <div id="team" className="our-team-container">
      <div className="our-team-content">
        <div data-aos="zoom-in" className="team">
          <div className="team-heading">
            <h1>Founder</h1>
          </div>
          <div className="team-members">
            {founder.map((member) => {
              return <Card key={member.id} {...member}></Card>;
            })}
          </div>
        </div>
        <div data-aos="fade-up" className="team">
          <div className="team-heading">
            <h1>Heads</h1>
          </div>
          <div className="team-members">
            {heads.map((member) => {
              return <Card key={member.id} {...member}></Card>;
            })}
          </div>
        </div>
        <div data-aos="fade-down" className="team">
          <div className="team-heading">
            <h1>Developers</h1>
          </div>
          <div className="team-members">
            {developers.map((member) => {
              return <Card key={member.id} {...member}></Card>;
            })}
          </div>
        </div>
        <div data-aos="zoom-out" className="team">
          <div className="team-heading">
            <h1>Designers</h1>
          </div>
          <div className="team-members">
            {designers.map((member) => {
              return <Card key={member.id} {...member}></Card>;
            })}
          </div>
        </div>
        <div data-aos="zoom-in" className="team">
          <div className="team-heading">
            <h1>Content Writers</h1>
          </div>
          <div className="team-members">
            {contentWriters.map((member) => {
              return <Card key={member.id} {...member}></Card>;
            })}
          </div>
        </div>
        <div data-aos="fade-up" className="team">
          <div className="team-heading">
            <h1>Management</h1>
          </div>
          <div className="team-members">
            {management.map((member) => {
              return <Card key={member.id} {...member}></Card>;
            })}
          </div>
        </div>
        <div data-aos="fade-down" className="team">
          <div className="team-heading">
            <h1>Editors</h1>
          </div>
          <div className="team-members">
            {video.map((member) => {
              return <Card key={member.id} {...member}></Card>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
