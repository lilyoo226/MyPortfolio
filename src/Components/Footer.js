import React from "react";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__builder">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-left">
                {/* social */}
                <div
                  className="social-links scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <a target="_blank" rel="nofollow" href="https://twitter.com/samuellove226">
                    <i aria-hidden="true" className="fab fa-twitter" />
                  </a>
                  <a target="_blank" rel="nofollow" href="https://instagram.com/adoberich">
                    <i aria-hidden="true" className="fab fa-instagram" />
                  </a>
                  <a target="_blank" rel="nofollow" href="https://github.com/lilyoo226">
                    <i aria-hidden="true" className="fab fa-github" />
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center">
                <div
                  className="copyright-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  © 2022 Samuel. All Rights Reserved
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <div
                  className="copyright-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Developed by <strong>Samuel Amoah</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
