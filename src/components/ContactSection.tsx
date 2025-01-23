import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-secondary-dark mb-8">
          Let's Connect
        </h2>
        <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
          Interested in collaborating or have a testing challenge? Let's discuss how we can work together.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#333] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;