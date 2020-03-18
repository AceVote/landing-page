import React from "react";

import logo from "../images/logo.png";
const Footer = () => {
  return (
    <>
      <footer class="section-spacer footer-section">
        <div class="container">
          <div class="row flex-column-reverse flex-sm-row flex-lg-row">
            <div class="col-md-4 col-12">
              <div class="footer-widget first-of-footer-widget">
                <img src={logo} class="logo-sm mb-10" alt="logo" />
                <p>&copy; 20130 | All Rights Reserved.</p>
                <span>Feel free to drop us an email at </span>
                <a href="mailto:acevote11@gmail.com">acevote11@gmail.com</a>
              </div>
            </div>

            <div class="col-md-4 col-6">
              <div class="footer-widget">
                <h4 class="footer-widget__title">Partners</h4>
                <ul>
                  <li class="list-unstyled">
                    <li>NaijaHacks</li>
                    <li>BizSkill Academy</li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
