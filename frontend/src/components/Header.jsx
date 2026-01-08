import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-16 sm:top-4 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[calc(100%-2rem)] sm:max-w-none"
        >
            <nav
                className={`
          relative px-3 sm:px-6 py-2 sm:py-2.5 rounded-full
          bg-white/60 backdrop-blur-2xl
          border border-white/30
          shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]
          transition-all duration-300
          ${scrolled ? 'shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)] bg-white/70' : ''}
        `}
            >
                <div className="flex items-center justify-center">
                    <div className="flex items-center gap-0.5 sm:gap-1">
                        {['Home', 'Skills', 'Projects'].map((item) => (
                            <motion.button
                                key={item}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="px-2 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 transition-all duration-200"
                            >
                                {item}
                            </motion.button>
                        ))}

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="ml-0.5 sm:ml-1 px-3 sm:px-5 py-1.5 rounded-full bg-black text-white text-xs sm:text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg"
                        >
                            Contact
                        </motion.a>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button className="p-2 rounded-full hover:bg-white/50 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;
