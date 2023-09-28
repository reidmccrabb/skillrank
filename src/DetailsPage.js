import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailsPage({ skills }) {
    const { skillName } = useParams();

    const [newsArticles, setNewsArticles] = useState([]);
    const skill = skills.find(s => s.name.replace(/\s+/g, "-").toLowerCase() === skillName);

    useEffect(() => {
        const API_KEY = 'gj0XOFRwhSKdmP_qPP_VlYlF4hWOMHvba2IKrQiyFP3B2jgy'; // Replace with your actual API key
        const url = `https://api.currentsapi.services/v1/latest-news?language=en&category=technology&keywords=${skill.name}&apiKey=${API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data && data.news && data.news.length > 0) {
                    setNewsArticles(data.news.slice(0, 3)); // Get the first three articles
                }
            })
            .catch(error => {
                console.error("Error fetching news:", error);
            });
    }, [skill.name]);

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
                {newsArticles.map(article => (
                    <article key={article.id} className="news-article">
                        <img src={article.image} alt={article.title} className="news-image" />
                        <h4>{article.title}</h4>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </article>
                ))}

            </div>

            <div className="courses-section">
                <h3>Courses on {skill.name}</h3>
                <ul className="courses-list">
                    <li><a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">Become a {skill.name} - Udemy</a></li>
                    <li><a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">What every {skill.name} Learns - Coursera</a></li>
                    <li><a href="https://www.useskillflow.com/" target="_blank" rel="noopener noreferrer">{skill.name} Fundamentals - Skillflow</a></li>
                </ul>
            </div>
        </div>
    );
}

export default DetailsPage;