import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior SDET",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Leading test automation initiatives and implementing CI/CD pipelines",
    },
    {
      title: "QA Automation Engineer",
      company: "Digital Innovations Co.",
      period: "2018 - 2020",
      description: "Developed and maintained automated test suites using Selenium and TestNG",
    },
    {
      title: "Software QA Engineer",
      company: "StartUp Labs",
      period: "2016 - 2018",
      description: "Performed manual and automated testing for web applications",
    },
  ];

  return (
    <div className="py-20 bg-primary-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-secondary-dark mb-12">
          Professional Journey
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex gap-6 items-start"
            >
              <div className="bg-primary p-3 rounded-full">
                <Briefcase size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-dark">
                  {exp.title}
                </h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-secondary text-sm mb-2">{exp.period}</p>
                <p className="text-secondary-dark">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;