import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FileCode } from 'lucide-react';

export const TechStack = ({ techStack, title = "Techstack" }) => {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const lightSize = 80;

    const lightX = useTransform(x, (value) => value - lightSize / 2);
    const lightY = useTransform(y, (value) => value - lightSize / 2);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    };

    return (
        <div className='flex justify-center items-center py-4'>
            <div
                className="relative bg-black/90 overflow-hidden w-full md:w-96 min-h-[240px] pb-3 rounded-lg shadow-xl border border-white/5 transition-all duration-300 hover:scale-[1.02]"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <img
                    src="https://images.unsplash.com/photo-1695883701435-7bd88f796e05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-20 pointer-events-none"
                />


                <div className="absolute inset-0 bg-black/40 rounded-lg border border-white/10 backdrop-blur-sm"></div>


                {isHovered && (
                    <motion.div
                        className="absolute rounded-full pointer-events-none z-20"
                        style={{
                            width: lightSize,
                            height: lightSize,
                            background: 'rgba(255, 255, 255, 0.15)',
                            filter: 'blur(30px)',
                            x: lightX,
                            y: lightY,
                        }}
                    ></motion.div>
                )}


                <div className="relative z-10 flex flex-col justify-between p-6 h-full">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2 mb-4 text-sm text-white">
                            <FileCode size={18} className="text-gray-300" />
                            <p className="font-heading font-medium text-lg tracking-wide">{title}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 content-start">
                        {techStack.map((tech, index) => (
                            <div key={index} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs transition-colors hover:bg-white/10 hover:border-white/20 text-gray-200">
                                <div className="w-2 h-2 mr-2 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ backgroundColor: tech.color }}></div>
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
