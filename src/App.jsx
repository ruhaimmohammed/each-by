import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <div className="bg-off-white min-h-screen text-gray-800 font-sans selection:bg-sage-green selection:text-cream">
      {/* <Navbar /> */}
      
      <main>
        <ComingSoon />
        {/* <Hero />
        <Reviews />
        <Products />
        <Contact /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
