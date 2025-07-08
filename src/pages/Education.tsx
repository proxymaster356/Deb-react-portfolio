import { motion } from "framer-motion";
import { Percent } from "lucide-react"; 
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Biotechnology",
      institution: "University of Engineering and Management",
      location: "Kolkata, India",
      period: "2024 - 2028",
      gpa: "On Going",
      description: "Specialized in Biotechnology and its applications.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrTWT1SUDZLKDloA2Z5x0t4Ji938AanfHFBUSvIJZiPBDGigOMpfhK1OMbr11UXe63eiTIYn81PfVNEb_ZkZ-XItwpAyCnCkB6XrJ8U9QrvME7WyFiEhdIfl-ciKLiHtRuj9l0s4g=s1360-w1360-h1020-rw",
      achievements: [
        "First year Pass with 8.5 CGPA",
        "Active member of the iRISH Photography Club",
        "Participated in various hackathons and coding competitions",
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Subhaspalli Vidyaniketan (H.S)",
      location: "Asansol, India",
      period: "2016 - 2023",
      gpa: "85%",
      description: "Completed Higher Secondary with a focus on Science stream.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrYRQHYSfROX2CH2vB4fIwYAFsb01nJlTSUM9KIS7NrEiORtItd4YcTVsH6SPxBvR25JpoDO03JklI58jeJ5ir6TFEVz29HPuCmLaj8Alb_BYt76mCsCiVmJ2HHgJAwRe-vxisrDw=s1360-w1360-h1020-rw",
      achievements: [
        "Secured 85% in Higher Secondary Examination",
        "Actively done various projects",
        "Participated in inter-school quiz and competitions",
        "Won 1st prize in the inter-school quiz competition",
      ]
    }
  ];

  const certifications = [
    "Gen AI Certified Developer",
    "Python Developer Certificate by LinkedIn",
    "Graphics Design Certificate by Coursera",
    "Synthetic Biology Workshop – iGEM x UEM"
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
              Education
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My academic journey and continuous learning path
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Image - Left Side */}
                    <div className="w-full lg:w-1/3 flex-shrink-0">
                      <img
                        src={edu.image}
                        alt={edu.institution}
                        className="rounded-xl w-full h-64 object-cover shadow-sm border border-border"
                      />
                    </div>

                    {/* Content - Right Side */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <FaGraduationCap className="w-8 h-8 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h2 className="text-2xl font-bold">{edu.degree}</h2>
                          <h3 className="text-xl text-primary font-semibold">{edu.institution}</h3>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaAward className="w-4 h-4" />
                          <span>GPA : {edu.gpa}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline connector */}
                {index < educationData.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-px h-8 bg-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Professional Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Certifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border"
                >
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { label: "Years of Study", value: "6+" },
              { label: "Overall GPA", value: "3.85" },
              { label: "Research Papers", value: "5" },
              { label: "Certifications", value: "8" }
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

export default Education;