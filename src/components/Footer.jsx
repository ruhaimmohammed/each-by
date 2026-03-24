export default function Footer() {
  return (
    <footer className="bg-soft-sand py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
        
        {/* Address */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl text-gray-800 tracking-wide">Boutique</h3>
          <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-xs mx-auto md:mx-0">
            123 Organic Avenue <br />
            Serene Valley, NY 10001 <br />
            Visits by appointment only.
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-6 md:border-x border-sage-green/30 md:px-16 flex flex-col items-center md:items-start">
          <h3 className="font-serif text-2xl text-gray-800 tracking-wide">Connect</h3>
          <ul className="space-y-3 font-sans text-sm text-gray-600 w-full text-center md:text-left">
            <li><a href="#" className="hover:text-sage-green transition-colors duration-300">Instagram</a></li>
            <li><a href="#" className="hover:text-sage-green transition-colors duration-300">Pinterest</a></li>
            <li><a href="#" className="hover:text-sage-green transition-colors duration-300">TikTok</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 flex flex-col items-center md:items-end">
          <h3 className="font-serif text-2xl text-gray-800 tracking-wide">Inquiries</h3>
          <p className="font-sans text-sm text-gray-600 text-center md:text-right">
            hello@eachbymehendi.com <br />
            +1 (555) 123-4567
          </p>
        </div>

      </div>
      
      <div className="mt-24 text-center text-xs text-gray-500 font-sans tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Eachby Mehendi. All Rights Reserved.
      </div>
    </footer>
  );
}
