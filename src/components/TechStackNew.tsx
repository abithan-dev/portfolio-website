import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

const icon = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}`;

const techStack: TechItem[][] = [
  [
    { name: "Python", icon: icon("python/python-original.svg"), url: "https://python.org" },
    { name: "JavaScript", icon: icon("javascript/javascript-original.svg"), url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Java", icon: icon("java/java-original.svg"), url: "https://www.java.com" },
    { name: "React", icon: icon("react/react-original.svg"), url: "https://react.dev" },
    { name: "Node.js", icon: icon("nodejs/nodejs-original.svg"), url: "https://nodejs.org" },
  ],
  [
    { name: "FastAPI", icon: icon("fastapi/fastapi-original.svg"), url: "https://fastapi.tiangolo.com" },
    { name: "Express", icon: icon("express/express-original.svg"), url: "https://expressjs.com" },
    { name: "PostgreSQL", icon: icon("postgresql/postgresql-original.svg"), url: "https://www.postgresql.org" },
    { name: "MongoDB", icon: icon("mongodb/mongodb-original.svg"), url: "https://www.mongodb.com" },
  ],
  [
    { name: "Docker", icon: icon("docker/docker-original.svg"), url: "https://www.docker.com" },
    { name: "AWS", icon: icon("amazonwebservices/amazonwebservices-original-wordmark.svg"), url: "https://aws.amazon.com" },
    { name: "Git", icon: icon("git/git-original.svg"), url: "https://git-scm.com" },
  ],
  [
    { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain", url: "https://www.langchain.com" },
    { name: "LangGraph", icon: "https://cdn.simpleicons.org/langchain", url: "https://langchain-ai.github.io/langgraph/" },
  ],
];

const TechStackNew = () => (
  <div className="techstack-new">
    <div className="techstack-video-container">
      <video autoPlay loop muted playsInline className="techstack-video">
        <source src="/video/video.webm" type="video/webm" />
      </video>
      <div className="techstack-overlay" />
    </div>
    <div className="techstack-content">
      <h2>Tech Stack</h2>
      <div className="techstack-pyramid">
        {techStack.map((row, rowIndex) => (
          <div key={rowIndex} className="techstack-row">
            {row.map((tech) => (
              <a key={tech.name} href={tech.url} target="_blank" rel="noopener noreferrer" className="techstack-item" title={tech.name} data-cursor="disable">
                <img src={tech.icon} alt={tech.name} loading="lazy" decoding="async" />
                <span>{tech.name}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TechStackNew;
