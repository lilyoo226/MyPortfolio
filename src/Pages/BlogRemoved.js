import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class BlogRemoved extends Component {
  render() {
    return (
      <div> <section className="section section-bg" id="blog-section">
      <div className="container">
        {/* Section Heading */}
        <div className="m-titles">
          <h2
            className="m-title splitting-text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            My Blog
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
                Infrequent writing on design, development, conferences,
                and other things tangentially related.
              </p>
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
            <h3
              className="title scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <Link to="blog-single.html">
                Usability Secrets to Create Better User Interfaces
              </Link>
            </h3>
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
            <h3
              className="title scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <Link to="blog-single.html">
                Three Ways To Level Up Your Photography
              </Link>
            </h3>
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
            <h3
              className="title scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <Link to="blog-single.html">
                10 Useful Tips to Improve Your UI Designs
              </Link>
            </h3>
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
      <div className="blog-more-link">
        <Link
          to="blog.html"
          className="btn scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          View Blog
        </Link>
      </div>
    </section></div>
    )
  }
}
