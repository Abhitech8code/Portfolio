import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Database,
  Server,
  Component,
  GitBranch,
  Sun,
  Moon,
  Sparkles,
  ArrowRight,
  Eye,
  Award,
  Phone,
  Briefcase, 
  GraduationCap, 
  Link as LinkIcon, 
} from "lucide-react";

// Main App Component
const App = () => {
  const [theme, setTheme] = useState("dark"); // Default to dark theme
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Apply theme class to body
  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Threshold of 50px
        setIsNavbarTransparent(false);
      } else {
        setIsNavbarTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Particle generation for hero background
  const particles = Array.from({ length: 50 }); 

  // Typing animation states
  const rolesToType = ["Web Developer", "Web Designer", "MERN Stack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayBeforeTypingNext = 1500;

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const currentFullRole = rolesToType[currentRoleIndex];
      if (isDeleting) {
        setTypedRole(currentFullRole.substring(0, typedRole.length - 1));
        timer = setTimeout(handleTyping, deletingSpeed);
      } else {
        setTypedRole(currentFullRole.substring(0, typedRole.length + 1));
        timer = setTimeout(handleTyping, typingSpeed);
      }

      if (!isDeleting && typedRole === currentFullRole) {
        setIsDeleting(true);
        clearTimeout(timer); 
        timer = setTimeout(handleTyping, delayBeforeTypingNext); 
      } else if (isDeleting && typedRole === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % rolesToType.length);
        clearTimeout(timer); 
      }
    };

    const initialDelay = typedRole === "" && !isDeleting && currentRoleIndex === 0 ? 500 : (isDeleting ? deletingSpeed : typingSpeed);
    timer = setTimeout(handleTyping, initialDelay);
    
    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, currentRoleIndex]);


  // Scroll Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            // Optional: Remove class if you want animation to re-trigger on scroll up then down
            // entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed (0.1 means 10% of element is visible)
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);


  // Data for sections
  const professionalExperiences = [
    {
      role: "Testing Engineer & IT Support",
      company: "Netra Kumbh - Maha Kumbh 2025",
      duration: "Jan 2025 - Feb 2025",
      responsibilities: [
        "Provided technical support for on-site operations and system functionality.",
        "Verified data accuracy and assisted with digital coordination for event management.",
        "Ensured smooth client-server connectivity and maintained hardware/software readiness.",
      ],
      icon: <Briefcase className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    },
    {
      role: "Developer & Computer Operator",
      company: "ISO Council - International Spirituality Olympiad, Noida",
      duration: "Dec 2024",
      responsibilities: [
        "Assisted in the development and maintenance of web portals during the event.",
        "Handled backend data entry tasks and troubleshooting for event systems.",
        "Supported both technical and administrative teams with digital tools.",
      ],
      icon: <Briefcase className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    },
    {
      role: "Customer Service Associate",
      company: "India MART Intermesh Ltd.",
      duration: "Mar 2023 - Jun 2023",
      responsibilities: [
        "Provided frontline support to customers via calls and emails, ensuring issue resolution.",
        "Performed accurate data entry and order handling in CRM systems.",
        "Collaborated with the sales and technical teams to improve customer satisfaction.",
      ],
      icon: <Briefcase className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    },
  ];

  const educationDetails = [
    {
      degree: "'O' Level Diploma (Computer Science)",
      institution: "NIELIT Delhi - UPTEC Prayagraj",
      duration: "Dec 31, 2020",
      score: "60%",
      icon: <GraduationCap className="w-8 h-8 text-green-600 dark:text-green-400" />,
    },
    {
      degree: "B.A. in Political Science",
      institution: "CSJMU Kanpur - SSD College Prayagraj",
      duration: "2016-2018",
      score: "60%",
      icon: <GraduationCap className="w-8 h-8 text-green-600 dark:text-green-400" />,
    },
    {
      degree: "Intermediate Science (12th)",
      institution: "MP Board - Saraswati H.S. School, Krishna Nagar, Satna",
      duration: "2014",
      score: "70%",
      icon: <GraduationCap className="w-8 h-8 text-green-600 dark:text-green-400" />,
    },
    {
      degree: "High School (10th)",
      institution: "MP Board - Saraswati H.S. School, Krishna Nagar, Satna",
      duration: "2012",
      score: "80%",
      icon: <GraduationCap className="w-8 h-8 text-green-600 dark:text-green-400" />,
    },
  ];

  const certifications = [

    {
      name: "'O' Level",
      issuer: "NIELIT",
      date: "Dec 31, 2020",
      icon: <Award className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />,
      link: "#", 
      description: "Practical and Theoretical understanding of IT ,Web Technology, C Language, ICT  Fundamentals.",
      imageSrc: "https://github.com/Abhitech8code/Portfolio/blob/main/public/OLEVEL.jpg?raw=true",
      imageAlt: "'O' Level Diploma Degree",
    },
    {
      name: "The Complete 2023 Web Development Bootcamp",
      issuer: "Udemy (Dr. Angela Yu)",
      date: "June 10, 2023",
      icon: <Award className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />,
      link: "https://ude.my/UC-33563107-5384-493b-8b87-ba9307ee7f63",
      description: "66-hour bootcamp covering HTML, CSS, JS, Bootstrap, DOM, basic React.",
      imageSrc: "/public/certificates/Web Development Udemy.png", 
      imageAlt: "Udemy Web Development Bootcamp Certificate",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Sep 21, 2022",
      icon: <Award className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />,
      link: "https://freecodecamp.org/certification/AbhiCoder08/responsive-web-design",
      description: "300-hour course on HTML5, CSS3, Flexbox, Grid, media queries.",
      imageSrc: "/public/certificates/Responsive web design Freecodecamp.png", 
      imageAlt: "freeCodeCamp Responsive Web Design Certificate",
    },
    {
      name: "Python Data Structures",
      issuer: "Sololearn",
      date: "Sep 14, 2022",
      icon: <Award className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />,
      link: "#", 
      description: "Theoretical and practical understanding of Python Data Structures.",
      imageSrc: "/public/certificates/Python Data Structure Sololearn.png", 
      imageAlt: "Sololearn Python Data Structures Certificate",
    },
    {
      name: "SQL",
      issuer: "Sololearn",
      date: "Oct 19, 2022",
      icon: <Award className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />,
      link: "#",
      description: "Theoretical and practical understanding of SQL.",
      imageSrc: "/public/certificates/Sql SOlolearn.png", 
      imageAlt: "Sololearn SQL Certificate",
    },
    {
      name: "CSS",
      issuer: "Sololearn",
      date: "July 26, 2022",
      icon: <Award className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />,
      link: "#",
      description: "Theoretical understanding of CSS.",
      imageSrc: "/public/certificates/Css Sololearn.png", 
      imageAlt: "Sololearn CSS Certificate",
    },
    {
      name: "HTML Essential Training",
      issuer: "LinkedIn Learning",
      date: "Jan 01, 2022",
      icon: <Award className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />,
      link: "#", 
      description: "2h 45m course on HTML essentials.",
      imageSrc: "/public/certificates/HTML Linkedin.png", 
      imageAlt: "LinkedIn Learning HTML Certificate",
    },
    {
      name: "Front end Development - HTML",
      issuer: "Great Learning Academy",
      date: "Nov 2021",
      icon: <Award className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />,
      link: "https://verify.greatlearning.in/DUBFWLAG", 
      description: "Free online course in Front-end HTML Development.",
      imageSrc: "/public/certificates/Screenshot 2025-05-30 184536.png", 
      imageAlt: "Great Learning HTML Certificate",
    },
    {
      name: "Web Development Fundamentals",
      issuer: "Sololearn",
      date: "June 26, 2022",
      icon: <Award className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />,
      link: "#", 
      description: "Theoretical understanding of Web Development Fundamentals.",
      imageSrc: "/public/certificates/Web Devlopment Sololearn.png",
      imageAlt: "Sololearn Web Development Fundamentals Certificate",
    },
  ];


  return (
    <div
      className={`min-h-screen font-inter ${
        theme === "dark"
          ? "bg-slate-950 text-slate-100" 
          : "bg-slate-100 text-slate-800" 
      } transition-colors duration-300`}
    >
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 p-4 transition-all duration-300 ${
          isNavbarTransparent
            ? 'bg-transparent shadow-none'
            : `shadow-lg backdrop-blur-md ${theme === 'dark' ? 'bg-slate-900 bg-opacity-80' : 'bg-white bg-opacity-80'}` 
      }`}>
        <div className="container mx-auto flex justify-between items-center">
         <a href="/"> <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text tracking-wide drop-shadow-lg font-[Poppins]">
            Abhi-Dev
          </h1></a>
          <div className={`flex items-center space-x-1 sm:space-x-2 md:space-x-3 text-xs sm:text-sm md:text-base flex-wrap justify-end 
                          ${isNavbarTransparent && theme === 'dark' ? 'text-slate-100' : ''}
                          ${isNavbarTransparent && theme === 'light' ? 'text-slate-700' : ''}
                          ${!isNavbarTransparent && theme === 'dark' ? 'text-slate-100' : ''}
                          ${!isNavbarTransparent && theme === 'light' ? 'text-slate-700' : ''}
                          `}>
            <a href="#home" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 px-1 py-1 sm:px-2">Home</a>
            <a href="#about" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 px-1 py-1 sm:px-2">About</a>
            <a href="#skills" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 px-1 py-1 sm:px-2">Skills</a>
            <a href="#experience" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 px-1 py-1 sm:px-2">Experience</a>
            <a href="#projects" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 px-1 py-1 sm:px-2">Projects</a>
            <a href="#education" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 px-1 py-1 sm:px-2">Education</a>
            <a href="#certifications" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 px-1 py-1 sm:px-2">Certificates</a>
            <a href="#contact" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 px-1 py-1 sm:px-2">Contact</a>
            
            <a
              href="/Abhishek_CV.pdf"
              download="Abhishek_CV.pdf"
              className={`inline-flex items-center px-2.5 py-1.5 text-xs sm:text-sm font-medium rounded-md shadow-sm 
                          text-white bg-purple-600 hover:bg-purple-700
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 
                          ${theme === 'dark' ? 'focus:ring-offset-slate-900' : 'focus:ring-offset-slate-50'}
                          transition-colors duration-200 mr-1 sm:mr-2`}
              aria-label="Download CV"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:mr-1.5" />
              <span className="hidden md:inline">Download cv</span>
            </a>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500
                          ${theme === 'dark' ? 'bg-slate-700 hover:bg-slate-600 focus:ring-offset-slate-900' : 'bg-slate-200 hover:bg-slate-300 focus:ring-offset-slate-50'}
                        `}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center h-screen overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-900 to-slate-900 dark:from-blue-900 dark:via-purple-950 dark:to-black opacity-70 dark:opacity-60"></div>
          <div className="absolute inset-0 particle-container">
            {particles.map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="w-48 h-48 md:w-60 md:h-60 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg transform hover:scale-105 transition-transform duration-300 scroll-animate">
            <img
              src="https://img.freepik.com/premium-photo/boy-is-sitting-front-laptop-that-has-picture-boy-it_862994-352060.jpg?uid=R157439276&ga=GA1.1.390215850.1702361898&semt=ais_items_boosted&w=740" 
              alt="Abhishek Shukla Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/128x128/3B82F6/FFFFFF?text=AS";
              }}
            />
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-2 bg-gradient-to-r from-purple-400 to-blue-600 text-transparent bg-clip-text animate-fade-in-up">
            Hi, I'm <span className="block md:inline">Abhishek Shukla</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-100 dark:text-slate-200 animate-fade-in-up delay-100 typing-effect min-h-[40px] md:min-h-[48px]">
            <span className="typing-cursor">{typedRole}</span>
          </h3>
          <p className="text-lg md:text-xl mb-6 text-slate-200 dark:text-slate-300 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            Passionate about crafting responsive, scalable web applications and bringing innovative digital ideas to life.
          </p>
          <div className="flex justify-center space-x-4 mb-6 animate-fade-in-up delay-300">
            <a href="https://github.com/Abhitech8code" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transform hover:scale-125 transition-transform duration-200" aria-label="GitHub"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/abhishek-shukla-4bab13204/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transform hover:scale-125 transition-transform duration-200" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:abhishekshukla01071997@gmail.com" className="text-slate-300 hover:text-red-400 transform hover:scale-125 transition-transform duration-200" aria-label="Email Abhishek Shukla"><Mail className="w-6 h-6" /></a>
            <a href="tel:+917052757579"  className="text-slate-300 hover:text-green-400 transform hover:scale-125 transition-transform duration-200" aria-label="Call Abhishek Shukla"><Phone className="w-6 h-6" /></a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/Abhishek_CV.pdf" target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center px-8 py-3 text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg hover:from-green-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-75 animate-fade-in-up delay-500">
              Preview CV <Eye className="ml-3 w-5 h-5" />
            </a>
            <a href="#contact"
              className="inline-flex items-center px-8 py-3 text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-75 animate-fade-in-up delay-600">
              Contact Me <Mail className="ml-3 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-teal-600 dark:bg-teal-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob top-1/4 left-1/4"></div>
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-pink-600 dark:bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000 bottom-1/4 right-1/4"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 to-blue-600 dark:from-green-400 dark:to-blue-500 text-transparent bg-clip-text scroll-animate">
            The Story So Far
          </h3>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed bg-white dark:bg-slate-900 bg-opacity-90 dark:bg-opacity-80 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 scroll-animate">
            <p className="mb-6 text-center text-2xl font-semibold text-teal-700 dark:text-teal-400">
              From Code Enthusiast to Full-Stack Craftsman.
            </p>
            <p className="mb-6 text-slate-700 dark:text-slate-200"> {/* Updated dark mode text color */}
              Hello! I'm <span className="font-bold text-purple-700 dark:text-purple-400">Abhishek Shukla</span>, a dedicated Full-Stack Developer with a solid foundation in Computer Science. My journey into web development has been driven by a deep passion for transforming complex problems into elegant, user-centric digital solutions. With hands-on experience in <span className="font-semibold text-slate-800 dark:text-slate-100">React.js, Node.js, Express.js, and MongoDB</span>, I thrive on building responsive UIs and scalable backend systems.
            </p>
            <p className="mb-6 text-slate-700 dark:text-slate-200"> {/* Updated dark mode text color */}
              My professional path has equipped me with practical skills in diverse environments – from providing crucial IT support during <span className="italic">Maha Kumbh 2025</span> to developing web portals for the <span className="italic">International Spirituality Olympiad</span>, and honing customer interaction abilities at <span className="italic">India MART</span>. Each experience has enriched my understanding of the end-to-end development lifecycle and the importance of collaborative teamwork.
            </p>
            <p className="mb-6 text-slate-700 dark:text-slate-200"> {/* Updated dark mode text color */}
              I'm not just about code; I'm about creating <span className="font-semibold text-slate-800 dark:text-slate-100">visually engaging and intuitive digital experiences</span>. This enthusiasm extends to my interests in UI/UX design.
            </p>
            <p className="mb-4 text-slate-700 dark:text-slate-200"> {/* Updated dark mode text color */}
              Currently, I'm seeking an opportunity where I can contribute my skills to a growth-focused team. My goal is to continuously learn, innovate, and build applications that make a difference.
            </p>
            <p className="text-md text-slate-600 dark:text-slate-400">
                Beyond the screen, you'll find me lost in books, on the cricket field, sketching, or cooking. These passions fuel my creativity.
            </p>
            <p className="mt-6 text-center font-semibold text-teal-700 dark:text-teal-400">
                Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative overflow-hidden card-container-3d">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern dark:bg-dots-pattern-dark"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500 text-transparent bg-clip-text scroll-animate">
            My Toolkit
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {[
              { name: "MongoDB", icon: <Database className="w-10 h-10 md:w-12 md:h-12 text-green-500" />, description: "NoSQL Database" },
              { name: "Express.js", icon: <Server className="w-10 h-10 md:w-12 md:h-12 text-slate-600 dark:text-slate-400" />, description: "Backend Framework" },
              { name: "React.js", icon: <Component className="w-10 h-10 md:w-12 md:h-12 text-sky-500 dark:text-sky-400" />, description: "Frontend Library" },
              { name: "Node.js", icon: <Code className="w-10 h-10 md:w-12 md:h-12 text-green-600" />, description: "Runtime Environment" },
              { name: "HTML5", icon: <Code className="w-10 h-10 md:w-12 md:h-12 text-orange-600" />, description: "Web Markup" },
              { name: "CSS3", icon: <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-blue-600 dark:text-blue-500" />, description: "Styling Language" },
              { name: "JavaScript", icon: <Code className="w-10 h-10 md:w-12 md:h-12 text-yellow-500 dark:text-yellow-400" />, description: "Programming Language" },
              { name: "Tailwind CSS", icon: <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-cyan-500 dark:text-cyan-400" />, description: "Utility-First CSS" },
              { name: "Git", icon: <GitBranch className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />, description: "Version Control" },
              { name: "GitHub", icon: <Github className="w-10 h-10 md:w-12 md:h-12 text-slate-700 dark:text-slate-400" />, description: "Code Hosting" },
              { name: "VS Code", icon: <Code className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />, description: "IDE" },
              { name: "Responsive Design", icon: <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-purple-500 dark:text-purple-400" />, description: "UI/UX Design" },
              { name: "Canva", icon: <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-pink-500 dark:text-pink-400" />, description: "Graphic Design"},
            ].map((skill, index) => (
              <div
                key={index}
                className={`scroll-animate card-3d relative p-4 md:p-6 rounded-lg shadow-xl border 
                             ${theme === 'dark' ? 'border-slate-700 bg-slate-900 bg-opacity-80 backdrop-blur-sm' : 'border-slate-200 bg-white bg-opacity-80 backdrop-blur-sm'}
                             flex flex-col items-center justify-center text-center group overflow-hidden skill-card`}
              >
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-teal-500 transition-all duration-300 glow-border"></div>
                <div className="mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className={`text-lg md:text-xl font-semibold mb-1 md:mb-2 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-300 to-cyan-300 text-transparent bg-clip-text' : 'text-slate-800'}`}>
                  {skill.name}
                </h4>
                <p className={`text-xs md:text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
            <div className="absolute w-80 h-80 bg-indigo-600 dark:bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob top-1/3 left-1/4 animation-delay-1000"></div>
            <div className="absolute w-80 h-80 bg-rose-600 dark:bg-rose-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob bottom-1/3 right-1/4 animation-delay-3000"></div>
        </div>
        <div className="container mx-auto relative z-10">
            <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 to-rose-600 dark:from-indigo-400 dark:to-rose-500 text-transparent bg-clip-text scroll-animate">
                Professional Journey
            </h3>
            <div className="space-y-12">
                {professionalExperiences.map((exp, index) => (
                    <div key={index} className={`scroll-animate flex flex-col md:flex-row items-start p-6 md:p-8 rounded-xl shadow-2xl 
                                                ${theme === 'dark' ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'} 
                                                border transform hover:shadow-lg hover:scale-[1.02] dark:hover:shadow-indigo-500/20 hover:shadow-indigo-400/30 transition-all duration-300`}>
                        <div className={`flex-shrink-0 mb-4 md:mb-0 md:mr-6 p-3 rounded-full shadow-md ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}>
                            {exp.icon}
                        </div>
                        <div className="flex-grow">
                            <h4 className={`text-2xl font-semibold mb-1 ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-700'}`}>{exp.role}</h4>
                            <p className={`text-md font-medium mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{exp.company}</p>
                            <p className={`text-sm italic mb-3 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{exp.duration}</p>
                            <ul className={`list-disc list-inside space-y-1 text-sm md:text-base ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                                {exp.responsibilities.map((resp, i) => (
                                    <li key={i}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative overflow-hidden card-container-3d">
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-600 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob top-10 left-10"></div>
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-indigo-600 dark:bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 bottom-10 right-10"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-500 text-transparent bg-clip-text scroll-animate">
            My Creations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bookstore Web Application",
                description: "JWT secure login, role-based access. Dynamic React UI, Tailwind CSS, React Router. RESTful backend APIs, MongoDB.",
                image: "https://img.freepik.com/premium-photo/quotlibrary-with-floating-books-holographic-screensquot_1324785-93290.jpg?uid=R157439276&ga=GA1.1.390215850.1702361898&semt=ais_items_boosted&w=740",
                link: "https://reading-room.com",
                github: "https://github.com/Abhitech8code/bookstore",
              },
              {
                title: "Starbucks Clone Website",
                description: "Responsive clone replicating original design. Mobile-first design, interactive UI components (HTML, CSS, JS).",
                image: "https://img.freepik.com/premium-photo/starbucks-coffee-cups-table-with-coffee-beans-coffee-beans_198067-888278.jpg?uid=R157439276&ga=GA1.1.390215850.1702361898&semt=ais_items_boosted&w=740",
                link: "https://abhitech8code.github.io/Starbucks-My-Own-Clone/", 
                github: "https://github.com/Abhitech8code/Starbucks-My-Own-Clone",
              },
              {
                title: "Tin Dog - Tinder-Inspired",
                description: "Mobile-friendly dog adoption concept. Responsive layouts (Bootstrap, Flexbox, Grid), engaging UI/UX.",
                image: "https://img.freepik.com/free-photo/view-dog-with-funny-outfit_23-2151098377.jpg?uid=R157439276&ga=GA1.1.390215850.1702361898&semt=ais_items_boosted&w=740",
                link: "https://abhitech8code.github.io/TinDog-My-Own-Project/", 
                github: "https://github.com/Abhitech8code/TinDog-My-Own-Project",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`scroll-animate card-3d relative rounded-lg shadow-xl overflow-hidden group
                             ${theme === 'dark' ? 'bg-slate-900 bg-opacity-80 backdrop-blur-sm border-slate-700' : 'bg-white bg-opacity-80 backdrop-blur-sm border-slate-200'}
                             border`}
              >
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/4A5568/FFFFFF?text=Project+Image"; }} />
                <div className="p-6">
                  <h4 className={`text-xl md:text-2xl font-semibold mb-2 ${theme === 'dark' ? 'bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text' : 'text-slate-800'}`}>
                    {project.title}
                  </h4>
                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    {project.link && project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors duration-200`}>
                        View Live <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center ${theme === 'dark' ? 'text-slate-400 hover:text-slate-300' : 'text-slate-600 hover:text-slate-700'} transition-colors duration-200`}>
                      GitHub <Github className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link !== "#" ? project.link : project.github} target="_blank" rel="noopener noreferrer" className="text-white text-lg font-bold p-4 w-full h-full flex items-center justify-center">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Education Section */}
    <section id="education" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
            <div className="absolute w-72 h-72 bg-green-600 dark:bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-500 top-1/4 right-1/3"></div>
            <div className="absolute w-72 h-72 bg-yellow-600 dark:bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2500 bottom-1/4 left-1/3"></div>
        </div>
        <div className="container mx-auto relative z-10">
            <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-500 to-yellow-600 dark:from-green-400 dark:to-yellow-500 text-transparent bg-clip-text scroll-animate">
                My Academic Background
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {educationDetails.map((edu, index) => (
                    <div key={index} className={`scroll-animate relative p-6 rounded-xl shadow-xl border 
                                                 ${theme === 'dark' ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'} 
                                                 flex items-start space-x-4 transform hover:scale-[1.03] transition-transform duration-300 ease-in-out group`}>
                        <div className={`flex-shrink-0 p-3 rounded-full ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'} group-hover:bg-green-500/10 dark:group-hover:bg-green-500/20 transition-colors`}>
                            {React.cloneElement(edu.icon, { className: `w-8 h-8 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'} group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors`})}
                        </div>
                        <div>
                            <h4 className={`text-xl font-semibold mb-1 ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>{edu.degree}</h4>
                            <p className={`text-md font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{edu.institution}</p>
                            <p className={`text-sm italic ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{edu.duration} {edu.score && `| Score: ${edu.score}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

      {/* Certifications Section - Revamped */}
      <section id="certifications" className="py-20 px-4 relative overflow-hidden card-container-3d">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern dark:bg-dots-pattern-dark"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 text-transparent bg-clip-text scroll-animate">
            My Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`scroll-animate card-3d relative rounded-lg shadow-xl border overflow-hidden group
                             ${theme === 'dark' ? 'border-slate-700 bg-slate-900 bg-opacity-90 backdrop-blur-md' : 'border-slate-200 bg-white bg-opacity-90 backdrop-blur-md'}
                            `}
              >
                <img 
                    src={cert.imageSrc} 
                    alt={cert.imageAlt || cert.name} 
                    className="w-full h-48 object-contain p-2 bg-slate-200 dark:bg-slate-800 group-hover:opacity-90 transition-opacity"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/400x250/${theme === 'dark' ? '374151' : 'E5E7EB'}/${theme === 'dark' ? 'E5E7EB' : '374151'}?text=Cert+Image`;
                    }}
                />
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {React.cloneElement(cert.icon, { className: `w-8 h-8 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'} transform group-hover:scale-110 transition-transform` })}
                  </div>
                  <h4 className={`text-lg font-semibold mb-1 ${theme === 'dark' ? 'text-yellow-300' : 'text-slate-800'}`}>
                    {cert.name}
                  </h4>
                  <p className={`text-sm mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    Issued by: {cert.issuer}
                  </p>
                  <p className={`text-xs mb-2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
                    Date: {cert.date}
                  </p>
                  {cert.description && (
                      <p className={`text-xs px-2 mt-1 mb-3 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                          {cert.description}
                      </p>
                  )}
                  {cert.link && cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm font-medium ${theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'} transition-colors duration-200 mt-2 group`}
                    >
                      View Credential <LinkIcon className="ml-1.5 w-3.5 h-3.5 group-hover:text-yellow-500 transition-colors" />
                    </a>
                  )}
                </div>
                 <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-500/70 transition-all duration-300 glow-border-yellow opacity-0 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-green-600 dark:bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 top-20 right-20"></div>
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-blue-600 dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-6000 bottom-20 left-20"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <h3 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-500 to-lime-600 dark:from-yellow-400 dark:to-lime-500 text-transparent bg-clip-text scroll-animate">
            Let's Connect
          </h3>
            <p className={`text-center mb-10 max-w-lg mx-auto scroll-animate ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            Have a project in mind, a question, or just want to say hi? Feel free to reach out!
          </p>
           <div className={`scroll-animate max-w-xl mx-auto ${theme === 'dark' ? 'bg-slate-900 bg-opacity-80 backdrop-blur-sm border-slate-700' : 'bg-white bg-opacity-80 backdrop-blur-sm border-slate-200'} p-8 rounded-lg shadow-xl border`}>
            {/* Updated Formspree Form */}
            <form 
              action="https://formspree.io/f/meokooyd"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Your Name:
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  required
                  className={`mt-1 block w-full p-3 rounded-md shadow-sm
                              ${theme === 'dark' ? 'bg-slate-800 border-slate-600 text-slate-100 focus:ring-teal-500 focus:border-teal-500' 
                                                : 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-teal-500 focus:border-teal-500'}`}
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Your Email:
                </label>
                <input 
                  type="email" 
                  name="email" // Formspree uses 'email' or '_replyto'
                  id="email"
                  required
                  className={`mt-1 block w-full p-3 rounded-md shadow-sm
                              ${theme === 'dark' ? 'bg-slate-800 border-slate-600 text-slate-100 focus:ring-teal-500 focus:border-teal-500' 
                                                : 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-teal-500 focus:border-teal-500'}`}
                  placeholder="you@example.com" 
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Your Message:
                </label>
                <textarea 
                  name="message" 
                  id="message"
                  rows="5"
                  required
                  className={`mt-1 block w-full p-3 rounded-md shadow-sm
                              ${theme === 'dark' ? 'bg-slate-800 border-slate-600 text-slate-100 focus:ring-teal-500 focus:border-teal-500' 
                                                : 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-teal-500 focus:border-teal-500'}`}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-600 to-cyan-700
                                hover:from-teal-700 hover:to-cyan-800 transform hover:scale-105 transition-all duration-300 ease-in-out
                                focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-75"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-10 px-4 text-center border-t ${theme === 'dark' ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-800'} text-slate-400`}>
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6 md:space-x-8 mb-6">
            <a href="https://github.com/Abhitech8code" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transform hover:scale-125 transition-transform duration-300" aria-label="GitHub"><Github className="w-7 h-7 md:w-8 md:h-8" /></a>
            <a href="https://www.linkedin.com/in/abhishek-shukla-4bab13204/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transform hover:scale-125 transition-transform duration-300" aria-label="LinkedIn"><Linkedin className="w-7 h-7 md:w-8 md:h-8" /></a>
            <a href="mailto:abhishekshukla01071997@gmail.com" className="text-slate-400 hover:text-red-400 transform hover:scale-125 transition-transform duration-300" aria-label="Email Abhishek Shukla"><Mail className="w-7 h-7 md:w-8 md:h-8" /></a>
            <a href="tel:+917052757579" className="text-slate-400 hover:text-green-400 transform hover:scale-125 transition-transform duration-300" aria-label="Call Abhishek Shukla"><Phone className="w-7 h-7 md:w-8 md:h-8" /></a>
          </div>
          <p className="text-sm mb-2">
            Crafted with <span className="text-red-500">&hearts;</span> by Abhishek Shukla
          </p>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Abhishek Shukla. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@700;800&display=swap");

        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: "Inter", sans-serif;
        }
        .font-poppins { 
          font-family: 'Poppins', sans-serif;
        }

        /* Scroll Animation */
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          transition-delay: 0.2s; /* Add a slight delay */
        }
        .scroll-animate.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* 3D Card Hover */
        .card-container-3d {
          perspective: 1200px; /* Increased perspective for a more pronounced effect if desired */
        }
        .card-3d {
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .card-3d:hover {
          transform: rotateY(7deg) rotateX(3deg) scale(1.04) translateZ(15px); /* Adjusted rotation and Z */
          box-shadow: 0px 8px 16px rgba(0,0,0,0.1), 0px 16px 32px rgba(0,0,0,0.15);
        }
        .dark .card-3d:hover {
          box-shadow: 0px 8px 16px rgba(0,0,0,0.25), 0px 16px 32px rgba(0,0,0,0.35);
        }


        .skill-card:hover .glow-border {
          box-shadow: 0 0 12px rgba(20, 184, 166, 0.7), 
                      0 0 24px rgba(20, 184, 166, 0.5),  
                      0 0 36px rgba(20, 184, 166, 0.3);
        }
        .group:hover .glow-border-yellow {
             box-shadow: 0 0 12px rgba(250, 204, 21, 0.7), 
                       0 0 24px rgba(250, 204, 21, 0.5),  
                       0 0 36px rgba(250, 204, 21, 0.3);
        }
        .bg-dots-pattern {
          background-image: radial-gradient( circle, ${theme === 'dark' ? '#374151' : '#d1d5db'} 0.5px, transparent 0.5px );
          background-size: 15px 15px;
        }
        .dark .bg-dots-pattern-dark { 
          background-image: radial-gradient( circle, #374151 0.5px, transparent 0.5px );
          background-size: 15px 15px; 
        }

        .particle-container { position: absolute; width: 100%; height: 100%; overflow: hidden; }
        .particle { position: absolute; background-color: rgba(255, 255, 255, 0.5); border-radius: 50%; animation: moveParticle linear infinite; opacity: 0; }
        .dark .particle { background-color: rgba(203, 213, 225, 0.3); }
        @keyframes moveParticle {
          0% { transform: translateY(0px) translateX(0px) scale(0.5); opacity: 0; }
          20% { opacity: 0.7; }
          80% { opacity: 0.7; }
          100% { transform: translateY(-100vh) translateX(calc(var(--randomX) * 50px - 25px)) scale(1); opacity: 0; }
        }
        .particle:nth-child(odd) { --randomX: 1; } .particle:nth-child(even) { --randomX: -1; }
        .particle:nth-child(3n) { --randomX: 0.5; } .particle:nth-child(4n) { --randomX: -0.5; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
        
        .typing-effect { display: inline-block; }
        .typing-cursor {
          border-right: 0.1em solid ${theme === 'dark' ? 'rgba(229, 231, 235, 0.75)' : 'rgba(55, 65, 81, 0.75)'};
          animation: blink-caret 0.75s step-end infinite;
          white-space: nowrap; 
          overflow: hidden; 
        }
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: ${theme === 'dark' ? 'rgba(229, 231, 235, 0.75)' : 'rgba(55, 65, 81, 0.75)'}; } 
        }

        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-up.delay-100 { animation-delay: 0.1s; } .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-300 { animation-delay: 0.3s; } .animate-fade-in-up.delay-400 { animation-delay: 0.4s; }
        .animate-fade-in-up.delay-500 { animation-delay: 0.5s; }
        .animate-fade-in-up.delay-600 { animation-delay: 0.6s; } /* Added for new contact button */
        .animate-gradient-shift { background-size: 200% 200%; animation: gradientShift 10s ease infinite; }
        .animate-blob { animation: blob 15s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045); }
        .animation-delay-1000 { animation-delay: 1s; } .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-2500 { animation-delay: 2.5s; } .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; } .animation-delay-5000 { animation-delay: 5s; }
        .animation-delay-6000 { animation-delay: 6s; }
      `}</style>
    </div>
  );
};

export default App;
