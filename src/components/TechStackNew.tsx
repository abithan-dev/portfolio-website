import { useState } from "react";
import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;
const simpleIcon = (name: string) => `https://cdn.simpleicons.org/${name}`;

const techStack: TechItem[][] = [
  [
    { name: "Python", icon: devicon("python/python-original.svg"), url: "https://www.python.org" },
    { name: "JavaScript", icon: devicon("javascript/javascript-original.svg"), url: "https://developer.mozilla.org/docs/Web/JavaScript" },
    { name: "Java", icon: devicon("java/java-original.svg"), url: "https://www.java.com" },
    { name: "React", icon: devicon("react/react-original.svg"), url: "https://react.dev" },
    { name: "Node.js", icon: devicon("nodejs/nodejs-original.svg"), url: "https://nodejs.org" },
    { name: "FastAPI", icon: devicon("fastapi/fastapi-original.svg"), url: "https://fastapi.tiangolo.com" },
    { name: "Express", icon: devicon("express/express-original.svg"), url: "https://expressjs.com" },
    { name: "REST APIs", icon: devicon("swagger/swagger-original.svg"), url: "https://swagger.io" },
  ],
  [
    { name: "PostgreSQL", icon: devicon("postgresql/postgresql-original.svg"), url: "https://www.postgresql.org" },
    { name: "MongoDB", icon: devicon("mongodb/mongodb-original.svg"), url: "https://www.mongodb.com" },
    { name: "Redis", icon: devicon("redis/redis-original.svg"), url: "https://redis.io" },
    { name: "Docker", icon: devicon("docker/docker-original.svg"), url: "https://www.docker.com" },
    { name: "AWS", icon: devicon("amazonwebservices/amazonwebservices-original-wordmark.svg"), url: "https://aws.amazon.com" },
    { name: "Kubernetes", icon: devicon("kubernetes/kubernetes-original.svg"), url: "https://kubernetes.io" },
    { name: "Git", icon: devicon("git/git-original.svg"), url: "https://git-scm.com" },
  ],
  [
    { name: "GitHub", icon: devicon("github/github-original.svg"), url: "https://github.com" },
    { name: "GitHub Actions", icon: devicon("githubactions/githubactions-original.svg"), url: "https://github.com/features/actions" },
    { name: "Linux", icon: devicon("linux/linux-original.svg"), url: "https://www.linux.org" },
    { name: "Postman", icon: devicon("postman/postman-original.svg"), url: "https://www.postman.com" },
    { name: "VS Code", icon: devicon("vscode/vscode-original.svg"), url: "https://code.visualstudio.com" },
    { name: "Vercel", icon: devicon("vercel/vercel-original.svg"), url: "https://vercel.com" },
  ],
  [
    { name: "LangChain", icon: simpleIcon("langchain"), url: "https://www.langchain.com" },
    { name: "LangGraph", icon: simpleIcon("langchain"), url: "https://langchain-ai.github.io/langgraph/" },
    { name: "Anthropic", icon: simpleIcon("anthropic"), url: "https://www.anthropic.com" },
    { name: "Hugging Face", icon: simpleIcon("huggingface"), url: "https://huggingface.co" },
    { name: "OpenAI", icon: simpleIcon("openai"), url: "https://openai.com" },
  ],
];

const TechLogo = ({ tech }: { tech: TechItem }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <span className="tech-logo-fallback" aria-label={`${tech.name} logo`}>{tech.name.slice(0, 2)}</span>;
  }

  return <img src={tech.icon} alt={`${tech.name} logo`} loading="lazy" decoding="async" onError={() => setFailed(true)} />;
};

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
      <p className="techstack-intro">AI, backend, cloud, and developer platforms I use to ship reliable products.</p>
      <div className="techstack-pyramid">
        {techStack.map((row, rowIndex) => (
          <div key={rowIndex} className="techstack-row">
            {row.map((tech) => (
              <a key={tech.name} href={tech.url} target="_blank" rel="noopener noreferrer" className="techstack-item" title={tech.name} data-cursor="disable">
                <TechLogo tech={tech} />
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
