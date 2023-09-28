import { useParams } from "react-router-dom";

function DetailsPage({ skills }) {
    const { skillName } = useParams();

    const skill = skills.find(s => s.name.replace(/\s+/g, "-").toLowerCase() === skillName);

    if (!skill) {
        return <div>Skill not found!</div>;
    }

    // Render skill details
    return (
        <div className="details-wrapper">
            <div className="skill-details">
                <h2>{skill.name}</h2>
                <p>Avg. Salary: {skill.avgSalary}</p>
                <p>1 Day % Change: {skill.oneDayChange}</p>
                <p>7 Day % Change: {skill.sevenDayChange}</p>
                {/* ... add more details here */}
            </div>

            <div className="news-section">
                <h3>News on {skill.name}</h3>
                {/* Add your news content here */}
            </div>

            <div className="courses-section">
                <h3>Courses on {skill.name}</h3>
                {/* Add your courses content here */}
            </div>
        </div>
    );
}

export default DetailsPage;
