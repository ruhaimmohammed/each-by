import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '../assets/images/image.PNG';
import heroLeftImg from '../assets/images/hero-left.png';
import Contact from './Contact';


export default function ComingSoon() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 300]);

    return (
        <>
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-off-white">
                {/* Background Image with Parallax */}
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0 origin-center"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 z-10 hero-bg" />
                </motion.div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 flex flex-col items-center hero-title">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="text-7xl md:text-9xl font-serif text-cream drop-shadow-lg tracking-wider"
                    >
                        <button class="button-gold">
                            <span>Eachby</span>
                        </button>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100px" }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-[1px] bg-cream/70 my-6"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                        className="text-sm md:text-lg font-sans text-cream/90 uppercase tracking-[0.3em]"
                    >
                        Stay Tuned!
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
                >
                    <span className="text-[10px] text-cream uppercase tracking-widest mb-3 font-sans font-light">Get in Touch</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-[1px] h-12 bg-cream/60"
                    />
                </motion.div>
            </section>
            <div className='coming-soon-contact'>
                <Contact />
            </div>
        </>
    );
}
