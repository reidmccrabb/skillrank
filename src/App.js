import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import DetailsPage from "./DetailsPage"; // Make sure this is the correct path
import "./App.css";

function App() {
  const initialSkills = [
    {
      name: "AI Engineer",
      avgSalary: "$320,000",
      oneDayChange: "+2%",
      sevenDayChange: "-1%",
      oneYearChange: "+10%",
      marketValue: "$2B",
      openings: "10,000",
      workers: "500,000",
    },
    {
      name: "Web Developer",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000",
    },
    {
      name: "Brain Surgeon",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000",
    },
    {
      name: "Comedy Actor",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000",
    },
    {
      name: "University Professor",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000",
    },
    {
      name: "Air Traffic Controller",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000",
    },
    {
      name: "Blockchain Developer",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000",
    },
    {
      name: "UX/UI Designer",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000",
    },
    {
      name: "Psychologist",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000",
    },
    {
      name: "Financial Analyst",
      avgSalary: "$130,000",
      oneDayChange: "+1%",
      sevenDayChange: "-2%",
      oneYearChange: "+11%",
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "490,000",
    },
  ];

  const [skills, setSkills] = useState(initialSkills);

  function getChangeStyle(percentage) {
    return percentage.startsWith("-") ? "red" : "green";
  }

  useEffect(() => {
    const updateSingleSkill = (index) => {
      setSkills((prevSkills) => {
        const skill = prevSkills[index];
        const updatedSkills = [
          ...prevSkills.slice(0, index),
          {
            ...skill,
            avgSalary: `$${(
              parseFloat(skill.avgSalary.replace("$", "").replace(",", "")) +
              Math.random() * 500 -
              250
            )
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
            oneDayChange: `${(
              parseFloat(skill.oneDayChange) +
              Math.random() * 0.4 -
              0.2
            ).toFixed(2)}%`,
            sevenDayChange: `${(
              parseFloat(skill.sevenDayChange) +
              Math.random() * 0.4 -
              0.2
            ).toFixed(2)}%`,
            oneYearChange: `${(
              parseFloat(skill.oneYearChange) +
              Math.random() * 0.4 -
              0.2
            ).toFixed(2)}%`,
            marketValue: `$${(
              parseFloat(skill.marketValue.replace("$", "").replace("B", "")) +
              Math.random() * 0.05 -
              0.025
            ).toFixed(1)}B`,
            openings: `${(
              parseFloat(skill.openings.replace(",", "")) +
              Math.random() * 50 -
              25
            )
              .toFixed(0)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
            workers: `${(
              parseFloat(skill.workers.replace(",", "")) +
              Math.random() * 1000 -
              500
            )
              .toFixed(0)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
          },
          ...prevSkills.slice(index + 1),
        ];

        // Sort the updated skills by average salary in descending order
        updatedSkills.sort((a, b) => {
          const aSalary = parseFloat(
            a.avgSalary.replace("$", "").replace(",", "")
          );
          const bSalary = parseFloat(
            b.avgSalary.replace("$", "").replace(",", "")
          );
          return bSalary - aSalary;
        });

        return updatedSkills;
      });
    };

    const tickSkillRandomly = () => {
      const randomIndex = Math.floor(Math.random() * skills.length);
      updateSingleSkill(randomIndex);

      // Set next random update after current update finishes
      setupRandomTick();
    };

    const setupRandomTick = () => {
      // Random duration between 1 to 5 seconds
      const randomDuration = Math.floor(Math.random() * 4000) + 1000;
      setTimeout(tickSkillRandomly, randomDuration);
    };

    // Start the first tick
    setupRandomTick();

    // If you want to cleanup the timeout when the component unmounts:
    return () => {
      clearTimeout(tickSkillRandomly);
    };
  }, []); // Note: Empty dependency array

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Skill Rank</h1>
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                      <Link
                        className="skill-link"
                        to={`/details/${skill.name
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                        key={index}
                      >
                        <div className="skill-item">
                          <span className="rank">{index + 1}</span>
                          <img
                            src={`${process.env.PUBLIC_URL}/${
                              skill.name === "Web Developer"
                                ? "webdev.png"
                                : skill.name === "UX/UI Designer"
                                ? "ui.png"
                                : skill.name === "Financial Analyst"
                                ? "finance.png"
                                : skill.name === "Blockchain Developer"
                                ? "blockchain.png"
                                : skill.name === "Comedy Actor"
                                ? "comedy.png"
                                : skill.name === "Psychologist"
                                ? "psychology.png"
                                : skill.name === "University Professor"
                                ? "dean.png"
                                : skill.name === "Air Traffic Controller"
                                ? "airport.png"
                                : skill.name === "Brain Surgeon"
                                ? "brain.png"
                                : "ai.png"
                            }`}
                            alt="Skill Icon"
                            className="skill-icon"
                          />

                          <span className="skill-name">{skill.name}</span>
                          <span>{skill.avgSalary}</span>
                          <span className={getChangeStyle(skill.oneDayChange)}>
                            {skill.oneDayChange}
                          </span>
                          <span
                            className={getChangeStyle(skill.sevenDayChange)}
                          >
                            {skill.sevenDayChange}
                          </span>
                          <span className={getChangeStyle(skill.oneYearChange)}>
                            {skill.oneYearChange}
                          </span>

                          <span>{skill.marketValue}</span>
                          <span>{skill.openings}</span>
                          <span>{skill.workers}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              }
            />
            <Route
              path="/details/:skillName"
              element={<DetailsPage skills={skills} />}
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
