import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-cream min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-2xl bg-off-white p-10 md:p-16 shadow-sm border border-soft-sand"
      >
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 tracking-wide">Get in Touch</h2>
          <p className="font-sans text-gray-600 text-sm md:text-base font-light">We'd love to hear from you. Discover the Eachby experience.</p>
        </div>

        <form className="space-y-10 mt-12 flex flex-col font-sans">
          
          <div className="relative">
            <input 
              type="text" 
              id="name"
              placeholder=" "
              className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-800 focus:outline-none focus:border-sage-green transition-colors" 
            />
            <label htmlFor="name" className="absolute left-0 top-2 text-gray-400 cursor-text peer-focus:-top-4 peer-focus:text-xs peer-focus:text-sage-green peer-placeholder-shown:top-2 peer-placeholder-shown:text-base transition-all font-light tracking-wide">Name</label>
          </div>

          <div className="relative">
            <input 
              type="email" 
              id="email"
              placeholder=" "
              className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-800 focus:outline-none focus:border-sage-green transition-colors" 
            />
            <label htmlFor="email" className="absolute left-0 top-2 text-gray-400 cursor-text peer-focus:-top-4 peer-focus:text-xs peer-focus:text-sage-green peer-placeholder-shown:top-2 peer-placeholder-shown:text-base transition-all font-light tracking-wide">Email</label>
          </div>

          <div className="relative">
            <input 
              type="tel" 
              id="phone"
              placeholder=" "
              className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-800 focus:outline-none focus:border-sage-green transition-colors" 
            />
            <label htmlFor="phone" className="absolute left-0 top-2 text-gray-400 cursor-text peer-focus:-top-4 peer-focus:text-xs peer-focus:text-sage-green peer-placeholder-shown:top-2 peer-placeholder-shown:text-base transition-all font-light tracking-wide">Phone Number</label>
          </div>

          <div className="relative">
            <textarea 
              id="message"
              placeholder=" "
              rows="3"
              className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-800 focus:outline-none focus:border-sage-green transition-colors resize-none" 
            />
            <label htmlFor="message" className="absolute left-0 top-2 text-gray-400 cursor-text peer-focus:-top-4 peer-focus:text-xs peer-focus:text-sage-green peer-placeholder-shown:top-2 peer-placeholder-shown:text-base transition-all font-light tracking-wide">Message</label>
          </div>

          <button 
            type="button" 
            className="w-full bg-sage-green text-cream py-4 uppercase tracking-widest text-sm hover:bg-sage-green/90 transition-colors mt-8 font-medium"
          >
            Send Inquiry
          </button>
        </form>
      </motion.div>
    </section>
  );
}
