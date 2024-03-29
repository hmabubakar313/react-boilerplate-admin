import React from "react";
import image1 from "../public/images/headway-5QgIuuBxKwM-unsplash.jpg";

import image2 from "../public/images/pexels-eren-li-7241413.jpg";
// import image3 from "../public/images/image3.jpg";
// import image4 from "../public/images/image4.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <main>
        <div className="container mt-4 ">
          <div className="row text-right">
            <div className="col-md-6 col-lg-6 d-flex align-items-center">
              <img
                src={image1}
                className="img-fluid rounded  h-75 w-100   d-flex justify-content-center"
                alt="image desc"
              />
            </div>
            <div className="col-md-6 col-lg-6   mt-4 pt-5 pl-2">
              <h2 className="">
                Photos for <span className="text-secondary">For Everyone</span>
              </h2>
              <p className="">
                <strong className="">Pico</strong> is a India-based website
                dedicated for sharing stock photography under the Pico license.
                Pico allows photographers to upload photos to its website, which
                are then curated by a team of photo editors. In Pico, we are
                aspiring to be one of the largest photography suppliers on the
                internet.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div class="text-center mt-2">
        <h2>
          <span className="team">OUR TEAM</span>
        </h2>
      </div>
      <section>
        <div class="container-fluid mt-4">
          <div class="row mx-auto w-75">
            <div class="col-md-4 col-sm-4 col-lg-4 text-center ">
              <div className="card   mb-5 bg-white   shadow ">
                <img
                  className="card-img-top"
                  src={image2}
                  alt="Card image cap"
                />
                <div className="card-body ">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div
                    className=""
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <a href="#" className="btn btn-secondary  mt-2">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#" className="btn btn-secondary mx-2 mt-2">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="btn btn-secondary  ml-2 mt-2">
                      <i className="fa fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-lg-4 text-center ">
              <div className="card   mb-5   shadow ">
                <img
                  className="card-img-top"
                  src={image2}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div
                    className=""
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <a href="#" className="btn btn-secondary  mt-2">
                      <i className="fa fa-linkedin "></i>
                    </a>
                    <a href="#" className="btn btn-secondary mx-2 mt-2">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="btn btn-secondary ml-2 mt-2">
                      <i className="fa fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-lg-4 text-center ">
              <div className="card mb-5 secondary  shadow ">
                <img
                  className="card-img-top"
                  src={image2}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div
                    className=""
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <a href="#" className="btn btn-secondary  mt-2">
                      <i className="fa fa-linkedin "></i>
                    </a>
                    <a href="#" className="btn btn-secondary mx-2 mt-2">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="btn btn-secondary ml-2 mt-2">
                      <i className="fa fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
