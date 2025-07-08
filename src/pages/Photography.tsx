import { motion } from "framer-motion";
import { FaCamera, FaExpand, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

// LazyImage component with blur placeholder
const LazyImage = ({ src, alt, className }) => {
  const [visible, setVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden rounded-md ${className}`}
    >
      {!visible && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse blur-md" />
      )}
      {visible && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto object-cover transition-opacity duration-700 opacity-100"
        />
      )}
    </div>
  );
};

// Define a type for photo objects
interface Photo {
  id: number;
  src: string;
  title: string;
  location: string;
  likes: number;
  category: string;
}

const Photography = () => {
  const photos: Photo[] = [
    
    
     {
      id: 42,
      src: "./pic/IMG-20250703-WA0008.jpg?w=800",
      title: "IMG-20250703-WA0008.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 43,
      src: "./pic/IMG-20250703-WA0009.jpg?w=800",
      title: "IMG-20250703-WA0009.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 44,
      src: "./pic/IMG-20250703-WA0010.jpg?w=800",
      title: "IMG-20250703-WA0010.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 45,
      src: "./pic/Katao_04_03_20.jpg?w=800",
      title: "Katao_04_03_20.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 46,
      src: "./pic/SAVE_20201127_223702.jpg?w=800",
      title: "SAVE_20201127_223702.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 47,
      src: "./pic/SAVE_20240807_201243.jpg?w=800",
      title: "SAVE_20240807_201243.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 48,
      src: "./pic/SAVE_20240807_201302.jpg?w=800",
      title: "SAVE_20240807_201302.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 49,
      src: "./pic/SAVE_20240807_201307.jpg?w=800",
      title: "SAVE_20240807_201307.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    
    
    {
      id: 1,
      src: "./pic/1631648083306.jpg?w=800",
      title: "1631648083306.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 2,
      src: "./pic/1634311701201-01.jpeg?w=800",
      title: "1634311701201-01.jpeg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 3,
      src: "./pic/DSC_1528.JPG?w=800",
      title: "DSC_1528.JPG",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 4,
      src: "./pic/DSC_1844.JPG?w=800",
      title: "DSC_1844.JPG",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 5,
      src: "./pic/DSC_8623.JPG?w=800",
      title: "DSC_8623.JPG",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 6,
      src: "./pic/e26383fc50c6dd5f35a8cd8c5cf863ae.jpg?w=800",
      title: "e26383fc50c6dd5f35a8cd8c5cf863ae.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 7,
      src: "./pic/IMG_20200304_075505.jpg?w=800",
      title: "IMG_20200304_075505.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 8,
      src: "./pic/IMG_20200819_180311-01.jpeg?w=800",
      title: "IMG_20200819_180311-01.jpeg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 9,
      src: "./pic/IMG_20210112_234928.jpg?w=800",
      title: "IMG_20210112_234928.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 10,
      src: "./pic/IMG_20210127_122223.jpg?w=800",
      title: "IMG_20210127_122223.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 11,
      src: "./pic/IMG_20210128_190533_1652199809198.jpg?w=800",
      title: "IMG_20210128_190533_1652199809198.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 12,
      src: "./pic/IMG_20210327_232547-EDIT.jpg?w=800",
      title: "IMG_20210327_232547-EDIT.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 13,
      src: "./pic/IMG_20210328_212111-EDIT.jpg?w=800",
      title: "IMG_20210328_212111-EDIT.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 14,
      src: "./pic/IMG_20210905_213211.jpg?w=800",
      title: "IMG_20210905_213211.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 15,
      src: "./pic/IMG_20211016_102412-01.jpeg?w=800",
      title: "IMG_20211016_102412-01.jpeg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 16,
      src: "./pic/IMG_20231024_104000-EDIT.jpg?w=800",
      title: "IMG_20231024_104000-EDIT.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 17,
      src: "./pic/IMG_20231024_121128.jpg?w=800",
      title: "IMG_20231024_121128.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 18,
      src: "./pic/IMG_20231024_162557-EDIT.jpg?w=800",
      title: "IMG_20231024_162557-EDIT.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 19,
      src: "./pic/IMG_20231025_094547-EDIT.jpg?w=800",
      title: "IMG_20231025_094547-EDIT.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 20,
      src: "./pic/IMG_20231025_141032.jpg?w=800",
      title: "IMG_20231025_141032.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 21,
      src: "./pic/IMG_20231025_145946.jpg?w=800",
      title: "IMG_20231025_145946.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 22,
      src: "./pic/IMG_20231025_145952.jpg?w=800",
      title: "IMG_20231025_145952.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 23,
      src: "./pic/IMG_20231025_161102.jpg?w=800",
      title: "IMG_20231025_161102.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 24,
      src: "./pic/IMG_20231026_103234-EDIT.jpg?w=800",
      title: "IMG_20231026_103234-EDIT.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 25,
      src: "./pic/IMG_20231026_132139.jpg?w=800",
      title: "IMG_20231026_132139.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 26,
      src: "./pic/IMG_20231027_120045.jpg?w=800",
      title: "IMG_20231027_120045.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 27,
      src: "./pic/IMG_20231027_121857.jpg?w=800",
      title: "IMG_20231027_121857.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 28,
      src: "./pic/IMG_20231027_121934.jpg?w=800",
      title: "IMG_20231027_121934.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 29,
      src: "./pic/IMG_20231028_103505.jpg?w=800",
      title: "IMG_20231028_103505.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 30,
      src: "./pic/IMG_20240709_172355.jpg?w=800",
      title: "IMG_20240709_172355.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 31,
      src: "./pic/IMG_20240709_175206.jpg?w=800",
      title: "IMG_20240709_175206.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 32,
      src: "./pic/IMG_20240709_175730.jpg?w=800",
      title: "IMG_20240709_175730.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 33,
      src: "./pic/IMG_20240710_180553.jpg?w=800",
      title: "IMG_20240710_180553.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 34,
      src: "./pic/IMG_20240710_180604.jpg?w=800",
      title: "IMG_20240710_180604.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 35,
      src: "./pic/IMG_20240716_183252.jpg?w=800",
      title: "IMG_20240716_183252.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 36,
      src: "./pic/IMG_20240814_225827.jpg?w=800",
      title: "IMG_20240814_225827.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 37,
      src: "./pic/IMG_20240921_102835.jpg?w=800",
      title: "IMG_20240921_102835.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 38,
      src: "./pic/IMG_20240921_124823.jpg?w=800",
      title: "IMG_20240921_124823.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 39,
      src: "./pic/IMG_20240921_130327.jpg?w=800",
      title: "IMG_20240921_130327.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 40,
      src: "./pic/IMG_20240921_180614.jpg?w=800",
      title: "IMG_20240921_180614.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
    {
      id: 41,
      src: "./pic/IMG-20250703-WA0007.jpg?w=800",
      title: "IMG-20250703-WA0007.jpg",
      location: "Unknown",
      likes: 0,
      category: "Uncategorized"
    },
  ];

  const categories = ["All", "Landscape", "Urban", "Nature", "Seascape", "Astrophotography", "Architecture", "Uncategorized", "Research", "Sustainability", "Casual"];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedPhoto, setExpandedPhoto] = useState<Photo | null>(null);

  // Filter photos by selected category
  const filteredPhotos = selectedCategory === "All"
    ? photos
    : photos.filter((photo) => photo.category === selectedCategory);

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
              Photography
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Capturing moments and landscapes through my lens
            </p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full border border-border transition-colors ${selectedCategory === category ? 'bg-primary text-primary-foreground' : 'hover:bg-accent hover:text-accent-foreground'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Photo Gallery */}
          <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-3 gap-4 space-y-4">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="group break-inside-avoid rounded-2xl overflow-hidden border border-border bg-card shadow-md hover:shadow-xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <LazyImage
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                      <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                      <div className="flex items-center justify-between text-white/80 text-sm">
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="w-3 h-3" />
                          <span>{photo.location}</span>
                        </div>
                      </div>
                      <span className="inline-block px-2 py-1 bg-primary/20 backdrop-blur-sm rounded text-primary text-xs">
                        {photo.category}
                      </span>
                    </div>

                    <button
                      className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      onClick={() => setExpandedPhoto(photo)}
                      type="button"
                    >
                      <FaExpand className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expand Modal */}
          {expandedPhoto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
              <div className="relative max-w-3xl w-full mx-4">
                <img
                  src={expandedPhoto.src}
                  alt={expandedPhoto.title}
                  className="w-full h-auto rounded-2xl shadow-2xl object-contain max-h-[80vh]"
                />
                <button
                  className="absolute top-4 right-4 p-3 bg-white/80 hover:bg-white rounded-full shadow-lg"
                  onClick={() => setExpandedPhoto(null)}
                  type="button"
                  aria-label="Close expanded photo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-4 right-4 flex flex-col md:flex-row md:items-center md:justify-between bg-black/60 rounded-xl p-4 gap-2">
                  <div className="text-white">
                    <h3 className="font-bold text-lg">{expandedPhoto.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      <span>{expandedPhoto.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <span className="inline-block px-2 py-1 bg-primary/30 rounded text-primary text-xs">
                      {expandedPhoto.category}
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="fixed inset-0 w-full h-full cursor-default"
                style={{ zIndex: 40, background: "transparent" }}
                onClick={() => setExpandedPhoto(null)}
                tabIndex={-1}
                aria-label="Close modal background"
              />
            </div>
          )}

          {/* Stats + Equipment remain unchanged */}
          {/* Keep existing Photography Stats and Equipment sections here */}
        </motion.div>
      </div>
    </div>
  );
};

export default Photography;
