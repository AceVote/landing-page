import React from "react";
import voting from "../assets/voting.png";
import "./style/style.css";
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
                    <h2 className="zuri">Ace Vote Nigeria</h2>
                  </div>
                  <div className="Hero--Subtitle">
                    <p className="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur fugiat impedit voluptatem inventore quidem sunt,
                      quia natus odio eligendi excepturi nulla nobis tempore
                      repellendus ullam quae suscipit, porro minima neque.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-5 ml-auto ml-pic">
              <div className="hero-figure">
                <img
                  src={voting}
                  className="img-fluid w-100"
                  alt="Illustration of election"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
