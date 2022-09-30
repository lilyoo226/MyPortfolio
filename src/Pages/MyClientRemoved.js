import React, { Component } from 'react'

export default class MyClientRemoved extends Component {
  render() {
    return (
      <div><section className="section section-parallax-5">
      <div className="container">
        {/* Section Heading */}
        <div className="m-titles">
          <h2
            className="m-title splitting-text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            My Clients
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
                Suspendisse potenti. Sed egestas eros eu libero posuere
                ultrices. Nullam ut aliquet felis, sit amet imperdiet
                felis.
              </p>
            </div>
          </div>
        </div>
        <div className="row clients-items">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src="./assets/images/images-brand1.png" alt="img" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src="./assets/images/images-brand2.png" alt="img" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src="./assets/images/images-brand3.png" alt="img" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src="./assets/images/images-brand4.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section></div>
    )
  }
}
