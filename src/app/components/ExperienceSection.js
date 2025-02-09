export default function ExperienceSection({ cvData, setCvData }) {
    const handleExperienceChange = (index, field, value) => {
      const updatedExperience = [...cvData.experience];
      updatedExperience[index] = { ...updatedExperience[index], [field]: value };
      setCvData({ ...cvData, experience: updatedExperience });
    };
  
    const addExperience = () => setCvData({ ...cvData, experience: [...cvData.experience, { description: "", institution: "", time: "" }] });
  
    const removeExperience = (index) => setCvData({ ...cvData, experience: cvData.experience.filter((_, i) => i !== index) });
  
    return (
      <div className="border-2 border-black p-4 mt-5 rounded-lg">
        <h2 className="text-xl text-white">Experience</h2>
        {cvData.experience.map((exp, index) => (
          <div key={index} className="mb-3">
            <input type="text" placeholder="Job Title" value={exp.description} onChange={(e) => handleExperienceChange(index, "description", e.target.value)} className="border p-2 w-full mb-2" />
            <input type="text" placeholder="Company/Institution" value={exp.institution} onChange={(e) => handleExperienceChange(index, "institution", e.target.value)} className="border p-2 w-full mb-2" />
            <input type="text" placeholder="Time Period" value={exp.time} onChange={(e) => handleExperienceChange(index, "time", e.target.value)} className="border p-2 w-full mb-2" />
            <button onClick={() => removeExperience(index)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
          </div>
        ))}
        <button onClick={addExperience} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Add Experience</button>
      </div>
    );
  }
  