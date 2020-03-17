import React from "react";
import avatar from "../assets/team/avatar.png";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
const team = [
  {
    name: "Njoku Emmanuel",
    title: "Founder and CTO",
    role: "Blockchain Engineer",
    githubLink: "https://www.github.com/Khay-EMMA",
    linkedinLink: "https://www.github.com/Khay-EMMA",
    twitterLink: "https://www.twitter.com/njokuScript"
  },
  {
    name: "Naheem Noah",
    title: "CO-Founder and CEO",
    role: "Business Developer",
    githubLink: "https://www.github.com/Khay-EMMA",
    linkedinLink: "https://www.github.com/Khay-EMMA",
    twitterLink: "https://www.twitter.com/njokuScript"
  },
  {
    name: "Akorede",
    title: "CO-Founder",
    role: "UI-UX Designer",
    githubLink: "https://www.github.com/Khay-EMMA",
    linkedinLink: "https://www.github.com/Khay-EMMA",
    twitterLink: "https://www.twitter.com/njokuScript"
  },
  {
    name: "Anthony",
    title: "CO-Founder",
    role: "Android Engineer",
    githubLink: "https://www.github.com/Khay-EMMA",
    linkedinLink: "https://www.github.com/Khay-EMMA",
    twitterLink: "https://www.twitter.com/njokuScript"
  }
];
const Team = () => {
  return (
    <section className="section-spacer team-section">
      <div className="container">
        <header className="text-center section-header">
          <h2 className="section-title">Meet The AceVote Team</h2>
          <p className="section-subtitle">
            Passionate Entrepreuners driving the success of AceVote.
          </p>
        </header>
        <div className="container-fluid">
          <div
            id="carouselExample"
            className="carouselPrograms carousel slide"
            data-ride="carousel"
            data-interval="false"
          >
            <div className="carousel-inner row w-100 mx-auto" role="listbox">
              <div className="carousel-item col-md-4 col-15 active">
                <div className="card event-card">
                  <div className="card hovercard">
                    <div className="cardheader"></div>
                    <div className="avatar">
                      <img src={avatar} alt="lead avatar" />
                    </div>
                    <div className="info">
                      <div className="title">
                        <h5>Name goes here</h5>
                        <p>Lead Organizer</p>
                      </div>
                      <div className="desc">Mobile and Web developer</div>
                      <div className="desc">Open source enthusiast</div>
                      <div className="desc">Community mentor</div>
                    </div>
                    <div className="bottom">
                      <ul className="social-list__inline mt-10">
                        <li>
                          <FaTwitter />
                        </li>
                        <li>
                          <FaGithub />
                        </li>
                        <li>
                          <FaLinkedin />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
