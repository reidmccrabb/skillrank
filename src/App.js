import React from 'react';
import './App.css';

function App() {
  const skills = [
    {
      name: "Software Development",
      avgSalary: "$120,000",
      oneDayChange: "+2%",
      sevenDayChange: "-1%",
      oneYearChange: "+10%",
      marketValue: "$2B",
      openings: "10,000",
      workers: "500,000"
    },
    {
      name: "Machine Learning",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000"
    },
    {
      name: "Data Analysis",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000"
    },
    {
      name: "Digital Marketing",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000"
    },
    {
      name: "Sales",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000"
    },
    {
      name: "Project Management",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000"
    },
    {
      name: "Blockchain Development",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000"
    },
    {
      name: "UX/UI Designer",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000"
    },
    {
      name: "Cloud Computing",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000"
    },
    {
      name: "Financial Analyst",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000"
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Skill Rank</h1>
        <div className="skills-list">
          <div className="header-row">
            <span>Rank (#)</span>
            <span>Skill Name</span>
            <span>Avg. Salary</span>
            <span>1 Day % Change</span>
            <span>7 Day % Change</span>
            <span>1 Year % Change</span>
            <span>Total Market Value</span>
            <span>Total Openings</span>
            <span>Total # of Workers</span>
          </div>
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <span className="rank">{index + 1}</span>
              <span className="skill-name">{skill.name}</span>
              <span>{skill.avgSalary}</span>
              <span>{skill.oneDayChange}</span>
              <span>{skill.sevenDayChange}</span>
              <span>{skill.oneYearChange}</span>
              <span>{skill.marketValue}</span>
              <span>{skill.openings}</span>
              <span>{skill.workers}</span>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
