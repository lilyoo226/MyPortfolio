import React, { Component } from "react";

export default class BackToTop extends Component {
  render() {
    return (
      <div>
        <div className="progress-wrap active-progress">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                transition: "stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "307.919, 307.919",
                strokeDashoffset: "273.171",
              }}
            />
          </svg>
        </div>
      </div>
    );
  }
}
