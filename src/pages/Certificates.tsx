
import { motion } from "framer-motion";
import { FaAward, FaCalendarAlt, FaExternalLinkAlt, FaDownload } from "react-icons/fa";

const Certificates = () => {
  const certificates = [
    {
      title: "AI for Engineers",
      issuer: "Outskill",
      date: "2025",
      image: "/AI for Engineers (Small).png",
      verifyUrl: "https://learners.outskill.com/certificate/8f95927d-b044-4527-bdeb-7372e30e8de9",
      description: "Professional-level certification demonstrating expertise in designing distributed systems on AWS."
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2025",
      image: "https://i.pcmag.com/imagery/reviews/02yVL9f8Jw1atwoG6sgFZDH-7.fit_lim.size_1050x591.v1569482492.jpg?w=400",
      verifyUrl: "#",
      description: "IN Progress"
    },
    {
      title: "Graphic Design Foundations: Layout and Composition",
      issuer: "LinkedIn Learning",
      date: "2024",
      image: "/Graphics.png?w=400",
      verifyUrl: "https://media.licdn.com/dms/image/v2/D4D22AQE8NCaHTWxJPg/feedshare-shrink_1280/B4DZP0Qg3hHUAo-/0/1734969790187?e=1754524800&v=beta&t=oLUaO-Zoblfy3BifSUTHc86Nr-K2d45Mk6yU9e2veTc",
      description: "Certification in graphic design focusing on layout and composition principles for effective visual communication."
    },
    {
      title: "Synthetic Biology Workshop",
      issuer: "Biospecturm  ",
      date: "2024",
      image: "/Synthetic Biology Workshop.png?w=400",
      verifyUrl: "https://photos.app.goo.gl/KXypGMraoDEZgrwR6",
      description: "Fundamental workshop on synthetic biology techniques and applications in biotechnology."
    },
    {
      title: "Script Grid",
      issuer: "DriveBlaze",
      date: "2024",
      image: "https://i.pinimg.com/736x/ff/bd/dd/ffbddd37b2ceffe750fc534bfa11429d.jpg?w=400",
      verifyUrl: "https://drive.google.com/file/d/1O-2ptJkfmjG_WFpF3eQyv5Mc6K5LH2nG/view?usp=sharing",
      description: "Gaining hands-on problem-solving and competitive programming experience."
    },
    
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Certificates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications and achievements in technology
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-full">
                      <FaAward className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold line-clamp-2">{cert.title}</h3>
                    <p className="text-primary font-semibold">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={cert.verifyUrl}
                      className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm flex-1 justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      View
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificate Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Certification Summary</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "Total Certificates", value: "10+" },
                { label: "Cloud Platforms", value: "1" },
                { label: "Development", value: "2" },
                { label: "DevOps", value: "1" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  className="text-center space-y-2 bg-background p-6 rounded-xl border border-border"
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certification Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Recent Achievements</h2>
            <div className="space-y-4">
              {certificates.slice(0, 4).map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;
