import React from 'react';
import './Members.css';

const Members = () => {
  // Executive Board members
  const executiveBoard = [
    { name: "John Doe", year: "2024", image: "https://via.placeholder.com/200", position: "President" },
    { name: "Jane Smith", year: "2024", image: "https://via.placeholder.com/200", position: "VP of Operations" },
    { name: "Mike Johnson", year: "2024", image: "https://via.placeholder.com/200", position: "VP of Marketing" },
    { name: "Sarah Wilson", year: "2024", image: "https://via.placeholder.com/200", position: "VP of Finance" },
  ];

  // Regular members
  const members = [
    { name: "Alex Brown", year: "2025", image: "https://via.placeholder.com/200" },
    { name: "Emily Davis", year: "2025", image: "https://via.placeholder.com/200" },
    { name: "David Miller", year: "2025", image: "https://via.placeholder.com/200" },
    { name: "Lisa Anderson", year: "2025", image: "https://via.placeholder.com/200" },
    { name: "Tom Wilson", year: "2025", image: "https://via.placeholder.com/200" },
    { name: "Rachel Green", year: "2025", image: "https://via.placeholder.com/200" },
  ];

  // Alumni
  const alumni = [
    { name: "Chris Lee", year: "2023", image: "https://via.placeholder.com/200" },
    { name: "Jessica Park", year: "2023", image: "https://via.placeholder.com/200" },
    { name: "Michael Chen", year: "2022", image: "https://via.placeholder.com/200" },
    { name: "Sophia Kim", year: "2022", image: "https://via.placeholder.com/200" },
  ];

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