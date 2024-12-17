import { ResumeData } from "./ResumeData";

interface Props {
  resumeData: ResumeData;
}

export default function ResumePreview({ resumeData }: Props) {
  return (
    <div className="resume-preview">
      <h1>{resumeData.name}</h1>
      <p>{resumeData.email}</p>

      <h2>Education</h2>
      <ul>
        {resumeData.education.map((edu, index) => (
          <li key={index}>{edu}</li>
        ))}
      </ul>

      <h2>Work Experience</h2>
      <ul>
        {resumeData.workExperience.map((work, index) => (
          <li key={index}>{work}</li>
        ))}
      </ul>

      <h2>Skills</h2>
      <ul>
        {resumeData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
