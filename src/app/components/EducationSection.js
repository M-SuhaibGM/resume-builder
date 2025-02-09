export default function EducationSection({ cvData, setCvData }) {
    const handleEducationChange = (index, field, value) => {
      const updatedEducation = [...cvData.education];
      updatedEducation[index] = { ...updatedEducation[index], [field]: value };
      setCvData({ ...cvData, education: updatedEducation });
    };
  
    const addEducation = () => setCvData({ ...cvData, education: [...cvData.education, { degree: "", institution: "", year: "" }] });
  
    const removeEducation = (index) => setCvData({ ...cvData, education: cvData.education.filter((_, i) => i !== index) });
  
    return (
      <div className="border-2 border-black p-4 mt-5 rounded-lg">
        <h2 className="text-xl text-white">Education</h2>
        {cvData.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleEducationChange(index, "degree", e.target.value)} className="border p-2 w-full mb-2" />
            <input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => handleEducationChange(index, "institution", e.target.value)} className="border p-2 w-full mb-2" />
            <input type="text" placeholder="Year" value={edu.year} onChange={(e) => handleEducationChange(index, "year", e.target.value)} className="border p-2 w-full mb-2" />
            <button onClick={() => removeEducation(index)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
          </div>
        ))}
        <button onClick={addEducation} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Add Education</button>
      </div>
    );
  }
  