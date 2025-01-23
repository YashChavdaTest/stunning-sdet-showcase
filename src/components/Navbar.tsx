import { FileDown } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log("Downloading CV...");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary-dark/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <span className="text-white font-bold text-xl">YC</span>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
            
            <Button
              onClick={handleDownloadCV}
              className="bg-primary hover:bg-primary-dark text-white"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;