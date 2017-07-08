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
              <a href="http://panjo.com">
                <img
                  src="/images/panjo.jpg"
                  className="img-fluid"
                  alt="panjo"
                />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <a href="http://sportsnewsla.com">
                <img
                  src="/images/snla.jpg"
                  className="img-fluid"
                  alt="sports news la"
                />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <a href="http://bloomtri.com">
                <img
                  src="/images/bloomtri.jpg"
                  className="img-fluid"
                  alt="bloomtri"
                />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <a href="http://trubrain.com">
                <img
                  src="/images/trubrain.jpg"
                  className="img-fluid"
                  alt="trubrain"
                />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <a href="http://afwedding.herokuapp.com">
                <img
                  src="/images/wedding.jpg"
                  className="img-fluid"
                  alt="wedding"
                />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <a href="http://snla.herokuapp.com">
                <img
                  src="/images/snla2.jpg"
                  className="img-fluid"
                  alt="snla2"
                />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <a href="http://cracked.herokuapp.com">
                <img
                  src="/images/gloss.jpg"
                  className="img-fluid"
                  alt="gloss"
                />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <a href="http://devjobs-map.herokuapp.com">
                <img src="/images/map.jpg" className="img-fluid" alt="map" />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="project">
              <a href="http://gym-time.herokuapp.com">
                <img src="/images/gym.jpg" className="img-fluid" alt="gym" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
