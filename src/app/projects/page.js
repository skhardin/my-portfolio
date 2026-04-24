const Project = ({ title, description, technologies}) => (
  <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <div className="flex gap-2 mb-2">
      {technologies.map((tech) => (
        <label key={tech} className="text-sm text-gray-500">{tech}</label>
      ))}
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);


export default function Projects() {
  return (
    <div id="projects" className="min-h-screen flex flex-col bg-gray-300">
      <div className="bg-white shadow-lg px-15 py-15">
        <h1 className="text-4xl font-bold">Selected Projects</h1>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-8 mt-6 px-10 py-10">
        <Project 
          title="Project"
          description="description."
          technologies={["React", "MongoDB", "Node.js"]}
          />
          <Project 
          title="Project"
          description="description."
          technologies={["React", "MongoDB", "Node.js"]}
          />
          <Project 
          title="Project"
          description="description."
          technologies={["React", "MongoDB", "Node.js"]}
          />
      </div>
    </div>
  );
}