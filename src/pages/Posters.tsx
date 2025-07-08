import { useState } from "react";
import { Download, Calendar, X } from "lucide-react";
import { FaExpand } from "react-icons/fa";

const Posters = () => {
  const [expandedPoster, setExpandedPoster] = useState(null);
  const posters = [
    {
      title: "Chemistry Poster Competition 2024",
      description: "Poster presentation on Future of Drug Discovery using AI",
      image: "/number1.jpg?w=600",
      date: "September 2024",
      event: "Chemistry Conference 2024",
      category: "Research"
    },
    {
      title: "Flyer Competition",
      description: "A flyer competition organized by UEM Kolkata.",
      image: "/final2.jpg?w=600",
      date: "June 2023",
      event: "Tech for Good Summit",
      category: "Sustainability"
    },
    {
      title: "Physics Poster Competition",
      description: "Application Of Nanoelectronics & Nanophotonics Towards Sustainability",
      image: "/Physics_poster.png?w=600",
      date: "2025",
      event: "competition",
      category: "Research"
    },
    {
      title: "SnapWalk 3.0 poster",
      description: "Modern cloud design patterns for scalable web applications",
      image: "/WhatsApp Image 2024-09-14 at 23.36.02_5fff57b3.jpg?w=600",
      date: "2025",
      event: "For IRIS photography club",
      category: "Casual"
    }
  ];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setExpandedPoster(null);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Posters & Presentations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research presentations and conference posters
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posters.map((poster, index) => (
              <div
                key={poster.title}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x400/4f46e5/ffffff?text=${encodeURIComponent(poster.title)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      onClick={() => setExpandedPoster(poster)}
                      aria-label="Expand poster"
                    >
                      <FaExpand className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium">
                      {poster.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{poster.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {poster.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{poster.date}</span>
                    </div>
                    <p className="font-medium text-primary">{poster.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {expandedPoster && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              onClick={handleBackdropClick}
            >
              <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <button
                  className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  onClick={() => setExpandedPoster(null)}
                  aria-label="Close expanded poster"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
                <div className="p-6">
                  <img
                    src={expandedPoster.image}
                    alt={expandedPoster.title}
                    className="w-full max-h-[60vh] object-contain rounded-xl mb-4"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/800x600/4f46e5/ffffff?text=${encodeURIComponent(expandedPoster.title)}`;
                    }}
                  />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {expandedPoster.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{expandedPoster.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{expandedPoster.date}</span>
                    <span className="font-medium text-blue-600">{expandedPoster.event}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Posters;
