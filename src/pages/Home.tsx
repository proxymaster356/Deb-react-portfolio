import { motion } from "framer-motion";
import { FaRocket, FaGithub, FaLinkedin, FaEnvelope,FaWhatsapp, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mx-auto w-48 h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl"
          >
            <img
              src="/IMG_8853.JPG"
              alt="Profile"
              className="w-full h-full object-cover"
            />    
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Debopam Dutta
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Engineering Student | AI/ML Enthusiast | Trying to build something new
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating beautiful, functional web applications and 
              crafting exceptional user experiences. Welcome to my digital portfolio.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              <FaRocket />
              Projects
            </a>

            <a
              href="mailto:yourname@example.com"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              <FaEnvelope />
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-6 pt-8"
          >
            {[
              { icon: FaGithub, href: "https://github.com/proxymaster356", label: "GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/debopam-dutta-bb220b323/", label: "LinkedIn" },
              { icon: FaWhatsapp, href: "https://wa.me/8116324958", label: "WhatsApp" },
              { icon: FaInstagram, href: "https://www.instagram.com/dutta_debopam/", label: "Instagram" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
