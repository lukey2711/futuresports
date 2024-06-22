import React, { useState } from 'react';

//Function defintion with teamData as prop
const TeamUpdates = ({ teamData = [] }) => {
//Search term with empty string
  const [searchTerm, setSearchTerm] = useState('');

//Filter
  const filteredTeamData = teamData.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

//Define with id
  return (
    <section id="team" className="section">
      <h2 className="section-title">Team Updates</h2>
      <p className="section-description">Keep up to date with Orange Cricket Ltd.</p>

 {/* Input field for searching team members */}     
      <input
        type="text"
        placeholder="Search team members"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table className="team-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Notice Board</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeamData.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.role}</td>
              <td>{member.notice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TeamUpdates;
