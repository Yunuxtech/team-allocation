import "./App.css";
import React, { useState, useEffect } from "react";
import Employees from "./Employees";
import Footer from "./Footer";
import Header from "./Header";
import GroupedTeamMembers from "./GroupedTeamMembers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import NotFound from "./NotFound";

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeesList")) || [
      {
        id: 1,
        fullName: "Yunus Isah",
        designation: "React Engineer",
        gender: "Male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Umar Harande",
        designation: "IOS Engineer",
        gender: "Male",
        teamName: "TeamB",
      },
      {
        id: 3,
        fullName: "Bashir Tanimu",
        designation: "Cloud Engineer",
        gender: "Male",
        teamName: "TeamC",
      },
      {
        id: 4,
        fullName: "Aminu Aliyu",
        designation: "Java Engineer",
        gender: "Male",
        teamName: "TeamA",
      },
      {
        id: 5,
        fullName: "Mansur Sani",
        designation: "JS Engineer",
        gender: "Male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Musa Adam",
        designation: "Product Manager",
        gender: "Male",
        teamName: "TeamC",
      },
      {
        id: 7,
        fullName: "Ali ALi",
        designation: "Test Engineer",
        gender: "Male",
        teamName: "TeamA",
      },
      {
        id: 8,
        fullName: "Hafsat Abdul",
        designation: "Andriod Engineer",
        gender: "Female",
        teamName: "TeamB",
      },
      {
        id: 9,
        fullName: "Jemailat Yusuf",
        designation: "DevOp Enginner",
        gender: "Female",
        teamName: "TeamC",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("employeesList", JSON.stringify(employees));
  }, [employees]);
  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);
  const handleTeamChange = (event) => {
    setTeam(event.target.value);
    console.log(event.target.value);
  };
  const handleCardClick = (event) => {
    // console.log(event.currentTarget.id)
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  };
  return (
    <div className="App">
      <Router>
        <Nav />
        <Header
          selectedTeam={selectedTeam}
          teamMemberCount={
            employees.filter((employee) => employee.teamName === selectedTeam)
              .length
          }
        />
        <Routes>
          <Route
            path="/"
            element={
              <Employees
                employees={employees}
                selectedTeam={selectedTeam}
                handleCardClick={handleCardClick}
                handleTeamChange={handleTeamChange}
              />
            }
          ></Route>
          <Route
            path="/GroupedTeamMembers"
            element={
              <GroupedTeamMembers
                employees={employees}
                selectedTeam={selectedTeam}
                setTeam={setTeam}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
