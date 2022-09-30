import React from "react";

export const Preloader = () => {
  return (
    <div>
      <div className="preloader">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="spinner-logo">
              <img src="./assets/images/images-ober_logo.png" alt="preloader" />
              <div className="spinner-dot" />
              <div className="spinner spinner-line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
