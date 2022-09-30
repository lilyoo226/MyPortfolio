import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        <section
          className="section section-bg section-parallax-1"
          id="about-section"
        >
          <div className="container">
            {/* Section Heading */}
            <div className="m-titles">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="chars"
                data-animate="active"
              >
                About Me
              </h2>
            </div>
            <div className="row row-custom">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
                {/* Section numbers */}
                <div className="numbers-items">
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-check-circle" />
                    </div>
                    <div className="num">124</div>
                    <div className="title">
                      Completed <br />
                      Project
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-smile-beam" />
                    </div>
                    <div className="num">65</div>
                    <div className="title">
                      Happy <br />
                      Clients
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-gem" />
                    </div>
                    <div className="num">6</div>
                    <div className="title">
                      Awards <br />
                      Won
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
                {/* Section Profile */}
                <div className="profile-box">
                  <div
                    className="text scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <p>
                      Hi, I’m Samuel. I'm a multi-talented human with over 2+
                      years of experiences in wide range of design disciplines.
                    </p>
                    <p>
                      Since 2020, I've enjoyed turning complex problems into
                      simple, beautiful and intuitive designs. When I'm not
                      pushing pixels, you'll find me cooking, listening to music
                      or working out in the park.
                    </p>
                    <p>
                      I've been lucky enough to have my work featured in books,
                      magazines and websites around the world. I've also spoken
                      at various design events and enjoy sharing my love of
                      design on social media.
                    </p>
                    <Link
                      to="/contact"
                      className="btn scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Contact Me
                    </Link>
                    <div
                      className="signature scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <img
                        src="./assets/images/images-signature.png"
                        alt="Homie-sign"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
