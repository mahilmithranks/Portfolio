import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code } from 'lucide-react';
import { Particles } from './ui/Particles';
import OrbitingSkills from './ui/OrbitingSkills';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32 px-4 sm:px-6">

            {/* Removed background gradients for cleaner look with body gradient */}

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">

                {/* Left Column: Text */}
                <div className="text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 sm:mb-6"
                    >
                        {/* Particles Text Effect for Name - Black Theme */}
                        <div className="relative inline-block">
                            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500 bg-clip-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-none text-transparent">
                                Mahil Mithran
                            </span>
                            <Particles
                                className="absolute inset-0 z-[-1]"
                                quantity={50}
                                ease={80}
                                color="#000000"
                                refresh
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 font-heading text-black flex flex-col gap-1 sm:gap-2"
                    >
                        <span className="text-gray-700">Software Developer</span>
                        <span className="text-xl sm:text-2xl md:text-4xl text-gray-500 font-medium">CEO of Zenvoa Technologies</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-text-secondary mb-6 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                    >
                        Passionate developer mastering Python, React, and Backend technologies.
                        Crafting scalable solutions and seamless user experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-6"
                    >
                        <SocialLink href="https://www.linkedin.com/in/mahilmithranks-527804325" icon={<Linkedin size={20} />} label="LinkedIn" />
                        <SocialLink href="https://github.com/mahilmithranks" icon={<Github size={20} />} label="GitHub" />
                        <SocialLink href="https://leetcode.com/u/mahilmithranks/" icon={<Code size={20} />} label="LeetCode" />
                    </motion.div>
                </div>

                {/* Right Column: Orbiting Skills */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative">
                        <OrbitingSkills />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 sm:p-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 hover:bg-white/80 hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 text-black group"
        aria-label={label}
    >
        {icon}
    </a>
);

export default Hero;
