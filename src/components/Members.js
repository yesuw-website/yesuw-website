import React from 'react';
import './Members.css';

const Members = () => {
  // Executive Board members
  const executiveBoard = [
    { name: "Arnav Srivastav", year: "2026", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F024%2F558%2F280%2Fnon_2x%2Fbusinessman-isolated-illustration-ai-generative-free-png.png&f=1&nofb=1&ipt=8b04ec501c61a8232fd0c630370d46e9df2e8dd8123bad3f2585b531da445002", position: "President" },
    { name: "Frankie Glave", year: "2027", image: "https://via.placeholder.com/200", position: "VP of Operations" },
    { name: "Veronica Wendt", year: "2026", image: "https://via.placeholder.com/200", position: "VP of Marketing" },
    { name: "Casey Hagen", year: "2026", image: "https://via.placeholder.com/200", position: "VP of Finance" },
    { name: "Shradha Godishala", year: "2027", image: "https://via.placeholder.com/200", position: "Secretary" },

  ];

  // Regular members
  const members = [
    { name: "Basieem S.", year: "2027", image: "https://via.placeholder.com/200" },
    { name: "Andre Good", year: "2025", image: "https://via.placeholder.com/200" },
    { name: "Beckett Wedren", year: "2025", image: "https://via.placeholder.com/200" },
    { name: "Julia Camp", year: "2025", image: "https://via.placeholder.com/200" },
    { name: "Lauren Ayer", year: "2028", image: "https://via.placeholder.com/200" },
    { name: "Lauren Ruff", year: "2025", image: "https://via.placeholder.com/200" },
   { name: "Srinika Pattaswamy", year: "2028", image: "https://via.placeholder.com/200" },
   
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