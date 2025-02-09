
"use client";
import { useState,useEffect } from "react";
import ResumePreview from "./components/view";
import ProfileSection from "./components/ProfileSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import CertificationSection from "./components/CertificationSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";

export default function ResumeForm() {


  const defaultCvData = {
    name: "John Doe",
    profession: "Web Developer",
    email: "john.doe@example.com",
    phone: "+123456789",
    address: "123 Main St, City, Country",
    description: "Lorem ipsum dolor sit amet consectetur...",
    skills: ["JavaScript", "React", "Tailwind CSS"],
    education: [{ degree: "BSc Computer Science", institution: "ABC University", year: "2022" }],
    experience: [{ description: "Full-stack developer", institution: "XYZ High School", time: "2018-2022" }],
    certification: [{ description: "Full Stack Web Developer", institution: "XYZ Institute" }],
    projects: [{ description: "Next.js, Prisma, MySQL", project: "Blog App" }],
  };

  // Load saved data from localStorage, or use defaultCvData if empty
  const [cvData, setCvData] = useState(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("cvData");
      return savedData ? JSON.parse(savedData) : defaultCvData;
    }
    return defaultCvData;
  });

  // Save data to localStorage whenever cvData changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cvData", JSON.stringify(cvData));
    }
  }, [cvData]);


  const [imagePreview, setImagePreview] = useState(null);

  return (
    <div className="flex bg-slate-600">
      <div className="overflow-y-scroll scrollbar-none  h-[100vh] w-[50vw] px-4">
        <ProfileSection setImagePreview={setImagePreview} />
        <ContactSection cvData={cvData} setCvData={setCvData} />
        <SkillsSection cvData={cvData} setCvData={setCvData} />
        <EducationSection cvData={cvData} setCvData={setCvData} />
        <AboutSection cvData={cvData} setCvData={setCvData} />
        <ExperienceSection cvData={cvData} setCvData={setCvData} />
        <CertificationSection cvData={cvData} setCvData={setCvData} />
        <ProjectsSection cvData={cvData} setCvData={setCvData} />
      </div>
      <ResumePreview img={imagePreview} cvData={cvData} />
    </div>
  );
}
