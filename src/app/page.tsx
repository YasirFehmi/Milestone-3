"use client"; 
import Image from "next/image";
import { useState } from "react";
import FormSection from "./components/FormSection";
import ResumePreview from "./components/ResumePreview";
import { ResumeData } from "./components/ResumeData";

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  return (
    <div className="container">
      <h1>Dynamic Resume Builder</h1>
      <div className="content">
        <FormSection onUpdate={setResumeData} />
        {resumeData && <ResumePreview resumeData={resumeData} />}
      </div>
    </div>
  );
}
