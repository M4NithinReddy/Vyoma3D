import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/site.config';
import { useDarkMode } from '../hooks/useDarkMode';
import { Button } from './Button';
import { FloatingTools } from './FloatingTools';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const { isDark, toggle } = useDarkMode();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [location]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl'
          : 'bg-transparent lg:bg-transparent bg-gray-900/80 backdrop-blur-md'
      }`}
    >
      {!scrolled && location.pathname === '/' && <FloatingTools />}
      <nav className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {siteConfig.nav.main.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.megaMenu && <ChevronDown size={16} />}
                </Link>

                <AnimatePresence>
                  {item.megaMenu && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 py-2"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      {item.megaMenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-3 hover:bg-white/5 transition-colors"
                        >
                          <div className="font-medium text-white">{subItem.label}</div>
                          {'desc' in subItem && subItem.desc && (
                            <div className="text-sm text-gray-400 mt-0.5">{subItem.desc}</div>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggle}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button variant="outline" size="sm" onClick={() => navigate('/get-a-quote')}>
              Get a Quote
            </Button>
            <Button size="sm" onClick={() => navigate('/enroll')}>
              Enroll Now
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pt-4 border-t border-white/10 overflow-hidden"
            >
              <div className="max-h-[calc(100vh-120px)] overflow-y-auto pb-4">
                {siteConfig.nav.main.map((item) => (
                  <div key={item.label} className="mb-4">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.href}
                        className="block py-2 text-gray-300 hover:text-white font-medium flex-grow"
                      >
                        {item.label}
                      </Link>
                      {item.megaMenu && (
                        <button
                          onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                          className="p-2 text-gray-400"
                          aria-label={`Toggle ${item.label} menu`}
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${mobileDropdown === item.label ? 'rotate-180' : ''}`}
                          />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {item.megaMenu && mobileDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-2 space-y-2 overflow-hidden"
                        >
                          {item.megaMenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className="block py-2 px-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                              <div className="font-medium">{subItem.label}</div>
                              {'desc' in subItem && subItem.desc && (
                                <div className="text-xs text-gray-500 mt-0.5">{subItem.desc}</div>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={toggle}
                    className="flex items-center gap-2 p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                  <Button variant="outline" size="sm" onClick={() => navigate('/get-a-quote')}>
                    Get a Quote
                  </Button>
                  <Button size="sm" onClick={() => navigate('/enroll')}>
                    Enroll Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
