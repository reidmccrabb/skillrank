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
                <p>1 Year % Change: {skill.oneYearChange}</p>
                <p>Total Market Cap: {skill.marketValue}</p>
                <p>Total Openings: {skill.openings}</p>
                <p>Total # of Workers: {skill.workers}</p>

                {/* ... add more details here */}
            </div>

            <div className="news-section">
                <h3>News on {skill.name}</h3>
                <article className="news-article">
                    <img src="/sample-news-image.jpg" alt="Sample News" className="news-image" />
                    <h4>The Rise of the {skill.name} role in 2023</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at odio nec ligula facilisis lacinia.</p>
                    <a href="/news-article-1">Read more</a>
                </article>
                {/* ... you can add more articles in a similar format */}
            </div>

            <div className="courses-section">
                <h3>Courses on {skill.name}</h3>
                {/* Add your courses content here */}
            </div>
        </div>
    );
}

export default DetailsPage;