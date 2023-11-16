import React, { useState } from "react";
import "../styles/home.css";

export default function Home() {
  const cardData = [
    { title: 'Card Title 1', content: 'Description for card 1.', iconClass: 'fa fa-lightbulb-o fa-3x' },
    { title: 'Card Title 2', content: 'Description for card 2.', iconClass: 'fa fa-heart-o fa-3x' },
    { title: 'Card Title 3', content: 'Description for card 3.', iconClass: 'fa fa-star-o fa-3x' },
    { title: 'Card Title 4', content: 'Description for card 4.', iconClass: 'fa fa-anchor fa-3x' },
    { title: 'Card Title 5', content: 'Description for card 5.', iconClass: 'fa fa-bell-o fa-3x' },
    { title: 'Card Title 6', content: 'Description for card 6.', iconClass: 'fa fa-leaf fa-3x' },
    { title: 'Card Title 7', content: 'Description for card 7.', iconClass: 'fa fa-music fa-3x' },
    { title: 'Card Title 8', content: 'Description for card 8.', iconClass: 'fa fa-sun-o fa-3x' },
    { title: 'Card Title 9', content: 'Description for card 9.', iconClass: 'fa fa-globe fa-3x' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  const prevCard = () => setActiveIndex((prevIndex) => (prevIndex - 3 + cardData.length) % cardData.length);

  return (
    <>
      <section className="hero">
        <div className="container-fluid text-center">
          <h1>Hello Landing Page</h1>
          <p>Here's a captivating tagline to draw your attention.</p>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2>Explore Our Features</h2>
              <p>Discover what makes us unique and why you should choose our services.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid overflow-hidden mt-2">
        <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {cardData.map((card, index) => (
              <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                <div className="row justify-content-center">
                  <Card {...card} />
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" onClick={prevCard}>
            <span className="carousel-control-prev-icon"></span>
            <span>Previous</span>
          </button>
          <button className="carousel-control-next" type="button" onClick={nextCard}>
            <span className="carousel-control-next-icon"></span>
            <span>Next</span>
          </button>
        </div>
      </div>

      <section className="mt-5">
        <div className="container-fluid text-center">
          <h2>Join Our Community</h2>
          <p>Be a part of our growing community and stay updated with the latest trends.</p>
          <button className="btn btn-primary">Sign Up Now</button>
        </div>
      </section>
    </>
  );
}

const Card = ({ title, content, iconClass }) => (
  <div className="container-fluid overflow-hidden mt-2">
    <div className="row w-75 mx-auto">
    <div className="col-md-4">
    <div className="card text-center border shadow bg-light">
      <div className="card-icon mt-3">
        <i className={iconClass}></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card text-center border shadow bg-light">
      <div className="card-icon mt-3">
        <i className={iconClass}></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card text-center border shadow bg-light">
      <div className="card-icon mt-3">
        <i className={iconClass}></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  </div>
  </div>
  
);
