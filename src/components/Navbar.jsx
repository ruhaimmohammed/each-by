import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show navbar after scrolling past the hero section
    if (latest > (typeof window !== 'undefined' ? window.innerHeight * 0.8 : 800)) {
      setHidden(false);
    } else {
      setHidden(true);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    }
  });

  const navLinks = [
    { name: 'Reviews', href: '#reviews' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 80; // approximate navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // smooth "liquid" easing
      className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-soft-sand px-6 md:px-12 py-4 flex justify-between items-center"
    >
      <a 
        href="#" 
        onClick={(e) => handleScroll(e, '#')}
        className="text-2xl font-serif font-semibold text-gray-800 tracking-wider"
      >
        Eachby
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-12">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={(e) => handleScroll(e, link.href)}
            className="text-sm font-medium uppercase tracking-widest text-gray-700 hover:text-sage-green transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Nav Toggle */}
      <button 
        className="md:hidden p-2 focus:outline-none text-gray-800 hover:text-sage-green transition-colors" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {mobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
      </button>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-cream border-b border-soft-sand shadow-sm md:hidden flex flex-col items-center py-8 space-y-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-serif text-gray-800 hover:text-sage-green transition-colors"
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
