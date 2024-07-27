import React from 'react';
import './home-card.css'; // Assuming you create a CSS file for styling

const HomeCard = () => {
  return (
    <section className="home-card" data-aos="fade-right" data-aos-delay='200'>
      <div className="home-card-content">
        <h3><strong> Unlock Your Potential.</strong><br />
        Book your free consultation call today.</h3>
        <button className="book-button">Book Now</button>
      </div>
    </section>
  );
}

export default HomeCard;
