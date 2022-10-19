import React from "react";
import malePic from "./images/team_male.jpg";
import femalePic from "./images/team_female.jpg";
function TeamMemberCard({employee, handleCardClick, selectedTeam}) {
  return (
    <div className="col-lg-4 col-sm-12 mt-3 mb-3">

 
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleCardClick}
    >
      {employee.gender === "Female" ? (
        <img src={femalePic} className="card-img-top" />
      ) : (
        <img src={malePic} className="card-img-top" />
      )}
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation: </b>
          {employee.designation}
        </p>
      </div>
    </div>
    </div>
  );
}

export default TeamMemberCard;
