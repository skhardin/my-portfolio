import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen flex flex-col bg-gray-300">
      <div className="bg-white shadow-lg px-15 py-15">
        <h1 className="text-4xl font-bold">Selected Projects</h1>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-8 mt-6 px-10 py-10">
        <ProjectCard
          title="Project"
          description="description."
          technologies={["React", "MongoDB", "Node.js"]}
        />
        <ProjectCard
          title="Project"
          description="description."
          technologies={["React", "MongoDB", "Node.js"]}
        />
        <ProjectCard
          title="Project"
          description="description."
          technologies={["React", "MongoDB", "Node.js"]}
        />
      </div>
    </div>
  );
}