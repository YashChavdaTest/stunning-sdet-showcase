import { Check } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Automation",
      items: ["Selenium", "Cypress", "Playwright", "TestCafe"],
    },
    {
      category: "Programming",
      items: ["JavaScript/TypeScript", "Python", "Java", "SQL"],
    },
    {
      category: "Tools & Frameworks",
      items: ["Jest", "Mocha", "Jenkins", "Docker"],
    },
    {
      category: "Methodologies",
      items: ["Agile/Scrum", "TDD", "BDD", "CI/CD"],
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-secondary-dark mb-12">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {skillSet.category}
              </h3>
              <ul className="space-y-3">
                {skillSet.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-secondary-dark">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;