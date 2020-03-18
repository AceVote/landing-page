import React from "react";
import Team from "../pages/team";
import Blockchain from "../assets/blockchain-iilustration.png";
import "./style/style.css";
import Works from "../pages/works";
import { FaRocket, FaLightbulb, FaUser } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6">
              <div className="hero-content">
                <div className="hero-title__group">
                  <div className="hero-title">
                    <h2 className="zuri">
                      Ace Vote Nigeria is a secure end to end voting platform
                    </h2>
                  </div>
                  <div className="Hero--Subtitle">
                    <p className="lead">
                      Built on top of Ethereum Blockchain, Ace vote is a secure,
                      transperent and credible voting platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-5 ml-auto ml-pic">
              <div className="hero-figure">
                <img
                  src={Blockchain}
                  className="img-fluid w-100"
                  alt="Illustration of election"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section-spacer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="feature-card">
                <div className="feature-card__body">
                  <FaRocket className="ghost-green" />
                  <h4 className="feature-title">Concept of Ace Vote</h4>
                  <p>
                    Ace Vote is an autonomous and decentralized voting
                    application that runs on Ethereum blockchain, using several
                    consensus protocol for users verification
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="feature-card">
                <div className="feature-card__body">
                  <FaLightbulb className="ghost-blue" />
                  <h4 className="feature-title">Why Ace Vote?</h4>
                  <p>
                    Voting refers to a formal expression of opinion or will in
                    response to a proposed candidate for office. Ace vote solves
                    the problem of lack of security during elections, lack of
                    trust in the electoral process, corrupt practices and the
                    disinformation of voters. Also, the paper voting system is
                    not environmentally friendly as it eventually plays a role
                    in carbon emission.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="feature-card m-0">
                <div className="feature-card__body">
                  <FaUser className="ghost-red" />
                  <h4 className="feature-title">Target audience</h4>
                  <p>
                    Our Application is not only limited to goverment
                    instituions, but also schools, private organisation, etc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Works />
      <Team />
    </>
  );
};

export default Home;
