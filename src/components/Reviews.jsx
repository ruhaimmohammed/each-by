import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Aisha Rahman",
    text: "The most serene and beautiful experience I've ever had. Their attention to detail and mastery over the organic elements left me speechless.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    text: "An absolute luxurious approach to traditional art. The stain developed beautifully into a rich, deep mahogany. Simply unparalleled.",
  },
  {
    id: 3,
    name: "Priya Patel",
    text: "Eachby doesn't just do mehendi, they curate an atmosphere of peace and elegance. Highly recommend for any discerning bride.",
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 6000);
    return () => clearInterval(timer);
  });

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="py-32 px-6 md:px-12 bg-cream flex flex-col items-center justify-center min-h-[80vh] overflow-hidden">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 tracking-wide">Client Experiences</h2>
        <div className="w-16 h-[1px] bg-sage-green mx-auto" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center h-[300px] md:h-[250px]">
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevReview}
          className="absolute left-0 md:-left-8 z-20 p-2 text-gray-400 hover:text-sage-green transition-colors focus:outline-none"
          aria-label="Previous Review"
        >
          <ChevronLeft size={36} strokeWidth={1} />
        </button>

        <button 
          onClick={nextReview}
          className="absolute right-0 md:-right-8 z-20 p-2 text-gray-400 hover:text-sage-green transition-colors focus:outline-none"
          aria-label="Next Review"
        >
          <ChevronRight size={36} strokeWidth={1} />
        </button>

        {/* Slider Content */}
        <div className="relative w-full h-full flex items-center justify-center px-12 md:px-24">
          <Quote className="absolute top-0 left-8 md:left-20 text-sage-green/15" size={80} />
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="absolute w-full px-12 md:px-24 text-center"
            >
              <p className="text-lg md:text-3xl font-serif text-gray-700 leading-relaxed italic mb-10">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-8 h-[1px] bg-sage-green/60 mb-4" />
                <h4 className="font-sans text-sm md:text-base tracking-widest uppercase text-gray-900 font-medium">
                  {testimonials[currentIndex].name}
                </h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex space-x-3 mt-12 z-20">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`transition-all duration-500 rounded-full ${
              idx === currentIndex 
                ? "w-8 h-1.5 bg-sage-green" 
                : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
