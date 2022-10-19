import React, { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const groupTeamMembers = () => {
    var teams = [];

    var teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    var teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    var teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    var teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    var teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    var teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);

    return teams;
  };
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());
  const handleTeamClick = (event) => {
    var transformData = groupedEmployees.map((groupData) =>
      groupData.team === event.currentTarget.id
        ? { ...groupData, collapsed: !groupData.collapsed }
        : groupData
    );
    setGroupedData(transformData)
    setTeam(event.currentTarget.id)
  };
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4">
        {/* <div className='col-8'>
                    <h1>Grouped Team Members</h1>
                </div> */}
        {groupedEmployees.map((item) => {
          return (
            <div
              key={item.team}
              className="card mt-2"
              style={{ cursor: "pointer" }}
            >
              <h4
                id={item.team}
                className="card-header text-secondary bg-white"
                onClick={handleTeamClick}
              >
                {" "}
                Team Name : {item.team}
              </h4>
              <div
                id={"collapse_" + item.team}
                className={item.collapsed === true ? "collapse" : ""}
              >
                <hr />
                {item.members.map((member) => {
                  return (
                    <div className="mt-2">
                      <h5 className="card-title mt-2">
                        <span className="text-dark">
                          Full Name: {member.fullName}
                        </span>
                      </h5>
                      <p>Designation : {member.designation}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default GroupedTeamMembers;
