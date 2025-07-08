import React from 'react';
import { FaFlask, FaUsers, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Research = () => {
  const researchProjects = [
        {
      title: "AI-Based Hand Gesture Controlled Image Processor",
      status: "Completed",
      duration: "2024 - 2025",
      team: "Solo Project",
      description: "Built a real-time image enhancement system that uses hand gestures to dynamically adjust image brightness, contrast, and saturation using MediaPipe and OpenCV.",
      objectives: [
        "Enable real-time gesture-based control over image parameters",
        "Utilize MediaPipe for hand tracking and OpenCV for image processing",
        "Display intuitive status bars and capture snapshots based on user commands"
      ],
      technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      publications: 0,
      collaborators: "Independent Research",
      link: "https://drive.google.com/file/d/11nQGku-rREljZgzeQBSx5jubIMXZ-pdQ/view?usp=sharing"
    },
    {
      title: "AI-Powered Plant Disease Detection System",
      status: "Ongoing",
      duration: "2025 - Present",
      team: "3 researchers",
      description: "Building a real-time plant disease detection system that leverages YOLOv8 and image classification models to identify diseases in leaves from captured photos, enabling early intervention and promoting smart agriculture.",
      objectives: [
        "Implement YOLOv8 for fast and accurate leaf segmentation and object detection",
        "Train and integrate deep learning models to classify plant diseases from segmented images",
        "Enable farmers to use the system through a mobile or web interface for real-time results"
      ],
      technologies: ["Python", "YOLOv8", "PyTorch", "OpenCV", "TensorFlow", "Streamlit/FastAPI"],
      publications: 1,
      collaborators: "Self and 2 other researchers",
    },
    {
      title: "Blind Helper System for Real-Time Navigation",
      status: "Ongoing",
      duration: "2024 - Present",
      team: "2 developers",
      description: "Designing a smart assistive system for visually impaired individuals using real-time obstacle detection and audio guidance. The system combines computer vision with ultrasonic sensors to navigate environments safely.",
      objectives: [
        "Detect obstacles in real-time using computer vision and proximity sensors",
        "Provide directional audio feedback for navigation",
        "Enable lightweight deployment on Raspberry Pi or wearable hardware"
      ],
      technologies: ["Python", "OpenCV", "Raspberry Pi", "Ultrasonic Sensor", "Text-to-Speech (TTS)"],
      publications: 0,
      collaborators: "Independent Prototype Development"
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Ongoing": return "text-blue-500 bg-blue-500/10";
      case "Completed": return "text-green-500 bg-green-500/10";
      case "Published": return "text-purple-500 bg-purple-500/10";
      default: return "text-gray-500 bg-gray-500/10";
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Research Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Current and past research in web development and computer science
            </p>
          </div>

          <div className="space-y-8">
            {researchProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-2xl font-bold flex-1">{project.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <FaUsers className="w-4 h-4" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <FaFlask className="w-4 h-4" />
                      <span>{project.publications} publications</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Research Objectives:</h3>
                      <ul className="space-y-1">
                        {project.objectives.map((objective, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <p className="text-muted-foreground text-sm">
                        <span className="font-medium">Collaborators:</span> {project.collaborators}
                      </p>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                        >
                          <FaExternalLinkAlt className="w-3 h-3" />
                          View Details
                        </a>
                      ) : (
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm">
                          <FaExternalLinkAlt className="w-3 h-3" />
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Research Projects", value: "4" },
              { label: "Technologies Used", value: "10+" },
              { label: "Collaborators", value: "3" },
              { label: "Currently In Progress Projects", value: "2" }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2 bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;