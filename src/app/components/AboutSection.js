import React from "react";
import { Input } from "@/components/ui/input"; // Assuming you're using shadcn/ui components
const AboutSection = ({ cvData, setCvData }) => {
  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the state
    }));
  };

  return (
    <div className="p-4 border-2  border-black mt-2 rounded-lg shadow-lg">
      {/* Name Field */}
      <div className="mb-4">
        <label className="block   text-white text-lg font-semibold mb-2">
          Name
        </label>
        <Input
          name="name"
          value={cvData.name}
          onChange={handleChange}
          className="bg-slate-400 w-full text-black p-2 rounded-md"
        />
      </div>

      {/* Profession Field */}
      <div className="mb-4">
        <label className="block text-white text-lg font-semibold mb-2">
          Profession
        </label>
        <Input
          name="profession"
          value={cvData.profession}
          onChange={handleChange}
          className="bg-slate-400 w-full text-black p-2 rounded-md"
        />
      </div>

      {/* About Me Field */}
      <div className="mb-4">
        <label className="block text-white text-lg font-semibold mb-2">
          About Me
        </label>
        <textarea
          name="description"
          value={cvData.description}
          onChange={handleChange}
          rows="4"
          className="w-full bg-slate-400 text-black p-2 rounded-md"
          placeholder="Enter a brief description about yourself"
        />
      </div>
    </div>
  );
};

export default AboutSection;
