import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaMicrophone, FaCode, FaBrain, FaPalette, FaAward, FaCamera } from "react-icons/fa";

const Events = () => {
  const events = [
    {
      title: "HackSnippet 3.0 Hackathon",
      type: "Workshop Participant",
      date: "February 8, 2025",
      location: "UEM Kolkata",
      attendees: "200+",
      description: "Participated in HackSnippet 3.0 hackathon organized by UEM Kolkata, demonstrating coding skills and innovative problem-solving abilities in a competitive environment.",
      role: "Hackathon Participant",
      topic: "Competitive Programming & Innovation",
      organization: "University of Engineering and Management"
    },
    {
      title: "Generative AI (GenAI) Workshop",
      type: "Workshop Participant",
      date: "July 20, 2024",
      location: "Virtual Workshop",
      attendees: "500+",
      description: "Participated in an intensive virtual workshop on Generative Artificial Intelligence, exploring cutting-edge AI technologies and their practical applications.",
      role: "Workshop Participant",
      topic: "Artificial Intelligence & Machine Learning",
      organization: "0x.Day & UEM Kolkata"
    },
    {
      title: "Ecstasia 2025 - Annual Cultural Fest",
      type: "Contributor",
      date: "March 8-9, 2025",
      location: "UEM Kolkata",
      attendees: "1000+",
      description: "Received Certificate of Appreciation for exemplary support and contribution to the successful conduction of Ecstasia 2025, the Annual Cultural Fest of UEM Kolkata.",
      role: "Event Contributor",
      topic: "Cultural Event Management",
      organization: "University of Engineering and Management"
    },
    {
      title: "Ureckon 2025 annual tech fest",
      type: "Participant",
      date: "March 2025",
      location: "UEM Kolkata",
      attendees: "300+",
      description: "Participated in Ureckon 2025 annual tech fest at University of Engineering and Management, Kolkata, demonstrating active involvement in university activities.",
      role: "Active Participant",
      topic: "Tech & Tech-related Activities",
      organization: "University of Engineering and Management"
    },
    {
      title: "Frames of Expression",
      type: "Participant",
      date: "March 2025",
      location: "UEM Kolkata",
      attendees: "150+",
      description: "Expression of storytelling using photography.",
      role: "Photography Participant",
      topic: "Creative Arts & Expression",
      organization: "University of Engineering and Management"
    },
    {
      title: "DriveBlaze 2024",
      type: "Contributor",
      date: "September 28-29, 2024",
      location: "UEM Kolkata",
      attendees: "500+",
      description: "Served as a volunteer for DriveBlaze 2024, contributing significantly to the successful execution of this major university event. Demonstrated dedication and commitment while making a positive impact throughout the event.",
      role: "Event Volunteer",
      topic: "Event Management & Community Service",
      organization: "University of Engineering and Management"
} ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Workshop Participant": return FaCode;
      case "Contributor": return FaAward;
      case "Speaker": return FaMicrophone;
      case "Organizer": return FaUsers;
      case "Participant": return FaCamera;
      default: return FaCalendarAlt;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Participant": return "text-green-500 bg-green-500/10";
      case "Contributor": return "text-purple-500 bg-purple-500/10";
      case "Speaker": return "text-blue-500 bg-blue-500/10";
      case "Organizer": return "text-orange-500 bg-orange-500/10";
      default: return "text-gray-500 bg-gray-500/10";
      case "Workshop Participant": return "text-pink-500 bg-pink-500/10";
    }
  };

  const getTopicIcon = (topic: string) => {
    if (topic.includes("AI") || topic.includes("Programming")) return FaBrain;
    if (topic.includes("Cultural") || topic.includes("Arts")) return FaPalette;
    return FaCode;
  };

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
              Events & Achievements
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Certificates and participation records from University of Engineering and Management, Kolkata
            </p>
            <div className="text-sm text-muted-foreground font-medium">
              Debopam Dutta • UEM Kolkata
            </div>
          </div>

          <div className="space-y-8">
            {events.map((event, index) => {
              const IconComponent = getTypeIcon(event.type);
              const TopicIcon = getTopicIcon(event.topic);
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-2xl font-bold flex-1">{event.title}</h2>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaUsers className="w-4 h-4" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-muted-foreground">Role:</span>
                          <span className="font-medium">{event.role}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TopicIcon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-muted-foreground">Topic:</span>
                          <span className="font-medium">{event.topic}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-muted-foreground">Organization:</span>
                          <span className="font-medium text-primary">{event.organization}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { label: "Events Participated", value: "15+" },
              { label: "Certificates Earned", value: "14" },
              { label: "Hackathons", value: "2" },
              { label: "Workshops Attended", value: "4" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                className="text-center space-y-2 bg-card p-6 rounded-xl border border-border"
              >
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">University of Engineering and Management</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Actively participating in academic, technical, and cultural events at UEM Kolkata, 
              demonstrating commitment to holistic development and continuous learning.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;