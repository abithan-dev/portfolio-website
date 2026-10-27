# My Portfolio

A responsive 3D portfolio website for **Abithan P**, a Python Developer and Generative AI Engineer based in Coimbatore, India. The site presents professional experience, AI-focused projects, technical skills, contact details, and an interactive 3D landing experience.

## Highlights

- Interactive 3D character experience rendered with Three.js and WebGL
- Responsive React and TypeScript interface with GSAP-powered motion
- Profile content tailored to Generative AI, LLM workflows, LangChain, LangGraph, FastAPI, Docker, AWS, PostgreSQL, and MongoDB
- Project showcase for AI workflow automation, multi-agent research, and AI-assisted pull-request review
- Portfolio chat endpoint designed to answer visitor questions about Abithan's work
- Mobile-friendly design with a portrait fallback for the 3D character

## Tech Stack

- React, TypeScript, Vite
- Three.js, WebGL, GSAP, Lenis
- Node.js serverless API route
- Groq API for the optional portfolio chat

## Run Locally

```bash
npm install
npm run dev
```

Create a `.env` file to enable the chat API when running with a compatible serverless development environment:

```env
GROQ_API_KEY=your_groq_api_key
```

For the production build:

```bash
npm run build
```

## Contact

- Email: careerabithan@gmail.com
- LinkedIn: https://www.linkedin.com/in/iamabithan

## License

Released under the [MIT License](LICENSE).
