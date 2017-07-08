import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container-fluid portfolio" id="portfolio">
        <div className="row">
          <div className="col text-center">
            <h2>Portfolio</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="project">
              <img src="/images/panjo.jpg" className="img-fluid" alt="panjo" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <img
                src="/images/snla.jpg"
                className="img-fluid"
                alt="sports news la"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <img
                src="/images/trubrain.jpg"
                className="img-fluid"
                alt="trubrain"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <img
                src="/images/wedding.jpg"
                className="img-fluid"
                alt="wedding"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <img src="/images/snla2.jpg" className="img-fluid" alt="snla2" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <img src="/images/gloss.jpg" className="img-fluid" alt="gloss" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <img src="/images/map.jpg" className="img-fluid" alt="map" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <img src="/images/gym.jpg" className="img-fluid" alt="gym" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
