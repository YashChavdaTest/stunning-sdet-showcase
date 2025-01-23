import { Briefcase, Code } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Yash Chavda";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-secondary-dark via-primary-dark to-secondary-dark">
      <div className="container mx-auto px-6 py-20 animate-fade-up">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Ensuring software quality through automated testing and continuous integration
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={scrollToProjects}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              <Briefcase size={20} />
              View Projects
            </button>
            <button className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg border-2 border-primary hover:bg-primary-light transition-colors">
              <Code size={20} />
              See Skills
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;