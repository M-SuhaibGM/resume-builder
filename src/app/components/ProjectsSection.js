export default function ProjectsSection({ cvData, setCvData }) {
    const handleProjectChange = (index, field, value) => {
      const updatedProjects = [...cvData.projects];
      updatedProjects[index] = { ...updatedProjects[index], [field]: value };
      setCvData({ ...cvData, projects: updatedProjects });
    };
  
    const addProject = () => setCvData({ ...cvData, projects: [...cvData.projects, { project: "", description: "" }] });
  
    const removeProject = (index) => setCvData({ ...cvData, projects: cvData.projects.filter((_, i) => i !== index) });
  
    return (
      <div className="border-2 border-black p-4 mt-5 rounded-lg">
        <h2 className="text-xl text-white">Projects</h2>
        {cvData.projects.map((proj, index) => (
          <div key={index} className="mb-3">
            <input type="text" placeholder="Project Title" value={proj.project} onChange={(e) => handleProjectChange(index, "project", e.target.value)} className="border p-2 w-full mb-2" />
            <input type="text" placeholder="Description" value={proj.description} onChange={(e) => handleProjectChange(index, "description", e.target.value)} className="border p-2 w-full mb-2" />
            <button onClick={() => removeProject(index)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
          </div>
        ))}
        <button onClick={addProject} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Add Project</button>
      </div>
    );
  }

  