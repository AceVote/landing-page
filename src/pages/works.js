import React from "react";
import voting from "../assets/voting.png";
import result from "../assets/result.png";
import time from "../assets/time.png";
import twofactor from "../assets/two-factor.png";
const Works = () => {
  return (
    <>
      <section className="section-spacer bg-very__gray">
        <div className="container">
          <header className="section-header text-center">
            <h2 className="section-title">How AceVote works </h2>
          </header>
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="feature-list-image">
                <img
                  src={voting}
                  className="img-fluid"
                  alt="blockchain"
                  width="100%"
                  height="50%"
                />
              </div>
            </div>
            <div className="col-sm-5 ml-auto">
              <div className="feature-list-wrapper">
                <div className="content-header">
                  <h2 className="content-title">Create Election</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro veritatis in laboriosam iusto iste dolorum libero
                    provident? Ipsam aperiam illo blanditiis excepturi delectus
                    vel maxime deleniti inventore autem? Voluptas, commodi?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-spacer">
        <div className="container">
          <div className="row flex-column-reverse flex-sm-row align-items-cengit ter">
            <div className="col-sm-5 mr-auto">
              <div className="feature-list-wrapper">
                <div className="content-header">
                  <h2 className="content-title">Set Election Time</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro veritatis in laboriosam iusto iste dolorum libero
                    provident? Ipsam aperiam illo blanditiis excepturi delectus
                    vel maxime deleniti inventore autem? Voluptas, commodi?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="feature-list-image">
                <img
                  src={time}
                  alt="voting"
                  className="img-fluid"
                  height="60%"
                  width="90%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-spacer bg-very__gray">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="feature-list-image">
                <img
                  src={twofactor}
                  alt="voting"
                  className="img-fluid"
                  height="60%"
                  width="90%"
                />
              </div>
            </div>
            <div className="col-sm-5 ml-auto">
              <div className="feature-list-wrapper">
                <div className="content-header">
                  <h2 className="content-title">Join Election</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro veritatis in laboriosam iusto iste dolorum libero
                    provident? Ipsam aperiam illo blanditiis excepturi delectus
                    vel maxime deleniti inventore autem? Voluptas, commodi?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacer">
        <div className="container">
          <div className="row flex-column-reverse flex-sm-row align-items-cengit ter">
            <div className="col-sm-5 mr-auto">
              <div className="feature-list-wrapper">
                <div className="content-header">
                  <h2 className="content-title">Cast Vote</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro veritatis in laboriosam iusto iste dolorum libero
                    provident? Ipsam aperiam illo blanditiis excepturi delectus
                    vel maxime deleniti inventore autem? Voluptas, commodi?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="feature-list-image">
                <img
                  src={voting}
                  alt="voting"
                  className="img-fluid"
                  height="60%"
                  width="90%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-spacer bg-very__gray">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="feature-list-image">
                <img
                  src={result}
                  alt="voting"
                  className="img-fluid"
                  height="60%"
                  width="90%"
                />
              </div>
            </div>
            <div className="col-sm-5 ml-auto">
              <div className="feature-list-wrapper">
                <div className="content-header">
                  <h2 className="content-title">Watch Realtime Results</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro veritatis in laboriosam iusto iste dolorum libero
                    provident? Ipsam aperiam illo blanditiis excepturi delectus
                    vel maxime deleniti inventore autem? Voluptas, commodi?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
