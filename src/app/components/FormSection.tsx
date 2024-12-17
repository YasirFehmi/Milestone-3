"use client";

import { useState } from "react";

interface Props {
  onUpdate: (data: any) => void;
}

export default function FormSection({ onUpdate }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    workExperience: "",
    skills: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    const formattedData = {
      ...formData,
      education: formData.education.split("\n"),
      workExperience: formData.workExperience.split("\n"),
      skills: formData.skills.split(","),
    };

    onUpdate(formattedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Personal Information</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <h2>Education</h2>
      <textarea
        name="education"
        value={formData.education}
        onChange={handleChange}
        placeholder="Enter education details, each on a new line"
        required
      />

      <h2>Work Experience</h2>
      <textarea
        name="workExperience"
        value={formData.workExperience}
        onChange={handleChange}
        placeholder="Enter work experience, each on a new line"
      />

      <h2>Skills</h2>
      <textarea
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        placeholder="Enter skills separated by commas"
        required
      />

      <button type="submit">Generate Resume</button>
    </form>
  );
}
