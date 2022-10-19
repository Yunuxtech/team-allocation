import Teams from "./Teams";
import TeamMembers from "./TeamMembers";
const Employees = ({
  employees,
  selectedTeam,
  handleCardClick,
  handleTeamChange,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-5">
          <Teams selectedTeam = {selectedTeam} handleTeamChange={handleCardClick}/>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="row">
          
              
                <TeamMembers employees={employees} handleCardClick={handleCardClick} selectedTeam={selectedTeam}/>
             
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
