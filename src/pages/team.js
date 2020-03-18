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
    twitterLink: "https://www.twitter.com/njokuScript",
    objectID: 1
  },
  {
    name: "Naheem Noah",
    title: "CO-Founder and CEO",
    role: "Business Developer",
    githubLink: "https://www.github.com/Khay-EMMA",
    linkedinLink: "https://www.github.com/Khay-EMMA",
    twitterLink: "https://www.twitter.com/njokuScript",
    objectID: 2
  },
  {
    name: "Akorede",
    title: "CO-Founder",
    role: "UI-UX Designer",
    githubLink: "https://www.github.com/Khay-EMMA",
    linkedinLink: "https://www.github.com/Khay-EMMA",
    twitterLink: "https://www.twitter.com/njokuScript",
    objectID: 3
  },
  {
    name: "Anthony",
    title: "CO-Founder",
    role: "Android Engineer",
    githubLink: "https://www.github.com/Khay-EMMA",
    linkedinLink: "https://www.github.com/Khay-EMMA",
    twitterLink: "https://www.twitter.com/njokuScript",
    objectID: 4
  }
];
const Team = () => {
  return (
    <>
      <section className="section-spacer team-section">
        <div className="container">
          <div className="row">
            <header className="text-center section-header">
              <h2 className="section-title">Meet The AceVote Team</h2>
              <p className="section-subtitle">
                Passionate Entrepreuners driving the success of AceVote.
              </p>
            </header>
            {team.map(item => {
              return (
                <div key={item.objectID} className="col-md-4 col-12 ">
                  <div className="card event-card">
                    <div className="card hovercard">
                      <div className="cardheader"></div>
                      <div className="avatar">
                        <img src={avatar} alt="lead avatar" />
                      </div>
                      <div className="info">
                        <div className="title">
                          <h5>{item.name}</h5>
                          <p>{item.title}</p>
                        </div>
                        <div className="desc">{item.role}</div>
                      </div>
                      <div className="bottom">
                        <ul className="social-list__inline mt-10">
                          <button type="button">
                            <li>
                              <FaTwitter />
                            </li>
                          </button>
                          <button>
                            <li>
                              <FaGithub />
                            </li>
                          </button>
                          <button>
                            <li>
                              <FaLinkedin />
                            </li>
                          </button>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
