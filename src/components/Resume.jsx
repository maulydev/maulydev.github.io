import pdf_resume from "../assets/resume.pdf";

const Resume = () => {
  return <embed src={pdf_resume} className="w-full h-screen" />;
};

export default Resume;
