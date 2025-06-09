import React from 'react';
import Calendar from './Calendar';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>YesUW</h1>
          <p>University of Wisconsin-Madison</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-content">
          <h2>About Us</h2>
          <p>
            YesUW is a student organization at the University of Wisconsin-Madison inspired by YesTheory's 
            philosophy of "Seek Discomfort." We believe that growth happens outside our comfort zones, and 
            we're here to create a community where students can challenge themselves, build meaningful 
            connections, and make unforgettable memories together.
          </p>
          <p className="mission-statement">
            Our mission is to create a community where students can embrace discomfort, push their boundaries, 
            and discover their potential through shared experiences. We believe that saying "yes" to new 
            challenges leads to personal growth and stronger connections. As a catalyst for positive change 
            at UW-Madison, we inspire students to step outside their comfort zones, build genuine relationships, 
            and create a campus culture where everyone feels empowered to say "yes" to new opportunities.
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="events" className="events">
        <div className="section-content">
          <h2>Events & Calendar</h2>
          <Calendar />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section id="instagram" className="instagram">
        <div className="section-content">
          <h2>Instagram Feed</h2>
          <div className="instagram-feed">
            <iframe
              src="https://www.instagram.com/yes.uw/embed"
              title="Instagram Feed"
              className="instagram-embed"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="connect">
        <div className="section-content">
          <h2>Connect With Us</h2>
          <div className="connect-grid">
            <a
              href="https://www.instagram.com/yes.uw/"
              className="connect-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Instagram</h3>
              <p>Follow us for updates and photos</p>
            </a>
            <a
              href="https://groupme.com/join_group/103426481/kAsXb7dk"
              className="connect-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>GroupMe</h3>
              <p>Join our group chat</p>
            </a>
            <a
              href="mailto:yesuw21@gmail.com"
              className="connect-card"
            >
              <h3>Email Us</h3>
              <p>Get in touch with our team</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 