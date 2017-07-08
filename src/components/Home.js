import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid main">
          <div className="row align-items-center height-100">
            <div className="col-md-7">
              <div className="site-left-offset">
                <h1 className="site-title">
                  Front End Web Developer
                  <span className="blinking-cursor">|</span>
                </h1>

                <div className="row">
                  <div className="col-10">
                    <div className="intro">
                      <p>
                        Hi, my name is Fernando Villasenor. I'm a web developer
                        based in Los Angeles CA, w/3+ years experience and
                        specializing on front end development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <h2 className="text-center">
                <strong>Skills</strong>
              </h2>

              <div className="row">
                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-laptop fa-4x" />
                  <h4>Front-End</h4>

                  <ul className="text-left">
                    <li>Html</li>
                    <li>Css/Scss/Less</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>ReactJS/Redux</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>

                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-file-code-o fa-4x" />
                  <h4>Back-End</h4>

                  <ul className="text-left">
                    <li>Node/Express</li>
                    <li>.Net MVC</li>
                    <li>Ruby on Rails</li>
                    <li>Django/Python</li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-github fa-4x" />
                  <h4>Tools</h4>

                  <ul className="text-left">
                    <li>Git/Github</li>
                    <li>Webpack</li>
                    <li>NPM/Yarn</li>
                    <li>Heroku</li>
                    <li>Pivotal Tracker</li>
                    <li>Jira</li>
                  </ul>
                </div>

                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-picture-o fa-4x" />
                  <h4>Design</h4>

                  <ul className="text-left">
                    <li>Adobe Photoshop</li>
                    <li>Responsive Design</li>
                    <li>PSD to HTML/CSS</li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-database fa-4x" />
                  <h4>Databases</h4>

                  <ul className="text-left">
                    <li>MongoDB/Mongoose</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>

                <div className="col-md-6 text-center skills-box">
                  <i className="fa fa-check-square-o fa-4x" />
                  <h4>Testing</h4>

                  <ul className="text-left">
                    <li>Mocha</li>
                    <li>Enzyme</li>
                    <li>Chai</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<div id="skills">

              <div className="col-12 col-sm-4 skills-box">
                <i className="fa fa-github fa-4x" />
                <h4>Tools</h4>
                <div className="col">
                  <ul>
                    <li>Git/Github</li>
                    <li>Webpack</li>
                    <li>NPM/Yarn</li>
                    <li>Heroku</li>
                    <li>Pivotal Tracker</li>
                    <li>Jira</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-sm-4 skills-box">
                <i className="fa fa-database fa-4x" />
                <h4>Databases</h4>
                <div className="col">
                  <ul>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-sm-4 skills-box">
                <i className="fa fa-picture-o fa-4x" />
                <h4>Design</h4>
                <div className="col">
                  <ul>
                    <li>Adobe Photoshop</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-sm-4 skills-box">
                <i className="fa fa-check-square-o fa-4x" />
                <h4>Testing</h4>
                <div className="col">
                  <ul>
                    <li>Mocha</li>
                    <li>Enzyme</li>
                    <li>Chai</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="portfolio">
          <div className="container-fluid portfolio-overlay">
            <div className="row">
              <div className="col">
                <h4 id="header">Portfolio</h4>
              </div>
            </div>

            <div className="row justify-content-center project">
              <div className="col-12 col-lg-4">
                <div className="description">
                  <h4>Panjo</h4>
                  <p>
                    Responsible for the entire front-end development and
                    implementation of features and updates for Panjo.com.
                  </p>
                  <div>
                    Built a fully responsive, cross-browser tested, site-
                    including the front end for tools to help improve an
                    enthusiast’s online marketplace experience:
                    <ul>
                      <li>
                        Listings results page that can be filtered- along with a
                        user feed homepage.
                      </li>
                      <li>
                        Listing detail page with commenting, messaging and the
                        ability to send offers.
                      </li>
                      <li>Checkout page integrated with Braintree. </li>
                      <li>
                        Account settings page to mange payments, addresses, tags
                        followed, and shopify integration.
                      </li>
                      <li>
                        ‘Sell an Item’ page with ability to upload photos and
                        add tags.
                      </li>
                      <li>
                        Seller/Buyer listings pages to manage current listings,
                        purchases, etc.
                      </li>
                      <li>Responsive HTML user notification emails.</li>
                    </ul>
                    <br />
                    <p>
                      Worked with Head of Design to ensure all updates and new
                      designs were developed as close to pixel-perfect as
                      possible to their original design.
                    </p>
                    <p>
                      Transitioned from CSS to SCSS for improved maintainability
                      and to develop a global stylesheet that encompassed our
                      design style guide.
                    </p>
                    <p>
                      Initially developed functionality with Jquery, then
                      transitioned to ReactJS (with a dash of Redux used).{" "}
                    </p>
                    <p>
                      Used Webpack for build processes. NPM/Yarn to manage
                      dependencies.
                    </p>
                    <p>
                      Added testing on React components using Mocha, Enzyme and
                      Chai.
                    </p>
                    <p>
                      Worked with QA engineer to fix and prevent bugs in
                      features.
                    </p>
                    <p>
                      Worked with CTO on planning new features that integrated
                      the frontend code to the backend through server-side
                      rendering or APIs.
                    </p>
                  </div>
                  <div>
                    <p>
                      Website: <a href="http://panjo.com">http://panjo.com</a>
                      <br />
                      Stack: .Net MVC, React, Redux, SCSS, Bootstrap 3, jQuery,
                      Webpack, Bower, Npm, Yarn, Postgres, AWS, Git.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5 image-container">
                <a href="http://panjo.com">
                  <img src="/images/panjo.jpg" alt="panjo" />
                </a>
              </div>
            </div>

            <div className="row justify-content-center project">
              <div className="col-12 col-lg-4">
                <div className="description">
                  <h4>Sports News Los Angeles 2.0 (In progress)</h4>
                  <p>
                    Rebuild of previous project. As before, will automatically
                    pull from over 150 news feeds, containing stories strictly
                    regarding Los Angeles sports teams, every hour. Feeds are
                    still saved to database before being rendered to the user to
                    minimize needing to access RSS feed links too often.
                    Mobile-friendly. This site will be made live to the public.
                  </p>
                  <p>
                    Source Code:{" "}
                    <a href="https://github.com/fernvilla/SportsNewsLA">
                      https://github.com/fernvilla/SportsNewsLA
                    </a>
                    <br />
                    Website:{" "}
                    <a href="http://sportsnewsla.com">
                      http://sportsnewsla.com
                    </a>
                    <br />
                    Stack: Node, Express, React, Redux, Mongoose, React-Router,
                    Bootstrap 4, SCSS
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-5 image-container">
                <a href="http://sportsnewsla.com">
                  <img src="/images/snla.jpg" alt="snla" />
                </a>
              </div>
            </div>

            <div className="row justify-content-center project">
              <div className="col-12 col-lg-4">
                <div className="description">
                  <h4>Wedding Site</h4>
                  <p>Personal wedding site built with Rails 4.2.</p>
                  <p>
                    Source Code:{" "}
                    <a href="https://github.com/fernvilla/WeddingSite">
                      https://github.com/fernvilla/WeddingSite
                    </a>
                    <br />
                    Website:{" "}
                    <a href="http://afwedding.herokuapp.com/">
                      http://afwedding.herokuapp.com/
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-5 image-container">
                <a href="http://afwedding.herokuapp.com/">
                  <img src="/images/wedding.jpg" alt="wedding" />
                </a>
              </div>
            </div>

            <div className="row justify-content-center project">
              <div className="col-12 col-lg-4">
                <div className="description">
                  <h4>truBrain</h4>
                  <div>
                    Full stack developer, with a heavier focus on front-end
                    development. Responsible for updates, fixes and improvements
                    of the site in an effort to help increase product
                    subscriptions: • Led all front-end page redesigns,
                    encompassing more than 90% of the website, including key
                    pages such as the home, product and signup pages.
                    <ul>
                      <li>
                        Keeping an eye on UX, updated site’s primary and
                        secondary fonts for improved legibility, while also
                        making the pages visually appealing and more
                        informative.
                      </li>
                      <li>
                        Keeping an eye on UX, updated site’s primary and
                        secondary fonts for improved legibility, while also
                        making the pages visually appealing and more
                        informative.
                      </li>
                      <li>
                        Utilizing Photoshop, converted PSDs to HTML, as well as
                        optimized image sizes (pre-compression) for use on the
                        web.
                      </li>
                      <li>
                        Utilized AngularJS for the subscription signup process,
                        dynamically adjusting what is shown to the user based on
                        their product/plan selections, as well the current URL.
                      </li>
                      <li>
                        Converted the entire website to be fully responsive
                        using Bootstrap 3, along with media queries targeting
                        smaller devices.
                      </li>
                      <li>
                        Converted the entire site from using CSS to LESS,
                        keeping better code structure and organization of
                        stylesheets.
                      </li>
                      <li>
                        Worked with Operations department, improving and fixing
                        any issues related to the backend (Stripe payments,
                        Django admin functionality, etc.), along with assisting
                        backend developer with any pressing issues.
                      </li>
                    </ul>
                  </div>
                  <p>
                    Website: <a href="http://trubrain.com">www.trubrain.com</a>
                    <br />
                    Stack: Django, Python, AngularJS, JQuery, Bootstrap, LESS,
                    PostgreSQL, AWS, Heroku, and Git.
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-5 image-container">
                <a href="http://trubrain.com">
                  <img src="/images/trubrain.jpg" alt="trubrain" />
                </a>
              </div>
            </div>

            <div className="row justify-content-center project">
              <div className="col-12 col-lg-4">
                <div className="description">
                  <h4>Sports News Los Angeles</h4>
                  <p>
                    News aggregator that automatically pulls from over 100 feeds
                    containing stories strictly regarding Los Angeles sports
                    teams. Feeds are saved to a PostgreSQL database before being
                    rendered to the user via AngularJS. Users can login with
                    their social accounts (Facebook, Twitter, Google LinkedIn).
                    In the end, users will be able to visit each team's page and
                    view all the latest news stories and social feeds (Twitter,
                    Instagram, Tumblr, Youtube).
                  </p>
                  <p>
                    Source Code:{" "}
                    <a href="https://github.com/fernvilla/SNLAv1.0">
                      https://github.com/fernvilla/SNLAv1.0
                    </a>
                    <br />
                    Website:{" "}
                    <a href="http://sportsla.herokuapp.com">
                      http://sportsla.herokuapp.com
                    </a>
                    <br />
                    Stack: Rails, AngularJS, PostgreSQL, Bootstrap, Twitter API,
                    Instagram API
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-5 image-container">
                <a href="http://sportsnewsla.herokuapp.com">
                  <img src="/images/snla2.jpg" alt="snla2" />
                </a>
              </div>
            </div>

            <div className="row justify-content-center project">
              <div className="col-12 col-lg-4">
                <div className="description">
                  <h4>Gloss</h4>
                  <p>
                    Content delivery system specifically designed for mobile web
                    browsers. Users can swipe up or down to switch categories
                    and left or right to switch between items within the same
                    category. Users can 'like' items, which are live-updated to
                    all users on the site using Socket.io. Tapping on the screen
                    brings up a radar of nearby users and items. This gamifies
                    the app by having users swipe between items to find ones
                    that contain random prizes once reached. Users can also
                    login to save favorites, which link directly out to the
                    item's external website.
                  </p>
                  <p>
                    Source Code:{" "}
                    <a href="https://github.com/fernvilla/Tiles">
                      https://github.com/fernvilla/Tiles
                    </a>
                    <br />
                    Website:{" "}
                    <a href="http://cracked.herokuapp.com">
                      http://cracked.herokuapp.com
                    </a>
                    <br />
                    Stack: the MEAN Stack- MongoDB, Express, AngularJS, Node.js-
                    and Socket.io. <br />
                    Group project with Hai Nguyen, Justin Lalezarian and Kyle
                    Chadha.
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-5 image-container">
                <a href="http://cracked.herokuapp.com">
                  <img src="/images/gloss.jpg" alt="gloss" />
                </a>
              </div>
            </div>

            <div className="row justify-content-center project">
              <div className="col-12 col-lg-4">
                <div className="description">
                  <h4>DevJobs.Map</h4>
                  <p>
                    Google Map showing developer job listings in Los Angeles
                    based on company's latitude and longitude. Job seekers can
                    filter job postings based on job type (Front-end, Back-end,
                    Full-Stack) or experience level (Senior, Junior,
                    Internship). Employers can log in (via sign up or using
                    Twitter/LinkedIn authentication) to post a job that is
                    automatically displayed on the map through geocoding of
                    their company address. Employer also has access to their own
                    dashboard to manage posted jobs. Indeed.com API can also
                    pulled to populate the map with even more developer jobs.
                    Heat map can be toggled to view locations with the most job
                    postings.
                  </p>
                  <p>
                    Source Code:{" "}
                    <a href="https://github.com/fernvilla/DevJobMappr">
                      https://github.com/fernvilla/DevJobMappr
                    </a>
                    <br />
                    Website:{" "}
                    <a href="http://devjobs-map.herokuapp.com">
                      http://devjobs-map.herokuapp.com
                    </a>
                    <br />
                    Stack: Ruby on Rails, Javascript, AJAX, HTML, CSS, JQuery,
                    Zurb Foundation, Postgresql. <br />
                    Group project with Daniel Iwao and Rachel Bailin.
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-5 image-container">
                <a href="http://devjobs-map.herokuapp.com">
                  <img src="/images/map.jpg" alt="map" />
                </a>
              </div>
            </div>

            <div className="row justify-content-center project">
              <div className="col-12 col-lg-4">
                <div className="description">
                  <h4>GymTime</h4>
                  <p>
                    Workout calendar will full CRUD functionality. Allows the
                    user to create single workouts which are displayed
                    automatically on their own calendar. Exercises can be added
                    to own database (with external links and ability to embed
                    optional YouTube video) which will then show as options when
                    future workouts are created. Training progress can also be
                    tracked by creating journal entries. Google Maps API used to
                    map nearby gyms based on user's geolocation.
                  </p>
                  <p>
                    Source Code:{" "}
                    <a href="https://github.com/fernvilla/gym_time">
                      https://github.com/fernvilla/gym_time
                    </a>
                    <br />
                    Website:{" "}
                    <a href="http://gym-time.herokuapp.com">
                      http://gym-time.herokuapp.com
                    </a>
                    <br />
                    Stack: Ruby on Rails, HTML, CSS, JQuery, MongoDB.
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-5 image-container">
                <a href="http://gym-time.herokuapp.com">
                  <img src="/images/gym.jpg" alt="gym" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="contact">
          <div className="container">
            <div className="row">
              <div className="col">
                <h4 id="header">Let's Connect</h4>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xs-4 col-sm-1 col-sm-offset-3">
                <a href="http://www.linkedin.com/in/fernandovillasenor">
                  <i className="fa fa-linkedin-square fa-3x" />
                </a>
              </div>

              <div className="col-xs-4 col-sm-1">
                <a href="http://twitter.com/fernvillasenor">
                  <i className="fa fa-twitter-square fa-3x" />
                </a>
              </div>

              <div className="col-xs-4 col-sm-1">
                <a href="http://google.com/+fernandovillasenor18">
                  <i className="fa fa-google fa-3x" />
                </a>
              </div>

              <div className="col-xs-4 col-sm-1">
                <a href="http://github.com/fernvilla">
                  <i className="fa fa-github-alt fa-3x" />
                </a>
              </div>

              <div className="col-xs-4 col-sm-1">
                <a href="http://www.facebook.com/fernando.villasenor.3532">
                  <i className="fa fa-facebook-square fa-3x" />
                </a>
              </div>

              <div className="col-xs-4 col-sm-1">
                <a href="mailto:fvilla18@gmail.com">
                  <i className="fa fa-envelope-square fa-3x" />
                </a>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    );
  }
}
