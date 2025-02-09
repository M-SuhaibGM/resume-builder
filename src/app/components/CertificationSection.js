export default function CertificationSection({ cvData, setCvData }) {
    const handleCertificationChange = (index, field, value) => {
      const updatedCertifications = [...cvData.certification];
      updatedCertifications[index] = { ...updatedCertifications[index], [field]: value };
      setCvData({ ...cvData, certification: updatedCertifications });
    };
  
    const addCertification = () => setCvData({ ...cvData, certification: [...cvData.certification, { description: "", institution: "" }] });
  
    const removeCertification = (index) => setCvData({ ...cvData, certification: cvData.certification.filter((_, i) => i !== index) });
  
    return (
      <div className="border-2 border-black p-4 mt-5 rounded-lg">
        <h2 className="text-xl text-white">Certifications</h2>
        {cvData.certification.map((cert, index) => (
          <div key={index} className="mb-3">
            <input type="text" placeholder="Certification Title" value={cert.description} onChange={(e) => handleCertificationChange(index, "description", e.target.value)} className="border p-2 w-full mb-2" />
            <input type="text" placeholder="Issuing Institution" value={cert.institution} onChange={(e) => handleCertificationChange(index, "institution", e.target.value)} className="border p-2 w-full mb-2" />
            <button onClick={() => removeCertification(index)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
          </div>
        ))}
        <button onClick={addCertification} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Add Certification</button>
      </div>
    );
  }
  