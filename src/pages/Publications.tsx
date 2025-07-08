
import { motion } from "framer-motion";
import { FaNewspaper, FaExternalLinkAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

const Publications = () => {
  const publications = [
  {
    title: "Genetic Engineering & Biotechnology: Navigating the Double-Edged Sword of Innovation",
    authors: "Debopam Dutta, Abhiraj Saha, Sandip Chowdhury, Amrita Panja, Pritikana Hazra",
    journal: "University of Engineering and Management, Kolkata",
      date: "2024",
    abstract: "The paper explores genetic engineering's benefits in health and sustainability, while addressing ethical and regulatory challenges.",
    url: "https://drive.google.com/file/d/1iv4qYzrsrSKWPgu59bEBKFwn2UKrJ-yg/view?usp=sharing",
    type: "Research Paper"
  },

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
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Research Papers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my research papers and publications that contribute to the fields of biotechnology and genetic engineering.
            </p>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-2xl font-bold flex-1">{pub.title}</h2>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium whitespace-nowrap">
                      {pub.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <FaUser className="w-4 h-4" />
                      <span>{pub.authors}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaNewspaper className="w-4 h-4" />
                      <span>{pub.journal}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{pub.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {pub.abstract}
                  </p>
                  
                  <a
                    href={pub.url}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Read Full Paper (unpublished)
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Publications;
