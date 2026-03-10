import React from 'react';
import './Members.css';
import frankiePic from "../peoplesPics/Frankie_WebsitePic.jpg";
import veronica from "../peoplesPics/Veronica.jpeg"
import calvin from "../peoplesPics/calvin.JPG"
import maggie from "../peoplesPics/Maggiewebsitepic.jpg"
import laurenR from "../peoplesPics/lauren.JPG"
import arnav from "../peoplesPics/arnav.png"
import shraddha from "../peoplesPics/shradda.jpg"
import ellie from "../peoplesPics/ellie.jpeg"
import Basieem from "../peoplesPics/BasieemWebsite.jpg"
import { compareObjs, getDayClassNames } from '@fullcalendar/core/internal.js';
const Members = () => {
  // Executive Board members
  const executiveBoard = [
    { name: "Arnav Srivastav", year: "2026", image: arnav, position: "President" },
    { name: "Frankie Glave", year: "2027", image: frankiePic, position: "VP of Operations" },
    { name: "Veronica Wendt", year: "2026", image: veronica, position: "VP of Marketing" },
    { name: "Casey Hagen", year: "2026", image: "https://via.placeholder.com/200", position: "VP of Finance" },
    { name: "Shradha Godishala", year: "2027", image: shraddha, position: "Secretary" },

  ];

  // Regular members
  const members = [
    { name: "Basieem S.", year: "2027", image: Basieem },
    { name: "Andre Good", year: "2025", image: "https://via.placeholder.com/200" },
    { name: "Beckett Wedren", year: "2025", image: "https://via.placeholder.com/200" },
    { name: "Julia Camp", year: "2025", image: "https://via.placeholder.com/200" },
    { name: "Lauren Ayer", year: "2028", image: "https://via.placeholder.com/200" },
    { name: "Lauren Ruff", year: "2025", image: laurenR},
   { name: "Srinika Pattaswamy", year: "2028", image: "https://via.placeholder.com/200" },
   { name: "Calvin ", year: "2028", image: calvin },
   { name: "Maggie Paulios", year: "2028", image: maggie},
    { name: "Ellie Arbeiter", year: "2028", image: ellie}
   
  ];

  // Alumni
  const alumni = [
    { name: "Cole Gullstrand", year: "2024", image: "https://via.placeholder.com/200" },
    { name: "Blake Koehler", year: "2024", image: "https://via.placeholder.com/200" },
    { name: "Justin Benz", year: "2024", image: "https://via.placeholder.com/200" },
    { name: "Ian Henjum", year: "2024", image: "https://via.placeholder.com/200" },
    { name: "Felix Mousigian", year: "2025", image: "https://via.placeholder.com/200" },
 { name: "Adam Schirtzinger", year: "2025", image: "https://via.placeholder.com/200" },
 { name: "Elijah Schwab", year: "2025", image: "https://via.placeholder.com/200" },
  { name: "Colin Macy", year: "2025", image: "https://via.placeholder.com/200" },
 { name: "Maria De Martino", year: "2025", image: "https://via.placeholder.com/200" },
 { name: "Alec Cornelio", year: "2025", image: "https://via.placeholder.com/200" },
 { name: "Akshay Bodla", year: "2025", image: "https://via.placeholder.com/200" },
 { name: "Michael Penny", year: "2025", image: "https://via.placeholder.com/200" },
 
  ]
  ;

  const ExecutiveCard = ({ member }) => (
    <div className="member-card executive">
      <div className="member-image">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="position">{member.position}</p>
        <p>Class of {member.year}</p>
      </div>
    </div>
  );

  const MemberCard = ({ member }) => (
    <div className="member-card">
      <div className="member-image">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="member-info">
        <h3>{member.name}</h3>
        <p>Class of {member.year}</p>
      </div>
    </div>
  );

  return (
    <div className="members-page">
      <section className="executive-board">
        <h2>Executive Board</h2>
        <div className="members-grid executive-grid">
          {executiveBoard.map((member, index) => (
            <ExecutiveCard key={index} member={member} />
          ))}
        </div>
      </section>

      <section className="current-members">
        <h2>Members</h2>
        <div className="members-grid">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </section>

      <section className="alumni">
        <h2>Alumni</h2>
        <div className="members-grid">
          {alumni.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Members; 


