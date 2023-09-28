import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialSkills = [
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

  const [skills, setSkills] = useState(initialSkills);

  useEffect(() => {
    const tickSkills = () => {
      setSkills(prevSkills => 
        prevSkills.map(skill => ({
          ...skill,
          avgSalary: `$${(parseFloat(skill.avgSalary.replace('$', '').replace(',', '')) + Math.random() * 500 - 250).toFixed(2)}`,
          oneDayChange: `${(parseFloat(skill.oneDayChange) + Math.random() * 0.4 - 0.2).toFixed(2)}%`,
          sevenDayChange: `${(parseFloat(skill.sevenDayChange) + Math.random() * 0.4 - 0.2).toFixed(2)}%`,
          oneYearChange: `${(parseFloat(skill.oneYearChange) + Math.random() * 0.4 - 0.2).toFixed(2)}%`,
          marketValue: `$${(parseFloat(skill.marketValue.replace('$', '').replace('B', '')) + Math.random() * 0.05 - 0.025).toFixed(1)}B`,
          openings: `${(parseFloat(skill.openings.replace(',', '')) + Math.random() * 50 - 25).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
          workers: `${(parseFloat(skill.workers.replace(',', '')) + Math.random() * 1000 - 500).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
        }))
      );
    };

    const intervalId = setInterval(tickSkills, 5000);  // Update every 5 seconds

    return () => clearInterval(intervalId);  // Cleanup on unmount
  }, []);

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