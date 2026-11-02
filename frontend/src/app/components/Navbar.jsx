'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Handle scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <>
      <nav className={`w-full bg-black ${isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-black'} border-b border-gray-800   px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-48  py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
        
        {/* LOGO */}
        <Link href="/" className="relative group z-50">
          <div className="relative">
            <Image
              src="/logo.webp"
              width={isMobile ? 100 : 120}
              height={isMobile ? 12 : 16}
              alt="Fleet X Logistics Logo"
              className={`${isMobile ? 'w-24' : 'w-28 xl:w-32'} h-auto object-cover`}
              priority
            />
          </div>
        </Link>

        {/* MOBILE: Apply Button + Menu */}
        <div className="xl:hidden flex items-center gap-3">
       

          {/* Apply Now Button - Mobile */}
          <Link href="/apply" className="xl:hidden">
            <div className="border border-white/20 hover:border-white/40  text-white font-semibold py-2 px-4  transition active:scale-95 flex items-center gap-1">
              <span className="text-sm">Apply Now</span>
              <IoIosArrowRoundForward className="w-4 h-4" />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden text-gray-300 transition-colors relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="space-y-1.5">
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden xl:flex items-center space-x-8 font-semibold">
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white text-md tracking-wide transition-colors duration-200 py-2"
            >
              Home
            </Link>
            <Link 
              href="/careers" 
              className="text-gray-300 hover:text-white text-md tracking-wide transition-colors duration-200 py-2"
            >
              Careers
            </Link>                                
            <Link 
              href="/faqs" 
              className="text-gray-300 hover:text-white text-md tracking-wide transition-colors duration-200 py-2"
            >
              Driver FAQs
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white text-md tracking-wide transition-colors duration-200 py-2"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white text-md tracking-wide transition-colors duration-200 py-2"
            >
              Contact
            </Link>
          </div>
          
          {/* SEPARATOR */}
          <div className="h-6 w-px bg-gray-700"></div>
          
          {/* DESKTOP APPLY BUTTON */}
          <Link href="/apply">
            <div className="flex items-center gap-2 border border-white/20 hover:border-white/40  text-white font-semibold px-6 py-2  transition active:scale-95">
              Apply Now 
              <IoIosArrowRoundForward className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 xl:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU PANEL */}
      <div className={`fixed top-0 left-0 bottom-0 w-80 bg-black border-r border-gray-800 xl:hidden z-50 transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Menu Header with Logo */}
          <div className="p-6 border-b border-gray-800">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/logo.webp"
                width={120}
                height={16}
                alt="Logo"
                className="w-32 h-auto"
              />
            </Link>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-1">
            <Link 
              href="/" 
              className="block text-gray-300 hover:text-white text-lg font-medium py-4 transition-colors border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/careers" 
              className="block text-gray-300 hover:text-white text-lg font-medium py-4 transition-colors border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              href="/faqs" 
              className="block text-gray-300 hover:text-white text-lg font-medium py-4 transition-colors border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Driver FAQs
            </Link>
            <Link 
              href="/about" 
              className="block text-gray-300 hover:text-white text-lg font-medium py-4 transition-colors border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="block text-gray-300 hover:text-white text-lg font-medium py-4 transition-colors border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Menu Footer with Apply Button */}
          <div className="p-6 border-t border-gray-800 bg-black/50">
            <div className="space-y-4">
              {/* Main Apply Button */}
              <Link 
                href="/apply"
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                <div className="w-full bg-[#ff0000] hover:bg-[#d12020] text-white font-semibold text-center py-2 px-6  transition active:scale-95 flex items-center justify-center gap-2">
                  Apply Now 
                  <IoIosArrowRoundForward className="w-5 h-5" />
                </div>
              </Link>



              {/* WhatsApp Quick Apply */}
              <a
                href="https://wa.me/447763618300"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 text-white font-medium py-2 px-4  transition active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                </svg>
                <span>Apply via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer for fixed navbar */}
      <div className="h-16 xl:h-20"></div>
    </>
  );
};

export default Navbar;



