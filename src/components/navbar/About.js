import React from "react";
import image1 from "../public/images/image1.jpg";
import image2 from "../public/images/image2.jpg";
import image3 from "../public/images/image3.jpg";
import "../styles/navbar.css";

const About = () => {
  
  return (
    <>
      <div className="text-center mt-5">
        <h2 className="display-4 fw-bold">About Us</h2>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={image1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={image2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={image3} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
      </div>

      {/* Additional Headings and Dummy Text */}
      <div className="container mt-5">
        <h3 className="mb-4 text-center">What We Do</h3>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <h3 className="mb-4 text-center">Our Mission</h3>
        <p className="text-center">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>

        <h3 className="mb-4 text-center">Our Team</h3>
        <p className="text-center">
          Suspendisse potenti. Nullam vel ultricies quam, ac facilisis odio.
          Quisque interdum, mi vitae tincidunt lobortis, dui velit lobortis
          justo, non aliquet elit tortor at ante. Integer ac elit eu nibh
          egestas volutpat.
        </p>

        <h3 className="mb-4 text-center">Our Clients</h3>
        <p className="text-center">
          Phasellus mattis sodales libero et malesuada. Aliquam erat volutpat.
          Sed fermentum vitae ligula in varius. Nulla at semper risus, non
          vulputate arcu.
        </p>
      </div>
    </>
  );
};

export default About;
