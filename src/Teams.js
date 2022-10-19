import React from "react";

const Teams = ({selectedTeam, handleTeamChange}) => {
  return (
    <select
      className="form-select form-select-lg"
      value={selectedTeam}
      onChange={handleTeamChange}
    >
      <option value="TeamA">Team A</option>
      <option value="TeamB">Team B</option>
      <option value="TeamC">Team C</option>
    </select>
  );
};

export default Teams;
