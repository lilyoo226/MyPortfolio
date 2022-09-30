import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Works extends Component {
  render() {
    return (
      <div>       {/* <!-- Wrapper --> */}
      <div className="wrapper">
        {/* Section Started Heading */}
        <section className="section section-inner started-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* titles */}
                <div className="h-titles">
                  <h1
                    className="h-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Projects
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Works */}
        <section className="section section-inner m-archive">
          <div className="container">
            <div className="row row-custom">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
              <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
                {/* Description */}
                <div
                  className="text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <h6>
                    A Collection of my favorites project I’ve designed
                    recently. Feeling great while sharing here.
                  </h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* Works */}
                <div className="works-box">
                  <div
                    className="filter-links scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <Link to="#" className="active" data-to=".works-col">
                      All
                    </Link>
                    <Link to="#" data-to=".sorting-ui-ux-design">
                      UI UX Design
                    </Link>
                    <Link to="#" data-to=".sorting-photo">
                      Photography
                    </Link>
                    <Link to="#" data-to=".sorting-development">
                      Development
                    </Link>
                    <Link to="#" data-to=".sorting-branding">
                      Branding
                    </Link>
                  </div>
                  <div className="works-items works-list-items row">
                    <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                      <div className="works-item">
                        <Link to="work-single.html">
                          <span
                            className="image scrolla-element-anim-1 scroll-animate"
                            data-animate="active"
                          >
                            <span className="img">
                              <img
                                src="./assets/images/images-work4.jpg"
                                alt="Zorro"
                              />
                              <span className="overlay" />
                            </span>
                          </span>
                          <span className="desc">
                            <span
                              className="name splitting-text-anim-1 scroll-animate"
                              data-splitting="chars"
                              data-animate="active"
                            >
                              Zorro
                            </span>
                            <span
                              className="category scrolla-element-anim-1 scroll-animate"
                              data-animate="active"
                            >
                              Branding
                              <br />
                              Photography
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
                      <div className="works-item">
                        <Link to="work-single.html">
                          <span
                            className="image scrolla-element-anim-1 scroll-animate"
                            data-animate="active"
                          >
                            <span className="img">
                              <img
                                src="./assets/images/images-work2.jpg"
                                alt="Gooir"
                              />
                              <span className="overlay" />
                            </span>
                          </span>
                          <span className="desc">
                            <span
                              className="name splitting-text-anim-1 scroll-animate"
                              data-splitting="chars"
                              data-animate="active"
                            >
                              Gooir
                            </span>
                            <span
                              className="category scrolla-element-anim-1 scroll-animate"
                              data-animate="active"
                            >
                              Branding
                              <br />
                              UI UX Design
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
                      <div className="works-item">
                        <Link to="work-single.html">
                          <span
                            className="image scrolla-element-anim-1 scroll-animate"
                            data-animate="active"
                          >
                            <span className="img">
                              <img
                                src="./assets/images/images-work7.jpg"
                                alt="Explore"
                              />
                              <span className="overlay" />
                            </span>
                          </span>
                          <span className="desc">
                            <span
                              className="name splitting-text-anim-1 scroll-animate"
                              data-splitting="chars"
                              data-animate="active"
                            >
                              Explore
                            </span>
                            <span
                              className="category scrolla-element-anim-1 scroll-animate"
                              data-animate="active"
                            >
                              Development
                              <br />
                              UI UX Design
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                      <div className="works-item">
                        <Link to="work-single.html">
                          <span
                            className="image scrolla-element-anim-1 scroll-animate"
                            data-animate="active"
                          >
                            <span className="img">
                              <img
                                src="./assets/images/images-work1.jpg"
                                alt="Mozar"
                              />
                              <span className="overlay" />
                            </span>
                          </span>
                          <span className="desc">
                            <span
                              className="name splitting-text-anim-1 scroll-animate"
                              data-splitting="chars"
                              data-animate="active"
                            >
                              Mozar
                            </span>
                            <span
                              className="category scrolla-element-anim-1 scroll-animate"
                              data-animate="active"
                            >
                              Branding
                              <br />
                              Photography
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                      <div className="works-item">
                        <Link to="work-single.html">
                          <span
                            className="image scrolla-element-anim-1 scroll-animate"
                            data-animate="active"
                          >
                            <span className="img">
                              <img
                                src="./assets/images/images-single8.jpg"
                                alt="Stay Fit"
                              />
                              <span className="overlay" />
                            </span>
                          </span>
                          <span className="desc">
                            <span
                              className="name splitting-text-anim-1 scroll-animate"
                              data-splitting="chars"
                              data-animate="active"
                            >
                              Stay Fit
                            </span>
                            <span
                              className="category scrolla-element-anim-1 scroll-animate"
                              data-animate="active"
                            >
                              Development
                              <br />
                              UI UX Design
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                      <div className="works-item">
                        <Link to="work-single.html">
                          <span
                            className="image scrolla-element-anim-1 scroll-animate"
                            data-animate="active"
                          >
                            <span className="img">
                              <img
                                src="./assets/images/images-single6.jpg"
                                alt="Kana"
                              />
                              <span className="overlay" />
                            </span>
                          </span>
                          <span className="desc">
                            <span
                              className="name splitting-text-anim-1 scroll-animate"
                              data-splitting="chars"
                              data-animate="active"
                            >
                              Kana
                            </span>
                            <span
                              className="category scrolla-element-anim-1 scroll-animate"
                              data-animate="active"
                            >
                              Development
                              <br />
                              Photography
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div></div>
    )
  }
}
