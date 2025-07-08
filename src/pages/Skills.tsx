import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaBacterium, 
   FaWindows, FaLinux, FaAndroid
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss,
  SiGooglecloud,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiCanva,
  SiFigma,
  SiAdobeillustrator,
  SiBlender,
  SiRaspberrypi,
  SiArduino,
  SiEspressif,
  SiFlask,
  
  SiLabview,
  SiTestinglibrary,
  SiC
} from "react-icons/si";
import { PiDna } from "react-icons/pi";
import { CiBeaker1 } from "react-icons/ci";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 60, icon: FaReact, color: "text-blue-500" },
        { name: "TypeScript", level: 70, icon: SiTypescript, color: "text-blue-600" },
        { name: "JavaScript", level: 20, icon: FaJs, color: "text-yellow-500" },
        { name: "HTML5", level: 85, icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", level: 80, icon: FaCss3Alt, color: "text-blue-500" },
        { name: "Tailwind CSS", level: 30, icon: SiTailwindcss, color: "text-teal-500" }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 50, icon: FaNodeJs, color: "text-green-500" },
        { name: "Python", level: 80, icon: FaPython, color: "text-yellow-500" },
        { name: "C", level: 70, icon: SiC, color: "text-blue-700" }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 80, icon: FaGitAlt, color: "text-orange-600" },
        { name: "Docker", level: 55, icon: FaDocker, color: "text-blue-500" },
        { name: "Google Cloud", level: 40, icon: SiGooglecloud, color: "text-blue-500" }
      ]
    },
    {
      title: "IoT Hardware",
      skills: [
        { name: "Raspberry Pi", level: 80, icon: SiRaspberrypi, color: "text-rose-500" },
        { name: "Arduino", level: 85, icon: SiArduino, color: "text-blue-600" },
        { name: "ESP32", level: 80, icon: SiEspressif, color: "text-gray-700" }
      ]
    },

    {
      title: "Biotech Knowledge",
      skills: [
        {
          name: "Molecular Biology",
          icon: PiDna,
          color: "text-purple-500",
          status: "Learning"
        },
        {
          name: "Microbiology",
          icon: FaBacterium,
          color: "text-green-500",
          status: "Beginner"
        },
        {
          name: "Gel Electrophoresis",
          icon: CiBeaker1,
          color: "text-blue-400",
          status: "Learning"
        },
        {
          name: "PCR Basics",
          icon: SiLabview,
          color: "text-orange-400",
          status: "Exploring"
        },
        {
          name: "Spectrophotometry",
          icon: SiTestinglibrary,
          color: "text-yellow-500",
          status: "Learning"
        }
      ]
    },

    {
      title: "Graphics Tools",
      skills: [
        { name: "Adobe Photoshop", level: 90, icon: SiAdobephotoshop, color: "text-blue-500" },
        { name: "Adobe Lightroom", level: 80, icon: SiAdobelightroom, color: "text-blue-400" },
        { name: "Canva", level: 85, icon: SiCanva, color: "text-cyan-500" },
        { name: "Figma", level: 85, icon: SiFigma, color: "text-pink-500" },
        { name: "Adobe Illustrator", level: 80, icon: SiAdobeillustrator, color: "text-orange-500" },
        { name: "Blender", level: 60, icon: SiBlender, color: "text-orange-400" }
      ]
    },
    {
      title: "Platforms & Environments",
      skills: [
        { name: "Windows", icon: FaWindows, color: "text-blue-500", status: "Comfortable" },
        { name: "Linux", icon: FaLinux, color: "text-yellow-500", status: "Comfortable" },
        { name: "Android", icon: FaAndroid, color: "text-green-500", status: "Comfortable" }
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Leadership (in progress)",
    "Critical Thinking",
    "Code Review",
    "Time Management",
    "Adaptability"
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-center">{category.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05, 
                        duration: 0.4 
                      }}
                      className="bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <skill.icon className={`w-8 h-8 ${skill.color}`} />
                          <h3 className="text-lg font-semibold">{skill.name}</h3>
                        </div>
                        <div className="space-y-2">
                          {skill.level !== undefined ? (
                            <>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Proficiency</span>
                                <span className="font-medium">{skill.level}%</span>
                              </div>
                              <div className="w-full bg-secondary rounded-full h-3">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{
                                    delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
                                    duration: 1,
                                    ease: "easeOut"
                                  }}
                                  className="bg-gradient-to-r from-primary to-blue-500 h-3 rounded-full"
                                />
                              </div>
                            </>
                          ) : (
                            <div className="text-sm italic text-muted-foreground">
                              {skill.status ?? "Exploring"}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Soft Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[ 
              { label: "Programming Languages", value: "5+" },
              { label: "Frameworks & Libraries", value: "2+" },
              { label: "Years of Experience", value: "1+" }
            ].map((stat, index) => (
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

export default Skills;
