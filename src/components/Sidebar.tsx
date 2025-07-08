import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
  FaCertificate,
  FaImage,
  FaNewspaper,
  FaFlask,
  FaCalendarAlt,
  FaCamera,
  FaBars,
  FaTimes
} from "react-icons/fa";

const navItems = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/about", label: "About Me", icon: FaUser },
  { path: "/education", label: "Education", icon: FaGraduationCap },
  { path: "/skills", label: "Skills", icon: FaCode },
  { path: "/projects", label: "Projects", icon: FaProjectDiagram },
  { path: "/certificates", label: "Certificates", icon: FaCertificate },
  { path: "/posters", label: "Posters", icon: FaImage },
  { path: "/Publications", label: "Publications", icon: FaNewspaper },
  { path: "/research", label: "Research", icon: FaFlask },
  { path: "/events", label: "Events", icon: FaCalendarAlt },
  { path: "/photography", label: "Photography", icon: FaCamera },
];

export const Sidebar = ({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean, setIsCollapsed: (collapsed: boolean) => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const handleNavClick = () => setIsMobileMenuOpen(false);
  const handleDesktopToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={handleMobileMenuToggle}
        className="md:hidden fixed top-4 left-4 z-50 p-3 rounded-lg bg-card border border-border shadow-lg"
        style={{ WebkitTapHighlightColor: 'transparent' }}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 64 : 256 }}
        className={`
          fixed left-0 top-0 h-full bg-card border-r border-border z-40
          transition-transform duration-300 ease-in-out
          overflow-hidden
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              {!isCollapsed && (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
                >
                  Hi There !!
                </motion.h1>
              )}
              <button
                onClick={handleDesktopToggle}
                className="hidden md:flex p-2 rounded-lg hover:bg-accent transition-colors"
                style={{ WebkitTapHighlightColor: 'transparent' }}
                aria-label="Toggle sidebar"
              >
                <FaBars className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Profile Section */}
          <div className="p-4 border-b border-border">
            <div className="flex flex-col items-center">
              {/* Profile Picture */}
              <div className="relative group cursor-pointer">
                <div className={`
                  ${isCollapsed ? 'w-10 h-10' : 'w-16 h-16'} 
                  rounded-full overflow-hidden border-2 border-primary/20 
                  transition-all duration-300 group-hover:border-primary/40
                  shadow-lg group-hover:shadow-xl
                `}>
                  {/* Replace this with your actual profile image */}
                  <img
                    src="./IMG_20250407_222626.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to a gradient background with initials if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback gradient with initials */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Deb</span>
                  </div>
                </div>
                
                {/* Online status indicator */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-card"></div>
              </div>

              {/* Profile Info */}
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-center"
                >
                  <h3 className="font-semibold text-sm">Debopam</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Engineering Student
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav
            className="flex-1 px-2 pt-4 pb-6 space-y-2 overflow-y-auto"
            style={{ overflowX: "hidden", scrollbarWidth: "thin", scrollbarColor: "rgba(156, 163, 175, 0.3) transparent" }}
          >
            <style dangerouslySetInnerHTML={{
              __html: `
                nav::-webkit-scrollbar {
                  width: 6px;
                }
                nav::-webkit-scrollbar-track {
                  background: transparent;
                }
                nav::-webkit-scrollbar-thumb {
                  background: rgba(156, 163, 175, 0.3);
                  border-radius: 3px;
                }
                nav::-webkit-scrollbar-thumb:hover {
                  background: rgba(156, 163, 175, 0.5);
                }
              `
            }} />
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex ${isCollapsed ? "justify-center px-0" : "justify-start px-3"} 
                   items-center gap-3 py-3 rounded-lg transition-all duration-200 group
                   ${isCollapsed ? "w-12 mx-auto" : "w-full"}
                   ${isActive 
                     ? "bg-primary text-primary-foreground shadow-lg" 
                     : "hover:bg-accent hover:text-accent-foreground active:bg-accent/80"
                   }`
                }
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Overlay - render after sidebar, with lower z-index */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={closeMobileMenu}
          onTouchStart={closeMobileMenu}
        />
      )}
    </>
  );
};