import React, { useState } from "react";
import "../styles/home.css";

export default function Home() {
  const cardData = [
    {
      title: "Card Title 1",
      content: "Description for card 1.",
      iconClass: "fa fa-lightbulb-o fa-3x",
    },
    {
      title: "Card Title 2",
      content: "Description for card 2.",
      iconClass: "fa fa-heart-o fa-3x",
    },
    {
      title: "Card Title 3",
      content: "Description for card 3.",
      iconClass: "fa fa-star-o fa-3x",
    },
    {
      title: "Card Title 4",
      content: "Description for card 4.",
      iconClass: "fa fa-anchor fa-3x",
    },
    {
      title: "Card Title 5",
      content: "Description for card 5.",
      iconClass: "fa fa-bell-o fa-3x",
    },
    {
      title: "Card Title 6",
      content: "Description for card 6.",
      iconClass: "fa fa-leaf fa-3x",
    },
    {
      title: "Card Title 7",
      content: "Description for card 7.",
      iconClass: "fa fa-music fa-3x",
    },
    {
      title: "Card Title 8",
      content: "Description for card 8.",
      iconClass: "fa fa-sun-o fa-3x",
    },
    {
      title: "Card Title 9",
      content: "Description for card 9.",
      iconClass: "fa fa-globe fa-3x",
    },
  ];

  const groupCards = (cards, groupSize) => {
    const groups = [];
    for (let i = 0; i < cards.length; i += groupSize) {
      groups.push(cards.slice(i, i + groupSize));
    }
    return groups;
  };

  const cardGroups = groupCards(cardData, 3);

  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const nextGroup = () =>
    setActiveGroupIndex((prevIndex) => (prevIndex + 1) % cardGroups.length);
  const prevGroup = () =>
    setActiveGroupIndex(
      (prevIndex) => (prevIndex - 1 + cardGroups.length) % cardGroups.length
    );

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

 

      <div className="container-fluid overflow-hidden mt-2">
        <div className="row w-75 mx-auto mt-5">
          <div
            id="cardCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {cardGroups.map((group, index) => (
                <div
                  key={index}
                  className={`carousel-item ${
                    index === activeGroupIndex ? "active" : ""
                  }`}
                >
                  <div className="row justify-content-center">
                    {group.map((card, cardIndex) => (
                      <Card key={cardIndex} {...card} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={prevGroup}
        >
          <span className="carousel-control-prev-icon carousel-control-prev-icon-dark"></span>
          <span>Previous</span>
        </button>
        <button
          className="carousel-control-next btn"
          type="button"
          onClick={nextGroup}
        >
          <span className="carousel-control-next-icon carousel-control-next-icon-dark"></span>
          <span></span>
        </button>
      </div>

      <section className="mt-5 bg-light p-2">
        <div className="container-fluid text-center">
          <h2>Join Our Community</h2>
          <p>
            Be a part of our growing community and stay updated with the latest
            trends.
          </p>
          <button className="btn btn-primary">Sign Up Now</button>
        </div>
      </section>
    </>
  );
}

const Card = ({ title, content, iconClass }) => (
  <div className="col-md-4">
    <div className="card text-center border shadow bg-light">
      <div className="card-icon mt-3">
        <i className={iconClass}></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  </div>
);
