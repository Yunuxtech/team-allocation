import React from "react";
import TeamMemberCard from "./TeamMemberCard";
const TeamMembers = ({ selectedTeam, handleCardClick, employees }) => {
  return employees.map((employee) => (
    <TeamMemberCard
      employee={employee}
      handleCardClick={handleCardClick}
      selectedTeam={selectedTeam}
    />
  ));
};

export default TeamMembers;
