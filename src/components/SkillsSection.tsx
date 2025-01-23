const SkillsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Cards */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600">
              Building responsive and modern web applications using React, TypeScript, and Tailwind CSS.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
            <p className="text-gray-600">
              Creating robust server-side applications with Node.js, Express, and MongoDB.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Testing & QA</h3>
            <p className="text-gray-600">
              Implementing comprehensive testing strategies using Jest, React Testing Library, and Cypress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;