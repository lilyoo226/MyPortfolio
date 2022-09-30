import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";

import Resume from "./Resume";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          {/* Section */}
          <section className="section section-started">
            <div className="container">
              {/* Hero Started */}
              <div className="hero-started">
                <div
                  className="slide scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <img src="./assets/images/homie.png" alt="img" />
                  <span className="circle circle-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="749px"
                      height="375px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="#ff8059"
                        d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 "
                      />
                    </svg>
                  </span>
                  <span className="circle circle-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="416px"
                      height="209px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="#3aafc9"
                        d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                      />
                    </svg>
                  </span>
                  <span className="circle circle-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="416px"
                      height="209px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="#b9d1e4"
                        d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                      />
                    </svg>
                  </span>
                  <span className="circle circle-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="121px"
                      height="241px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="#676cdb"
                        d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 "
                      />
                    </svg>
                  </span>
                  <span className="circle circle-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="232px"
                      height="117px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(255, 208, 65)"
                        d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 "
                      />
                    </svg>
                  </span>
                </div>
                <div className="content">
                  <div className="titles">
                    <div
                      className="subtitle splitting-text-anim-2 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Web Developer
                    </div>
                    <h2
                      className="title splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Samuel <br />
                      Amoah
                    </h2>
                  </div>
                  <div
                    className="description scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <p>
                      I'm creative designer based in Ghana, and I'm very
                      passionate and dedicated to my work. I love travelling,
                      photography &amp; music.
                    </p>
                    <div className="social-links">
                      <Link target="_blank" rel="nofollow" to="#">
                        <i aria-hidden="true" className="fab fa-twitter" />
                      </Link>
                      <Link target="_blank" rel="nofollow" to="#">
                        <i aria-hidden="true" className="fab fa-dribbble" />
                      </Link>
                      <Link target="_blank" rel="nofollow" to="#">
                        <i aria-hidden="true" className="fab fa-behance" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="info-list">
                  <ul>
                    <li
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Born in <strong>Ghana</strong>
                    </li>
                    <li
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Experience <strong>4+ Years</strong>
                    </li>
                    <li
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Date of Birth <strong>5 February 2002</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* About homie */}
          {<About />}

          {<Resume />}

          {/* {<Projects />} */}

          {/* {<Pricing />} */}
          {/* Testimony */}
          <section className="section no-padding-top section-parallax-4">
            <div className="container">
              {/* Testimonials */}
              <div className="m-testimonials">
                <div className="swiper-container js-testimonials">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div
                        className="testimonials-item scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <div className="text">
                          <div className="icon">
                            <svg
                              width={58}
                              height={44}
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 58 44"
                            >
                              <defs />
                              <g>
                                <g>
                                  <path
                                    d="M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039"
                                    fill="#ffffff"
                                    fillOpacity={1}
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p>
                            Samuel is an excellent resource, and a master at
                            product design. He is hardworking and a dedicated
                            person who will complete your project in a given
                            time frame. He is always available when needed and
                            did not hesitate to share his product design
                            knowledge. I would recommend Samuel. He is truly a
                            gem.
                          </p>
                        </div>
                        <div className="image">
                          <img
                            src="./assets/images/images-team2.jpg"
                            alt="Jennifer Smith"
                          />
                        </div>
                        <div className="info">
                          <h3 className="name">Eric Amoah</h3>
                          <div className="author">CEO &amp; Founder</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div
                        className="testimonials-item scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <div className="text">
                          <div className="icon">
                            <svg
                              width={58}
                              height={44}
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 58 44"
                            >
                              <defs />
                              <g>
                                <g>
                                  <path
                                    d="M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039"
                                    fill="#ffffff"
                                    fillOpacity={1}
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p>
                            He is an innovative problem solver with great
                            attention to details, leadership and team work
                            skills. He has varied sectorial expertise on
                            conceptualizing and executing tech driven projects,
                            with a fantastic eye for unique designs, and cutting
                            edge delivery of set targets. He has driven
                            conceptualizing and development of software
                            platforms, UI design and development, and web page
                            design and development. He plays key roles in
                            developing and implementing overall web strategies,
                            and dealt with the details along with the
                            overarching project objectives. He coordinates
                            interdepartmentally key activities to facilitate the
                            completion of company-wide goals through web
                            development. He is thoughtful and considerate, an
                            excellent team leader and team player who can also
                            work independently and do a fantastic job in an
                            agile environment, He’s very highly recommended.
                          </p>
                        </div>
                        <div className="image">
                          <img
                            src="./assets/images/images-team3.jpg"
                            alt="Jennifer Smith"
                          />
                        </div>
                        <div className="info">
                          <h3 className="name">Kwaku Ntiri</h3>
                          <div className="author"></div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div
                        className="testimonials-item scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <div className="text">
                          <div className="icon">
                            <svg
                              width={58}
                              height={44}
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 58 44"
                            >
                              <defs />
                              <g>
                                <g>
                                  <path
                                    d="M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039"
                                    fill="#ffffff"
                                    fillOpacity={1}
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p>
                            Samuel is a big mind. As a web developer, Samuel
                            thought about things that the rest of us overlooked.
                            As a result, he has led his team to discover deeper
                            insights and ideas. Samuel is a brand champion. Her
                            business savvy is complemented by her creative
                            acumen, worldliness, and mastery of storytelling. I
                            highly recommend Samuel as a web developer to any
                            Organization.
                          </p>
                        </div>
                        <div className="image">
                          <img
                            src="./assets/images/images-team1.jpg"
                            alt="Jennifer Smith"
                          />
                        </div>
                        <div className="info">
                          <h3 className="name">Helina</h3>
                          <div className="author"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-button-prev scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <svg
                      width={13}
                      height={25}
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 13 25"
                    >
                      <defs />
                      <g>
                        <g>
                          <path
                            d="M0.27409,11.8138l11.13338,-11.53183c0.36484,-0.37766 0.95535,-0.37766 1.3195,0.00191c0.36392,0.37861 0.36301,0.99277 -0.00183,1.37043l-10.47066,10.84518v0l10.471,10.84423c0.36484,0.37861 0.36575,0.99087 0.00195,1.37043c-0.18253,0.18883 -0.42171,0.28515 -0.6609,0.28515c-0.23849,0 -0.47676,-0.09537 -0.65895,-0.28229l-11.1335,-11.53183c-0.17567,-0.18215 -0.2742,-0.4282 -0.2742,-0.68569c0,-0.25749 0.09888,-0.50449 0.2742,-0.68569z"
                            fill="#ffffff"
                            fillOpacity={1}
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div
                    className="swiper-button-next scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <svg
                      width={13}
                      height={25}
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 13 25"
                    >
                      <defs />
                      <g>
                        <g>
                          <path
                            d="M0.27409,11.8138l11.13338,-11.53183c0.36484,-0.37766 0.95535,-0.37766 1.3195,0.00191c0.36392,0.37861 0.36301,0.99277 -0.00183,1.37043l-10.47066,10.84518v0l10.471,10.84423c0.36484,0.37861 0.36575,0.99087 0.00195,1.37043c-0.18253,0.18883 -0.42171,0.28515 -0.6609,0.28515c-0.23849,0 -0.47676,-0.09537 -0.65895,-0.28229l-11.1335,-11.53183c-0.17567,-0.18215 -0.2742,-0.4282 -0.2742,-0.68569c0,-0.25749 0.09888,-0.50449 0.2742,-0.68569z"
                            fill="#ffffff"
                            fillOpacity={1}
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* My blog */}
         
          {/* My clent */}
          

          {<Contact />}
        </div>
      </div>
    );
  }
}
