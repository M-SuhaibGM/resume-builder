export default function SkillsSection({ cvData, setCvData }) {
    const handleSkillChange = (index, value) => {
      const updatedSkills = [...cvData.skills];
      updatedSkills[index] = value;
      setCvData({ ...cvData, skills: updatedSkills });
    };
  
    const addSkill = () => setCvData({ ...cvData, skills: [...cvData.skills, ""] });
    const removeSkill = (index) => setCvData({ ...cvData, skills: cvData.skills.filter((_, i) => i !== index) });
  
    return (
      <div className="border-2 border-black p-4 mt-5 rounded-lg">
        <h2 className="text-xl text-white">Skills</h2>
        {cvData.skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input type="text" value={skill} onChange={(e) => handleSkillChange(index, e.target.value)} className="border p-2 w-full" />
            <button onClick={() => removeSkill(index)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
          </div>
        ))}
        <button onClick={addSkill} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Add Skill</button>
      </div>
    );
  }
  