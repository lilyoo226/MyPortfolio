import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Blog extends Component {
  render() {
    return (
      <div>
        {" "}
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
                      Blog
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
                      Suspendisse potenti. Sed egestas eros eu libero posuere
                      ultrices. Nullam ut aliquet felis, sit amet imperdiet
                      felis.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog */}
            <div className="blog-items">
              <div className="archive-item">
                <div className="image">
                  <Link to="blog-single.html">
                    <img
                      src="./assets/images/images-blog4.jpg"
                      alt="Usability Secrets to Create Better User Interfaces"
                    />
                  </Link>
                </div>
                <div className="desc">
                  <div
                    className="category scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    UI Design
                    <br />
                    <span>November 28, 2021</span>
                  </div>
                  <div
                    className="title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <Link to="blog-single.html">
                      Usability Secrets to Create Better User Interfaces
                    </Link>
                  </div>
                  <div
                    className="text scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <p>
                      Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                      mattis. Aliquam vel sem vel velit efficitur malesuada.
                      Donec arcu lacus, ornare eget…{" "}
                    </p>
                    <div className="readmore">
                      <Link to="blog-single.html" className="lnk">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="archive-item">
                <div className="image">
                  <Link to="blog-single.html">
                    <img
                      src="./assets/images/images-blog3.jpg"
                      alt="Three Ways To Level Up Your Photography"
                    />
                  </Link>
                </div>
                <div className="desc">
                  <div
                    className="category scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Branding
                    <br />
                    <span>November 28, 2021</span>
                  </div>
                  <div
                    className="title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <Link to="blog-single.html">
                      Three Ways To Level Up Your Photography
                    </Link>
                  </div>
                  <div
                    className="text scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <p>
                      Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                      mattis. Aliquam vel sem vel velit efficitur malesuada.
                      Donec arcu lacus, ornare eget…{" "}
                    </p>
                    <div className="readmore">
                      <Link to="blog-single.html" className="lnk">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="archive-item">
                <div className="image">
                  <Link to="blog-single.html">
                    <img
                      src="./assets/images/images-single7.jpg"
                      alt="10 Useful Tips to Improve Your UI Designs"
                    />
                  </Link>
                </div>
                <div className="desc">
                  <div
                    className="category scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Photography
                    <br />
                    <span>November 28, 2021</span>
                  </div>
                  <div
                    className="title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <Link to="blog-single.html">
                      10 Useful Tips to Improve Your UI Designs
                    </Link>
                  </div>
                  <div
                    className="text scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <p>
                      Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                      mattis. Aliquam vel sem vel velit efficitur malesuada.
                      Donec arcu lacus, ornare eget…
                    </p>
                    <div className="readmore">
                      <Link to="blog-single.html" className="lnk">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pager">
              <Link className="prev page-numbers" to="#">
                <i className="icon-arrow" />
              </Link>
              <span className="page-numbers current">1</span>
              <Link className="page-numbers" to="#">
                2
              </Link>
              <Link className="next page-numbers" to="#">
                <i className="icon-arrow" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
