export default function ProjectCard({ title, description, technologies }) {
    return (
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
}
