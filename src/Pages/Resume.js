import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Resume extends Component {
  render() {
    return (
      <div>
        {" "}
        <section className="section section-parallax-2" id="resume-section">
          <div className="container">
            {/* Section Heading */}
            <div className="m-titles">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="chars"
                data-animate="active"
              >
                My Resume
              </h2>
            </div>
            <div className="row row-custom">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" />
              <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
                {/* Description */}
                <div
                  className="text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p>
                    A highly motivated and experienced developer with over 5
                    years of experience in the industry. I am skilled in a
                    variety of programming languages and have a strong
                    background in object-oriented programming and software
                    development. I have worked on large scale projects for
                    clients such as Mojave and among others. My greatest
                    strengths lie in my ability to solve complex problems
                    quickly and effectively.
                  </p>
                </div>
                {/* Skills */}
                <div className="skills-items">
                  <div
                    className="p-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    SKILLS
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="name">Javascipt</div>
                    <div className="dots dots-90">
                      <div className="dots-row">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">90%</span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="name">Photoshop</div>
                    <div className="dots dots-90">
                      <div className="dots-row">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">90%</span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="name">HTML</div>
                    <div className="dots dots-90">
                      <div className="dots-row">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">90%</span>
                    </div>
                  </div>

                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="name">CSS</div>
                    <div className="dots dots-90">
                      <div className="dots-row">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">90%</span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="name">React</div>
                    <div className="dots dots-80">
                      <div className="dots-row">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">80%</span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="name">Java</div>
                    <div className="dots dots-80">
                      <div className="dots-row">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">80%</span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="name">Python</div>
                    <div className="dots dots-60">
                      <div className="dots-row">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">60%</span>
                    </div>
                  </div>
                </div>
                {/* Services */}
                <div
                  className="p-title scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  SERVICES
                </div>
                <div className="services-items">
                  <div className="services-col">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fab fa-chrome" />
                      </div>
                      <div className="title">Web development</div>
                      <div className="text">
                        <p>
                          Modern and mobile-ready website that will help you
                          reach all of your marketing.
                        </p>
                      </div>
                      <Link to="#contact-section" className="lnk">
                        order now
                      </Link>
                    </div>
                  </div>
                  <div className="services-col">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i
                          aria-hidden="true"
                          className="fa fa-duotone fa-pen-ruler"
                        />
                      </div>
                      <div className="title">Graphic Designing</div>
                      <div className="text">
                        <p>
                          I have professional experience with Adobe Creative
                          Suite up to the latest versions, especially XD,
                          Photoshop, Illustrator, InDesign, AfterEffects, and
                          the ExtendScript Toolkit.
                        </p>
                      </div>
                      <Link to="#contact-section" className="lnk">
                        order now
                      </Link>
                    </div>
                  </div>
                  <div className="services-col">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fab fa-adversal" />
                      </div>
                      <div className="title">Advetising</div>
                      <div className="text">
                        <p>
                          Advertising services include television, radio, print,
                          mail, and web apps.
                        </p>
                      </div>
                      <Link to="#contact-section" className="lnk">
                        order now
                      </Link>
                    </div>
                  </div>
                  <div className="services-col">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-gamepad" />
                      </div>
                      <div className="title">App Development</div>
                      <div className="text">
                        <p>
                          Developing memorable and unique mobile android and ios
                          application.
                        </p>
                      </div>
                      <Link to="#contact-section" className="lnk">
                        order now
                      </Link>
                    </div>
                  </div>
                </div>
                {/* History */}
                <div className="history-left">
                  <div className="history-items">
                    <div
                      className="p-title scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      EDUCATION
                    </div>
                    <div
                      className="history-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="date">2022 - 2024</div>
                      <div className="name">Bachelor in Computer Science</div>
                      <div className="subname">Kumasi Technical University</div>
                    </div>
                    {/* <div
                      className="history-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="date">2006 - 2009</div>
                      <div className="name">Bachelors of FineArt</div>
                      <div className="subname">New York University</div>
                    </div> */}
                  </div>

                  {/* <div className="history-items">
                    <div
                      className="p-title scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      AWARDS
                    </div>
                    <div
                      className="history-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="date">2018 - </div>
                      <div className="name"></div>
                      <div className="text">
                        <p>
                          Euismod vel bibendum ultrices, fringilla vel eros,
                          donec euismod leo lectus.
                        </p>
                      </div>
                    </div>
                    <div
                      className="history-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="date">2015 - designnominees</div>
                      <div className="name">Site of the Week</div>
                      <div className="text">
                        <p>
                          Euismod vel bibendum ultrices, fringilla vel eros,
                          donec euismod leo lectus.
                        </p>
                      </div>
                    </div>
                  </div>   */}
                </div>
                <div className="history-right">
                  <div className="history-items">
                    <div
                      className="p-title scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      EXPERIENCE
                    </div>
                    <div
                      className="history-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="date">2021 - 2022</div>
                      <div className="name">Freelancer</div>
                      <div className="subname">Web Developer</div>
                      <div className="text">
                        <p>
                          Design and establish user friendly websites, including
                          optimized check-out page,resulting in 25% increase in
                          user clicks and subsequently 33% in customer
                          purchases.
                        </p>
                      </div>
                    </div>
                    <div
                      className="history-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="date">2020 - 2021</div>
                      <div className="name">Mojave</div>
                      <div className="subname">UI / UX Specialist</div>
                      <div className="text">
                        <p>
                        Create wireframes, user flows, process flows, story boards and site maps for websites.
                        </p>
                      </div>
                    </div>
                    <div
                      className="history-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="date">2018 - 2021</div>
                      <div className="name">Solo Marketing </div>
                      <div className="subname">Graphic Designer / Media</div>
                      <div className="text">
                        <p>
                          Produced both eCommerce and non-eCommerce website Layout and content for the use of clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clear" />
                {/* Button CV */}
                <Link
                  target="_blank"
                  download
                  to="./assets/images/cv.pdf"
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
