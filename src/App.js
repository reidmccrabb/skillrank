import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import DetailsPage from "./DetailsPage"; // Make sure this is the correct path
import "./App.css";

function App() {
  const initialSkills = [
    {
      name: "AI Engineer",
      avgSalary: "$320,221",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2B",
      openings: "10,000",
      workers: "510,230",
      category: "technology",
    },
    {
      name: "Web Developer",
      avgSalary: "$230,043",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "9,080",
      workers: "490,070",
      category: "technology",
    },
    {
      name: "Brain Surgeon",
      avgSalary: "$192,040",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "19,020",
      workers: "690,033",
      category: "healthcare",
    },
    {
      name: "Comedy Actor",
      avgSalary: "$133,202",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "1,400",
      workers: "120,331",
    },
    {
      name: "University Professor",
      avgSalary: "$110,119",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "2,302",
      workers: "42,090",
      category: "education",
    },
    {
      name: "Air Traffic Controller",
      avgSalary: "$109,994",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "10,177",
      workers: "1,992",
    },
    {
      name: "Blockchain Developer",
      avgSalary: "$109,928",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "80,197",
      workers: "40,101",
      category: "technology",
    },
    {
      name: "UX/UI Designer",
      avgSalary: "$109,911",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "99,803",
      workers: "190,050",
      category: "technology",
    },
    {
      name: "Psychologist",
      avgSalary: "$108,807",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "9,000",
      workers: "466,010",
      category: "healthcare",
    },
    {
      name: "Financial Analyst",
      avgSalary: "$106,200",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "92,300",
      workers: "490,049",
      category: "finance",
    },
    {
      name: "Chef",
      avgSalary: "$106,200",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "92,300",
      workers: "490,049",
    },
    {
      name: "Yoga Instructor",
      avgSalary: "$106,200",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "92,300",
      workers: "490,049",
      category: "education",
    },
    {
      name: "Physical Therapist",
      avgSalary: "$106,200",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "92,300",
      workers: "490,049",
      category: "healthcare",
    },
    {
      name: "Novelist",
      avgSalary: "$106,200",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "92,300",
      workers: "490,049",
    },
    {
      name: "Animator",
      avgSalary: "$106,200",
      oneDayChange: `${(Math.random() * 4 - 2).toFixed(2)}%`,
      sevenDayChange: `${(Math.random() * 10 - 5).toFixed(2)}%`,
      oneYearChange: `${(Math.random() * 20 - 10).toFixed(2)}%`,
      marketValue: "$2.5B",
      openings: "92,300",
      workers: "490,049",
    },
  ];

  const [skills, setSkills] = useState(initialSkills);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

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
          <h1>
            <img src="/rank.png" alt="Rank Icon" className="rank-icon" /> Skill
            Rank
          </h1>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="skills-list">
                    {/* The filter row */}
                    <div>
                      <label>
                        <input
                          type="radio"
                          value="all"
                          checked={selectedCategory === "all"}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        All
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="technology"
                          checked={selectedCategory === "technology"}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        Technology
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="finance"
                          checked={selectedCategory === "finance"}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        Finance
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="healthcare"
                          checked={selectedCategory === "healthcare"}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        Healthcare
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="education"
                          checked={selectedCategory === "education"}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        Education
                      </label>
                    </div>

                    {/* The header row */}
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

                    {filteredSkills.map((skill, index) => (
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
                                : skill.name === "Chef"
                                ? "chef.png"
                                : skill.name === "Animator"
                                ? "animate.png"
                                : skill.name === "Blockchain Developer"
                                ? "blockchain.png"
                                : skill.name === "Novelist"
                                ? "book.png"
                                : skill.name === "Comedy Actor"
                                ? "comedy.png"
                                : skill.name === "Yoga Instructor"
                                ? "lotus.png"
                                : skill.name === "Physical Therapist"
                                ? "therapist.png"
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
