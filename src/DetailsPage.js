import { useParams } from "react-router-dom";

function DetailsPage({ skills }) {
    const { skillName } = useParams();

    const skill = skills.find(s => s.name.replace(/\s+/g, "-").toLowerCase() === skillName);

    if (!skill) {
        return <div>Skill not found!</div>;
    }

    // Render skill details
    return (
        <div>
            <h2>{skill.name}</h2>
            <p>Avg. Salary: {skill.avgSalary}</p>
            <p>1 Day % Change: {skill.oneDayChange}</p>
            <p>7 Day % Change: {skill.sevenDayChange}</p>
            {/* ... add more details here */}
        </div>
    );
}

export default DetailsPage;
