import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Sympteller : Your AI Health Assistant",
      description: "Full-stack intelligent diagnosis tool with Flask backend, Gemini API integration, and local Mistral AI via Ollama. Features include online-offline fallback, dual AI voting system, responsive frontend UI, dark mode, and glowing diagnosis cards.",
      image: "/Sympteller.png",
      technologies: ["Python", "HTML", "CSS", "Flask API", "Gemini API", "Ollama", "Mistral AI"],
      github: "https://github.com/proxymaster356/Sympteller",
      demo: "https://photos.app.goo.gl/5vSkNo26YnJuffeP7",
      featured: true
    },
    {
      title: "Smart Attendance System",
      description: "Raspberry Pi-powered attendance management system with real-time tracking, facial recognition, and analytics dashboard, data send to Google Sheets.",
      image: "/Smart _Attendance.png",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/proxymaster356/smart-attendance-system",
      demo: "https://photos.app.goo.gl/b5A9SZtuQwTgqtSf7",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/Gemini_Generated_Image_49v3cq49v3cq49v3.png",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "CSS3", "Work in progress"],
      featured: false
    },
    {
      title: "BusBuddy",
      description: "BusBuddy is a smart real-time bus tracking and ticketing app with RFID/QR validation and seamless UPI payments for a smoother commute.",
      image: "/My ChatGPT image.png",
      technologies: ["Kotlin","Jetpack Compose","Firebase", "Google Maps API","Razorpay API","NFC (RFID)","QR Code Scanner"],
      github: "https://github.com/johnsmith/social-dashboard",
      demo: "https://social-demo.com",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website built with html , css and js technologies. Features dark/light mode, animations, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/proxymaster356/simple-portfolio",
      demo: "https://proxymaster356.github.io/simple-portfolio/index.html",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work and creative solutions
            </p>
          </div>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <FaGithub className="w-6 h-6 text-white" />
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <FaExternalLinkAlt className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                        <FaCode className="w-4 h-4" /> Code
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                        <FaEye className="w-4 h-4" /> Demo picture
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Other Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="group bg-card rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    {project.title === "Portfolio Website" && (
                      <div className="flex gap-3 pt-3">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                          <FaCode className="w-4 h-4" /> Code
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                          <FaEye className="w-4 h-4" /> Demo
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[{ label: "Total Projects", value: "5+" }, { label: "Technologies Used", value: "8+" }, { label: "Group Projects", value: "3" }, { label: "Ongoing Projects", value: "4+" }].map((stat, index) => (
              <div key={index} className="text-center space-y-2 bg-card p-6 rounded-xl border border-border">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;