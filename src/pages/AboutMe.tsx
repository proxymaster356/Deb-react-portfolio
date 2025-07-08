import { motion } from "framer-motion";
import { FaCode, FaHeart, FaMusic, FaGamepad, FaMapMarkerAlt,FaCamera } from "react-icons/fa";
import { GiCricketBat, GiDna2, GiMountainRoad} from "react-icons/gi";
import { ImBooks } from "react-icons/im";

const AboutMe = () => {
  const interests = [
    { icon: FaCode, title: "Coding", description: "Building innovative solutions" },
    { icon: GiDna2, title: "Biotech", description: "Merging biology with technology" },
    { icon: FaCamera, title: "Photography", description: "Capturing moments through the lens" },
    { icon: FaGamepad, title: "Gaming", description: "Strategy and adventure games" },
    { icon: GiMountainRoad, title: "Travel", description: "Exploring new cultures" },
    { icon: GiCricketBat, title: "Cricket", description: "Cricket is my religion" },
    { icon: FaMusic, title: "Music", description: "Music is Therapy" },
    { icon: ImBooks, title: "বইপোকা", description: "Big Fan Of Bengali Literature বাংলা সাহিত্য" },

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
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  👋 Hi! I'm Debopam Dutta, a beginner developer who loves learning new things about coding. 
                  Right now, I'm focusing on Python frameworks and trying to understand how websites and apps work.
                  
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  I started learning tech because I was curious about how software is made. Since then, 
                  I’ve been learning by doing — building small projects, making mistakes, and improving step by step.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  When I’m not coding, I enjoy exploring new tools and learning from other developers.
                  As a biotech student, every project I build helps me grow closer to becoming a real developer.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-md relative">
                <img
                  src="/IMG_20210515_131613.jpg" // Make sure this image is in the public folder
                  alt="Debopam Dutta"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                    <h3 className="text-white font-bold text-lg">Debopam Dutta</h3>
                    <div className="flex items-center justify-between text-white/80 text-sm">
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        <span>Kolkata, India</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaHeart className="w-3 h-3" />
                        <span></span>
                      </div>
                    </div>
                    <span className="inline-block px-2 py-1 bg-primary/20 backdrop-blur-sm rounded text-primary text-xs">
                      TRYING TO BE BETTER
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-center">Interests & Hobbies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1.5, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.07 }}
                  className="bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <interest.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{interest.title}</h3>
                    <p className="text-muted-foreground text-sm">{interest.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Fun Facts</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">5+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">Bio + Tech</div>
                <p className="text-muted-foreground">tech meets biology</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <p className="text-muted-foreground">Chai Powered</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
