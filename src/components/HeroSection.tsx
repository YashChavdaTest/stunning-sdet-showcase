import { Briefcase, Code } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-light to-white">
      <div className="container mx-auto px-6 py-20 animate-fade-up">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary-dark mb-6">
            Software QA Engineer
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8">
            Ensuring software quality through automated testing and continuous integration
          </p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
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