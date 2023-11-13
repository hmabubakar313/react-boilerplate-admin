import React from "react";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container-fluid text-center">
          <h1>
            <span className="pb-3">Hello</span> Landing Page
          </h1>
          <h2>
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Maecenas faucibus mollis interdum. Curabitur blandit tempus
            porttitor.
          </h2>
        </div>
      </section>
      <section className="">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center g-2">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h1 className="text-center mt-4">Some Title</h1>
              <p className="text-center mt-3">
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Maecenas faucibus mollis interdum. Curabitur blandit tempus
                porttitor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="container-fluid mt-3 d-flex justify-content-center  ms-10 m-0"
      >
          <div className="row ">
            <div className="col-sm-4 col-md-4 col-lg-4 mt-2 ps-5">
              <div className="card text-center border shadow w-75 bg-light">
                <div className="card-icon mt-3">
                  <i className="fa fa-lightbulb-o fa-3x"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card Title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 mt-2 ps-5">
              <div className="card text-center border shadow w-75 bg-light">
                <div className="card-icon mt-3">
                  <i className="fa fa-lightbulb-o fa-3x"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card Title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 mt-2 ps-5">
              <div className="card text-center border shadow w-75 bg-light">
                <div className="card-icon mt-3">
                  <i className="fa fa-lightbulb-o fa-3x"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card Title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container-fluid mt-5 bg-light">
          <div class="row justify-content-center align-items-center g-2">
            <div class="col-sm-12 col-md-12 col-lg-12 text-center ">
              <h2>Some Title</h2>
              <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Maecenas faucibus mollis interdum. Curabitur blandit tempus
                porttitor.
              </p>
              <button className="btn btn-danger mb-3">Text button</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
