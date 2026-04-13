import { motion } from 'framer-motion';

import powderImg from '../assets/images/powder.PNG';

const products = [
  {
    id: 1,
    name: "Signature Cone",
    description: "Triple-sifted Rajasthani henna blended with eucalyptus and lavender for a deep, rich stain.",
    image: powderImg
  },
  {
    id: 2,
    name: "Bridal Blend",
    description: "Our luxury intensive mix designed specifically for brides, promising peak color within 48 hours.",
    image: powderImg
  }
];

export default function Products() {
  return (
    <section id="products" className="w-full bg-off-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {products.map((product) => (
          <div key={product.id} className="relative h-[100vh] w-full group overflow-hidden flex flex-col md:block">
            
            {/* Image Area */}
            <div className="h-[60%] md:h-full w-full relative overflow-hidden bg-gray-200">
               <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-[40%] md:absolute md:inset-0 md:bg-black/25 flex flex-col justify-end p-8 md:p-16 z-10 bg-cream md:bg-transparent"
            >
              <h3 className="text-4xl md:text-5xl font-serif text-gray-900 md:text-cream mb-4">{product.name}</h3>
              <p className="font-sans text-sm md:text-base text-gray-700 md:text-cream/95 max-w-sm leading-relaxed">
                {product.description}
              </p>
              <button className="mt-8 text-left w-fit uppercase tracking-widest text-xs font-medium text-gray-900 md:text-cream border-b border-gray-900 md:border-cream pb-1 hover:text-sage-green hover:border-sage-green md:hover:text-sage-green md:hover:border-sage-green transition-colors">
                Discover More
              </button>
            </motion.div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
