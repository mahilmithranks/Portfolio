import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Frontend Development',
        desc: 'Building modern, responsive user interfaces with React, Tailwind CSS, and cutting-edge web technologies.',
        skills: ['React.js', 'HTML/CSS', 'Tailwind', 'Framer Motion'],
        gradientFrom: '#06B6D4',
        gradientTo: '#3B82F6',
    },
    {
        title: 'Backend Development',
        desc: 'Creating robust server-side applications with Node.js, Express, and database management systems.',
        skills: ['Node.js', 'Express.js', 'Django', 'JWT'],
        gradientFrom: '#10B981',
        gradientTo: '#059669',
    },
    {
        title: 'Programming Languages',
        desc: 'Proficient in multiple programming paradigms with strong foundations in algorithms and data structures.',
        skills: ['Python', 'JavaScript', 'C++', 'Java'],
        gradientFrom: '#F59E0B',
        gradientTo: '#EF4444',
    },
];

export default function SkillCards() {
    return (
        <section id="skills" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center font-heading text-slate-800"
                >
                    Technical <span className="text-slate-500">Arsenal</span>
                </motion.h2>

                <div className="flex justify-center items-center flex-wrap gap-8">
                    {skillCategories.map(({ title, desc, skills, gradientFrom, gradientTo }, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative w-[320px] h-[420px] transition-all duration-500"
                        >
                            {/* Skewed gradient panels - iOS style */}
                            <span
                                className="absolute top-0 left-[50px] w-1/2 h-full rounded-3xl transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)] opacity-80"
                                style={{
                                    background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                                }}
                            />
                            <span
                                className="absolute top-0 left-[50px] w-1/2 h-full rounded-3xl transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)] opacity-60"
                                style={{
                                    background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                                }}
                            />

                            {/* Animated blurs */}
                            <span className="pointer-events-none absolute inset-0 z-10">
                                <span className="absolute top-0 left-0 w-0 h-0 rounded-2xl opacity-0 bg-white/10 backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
                                <span className="absolute bottom-0 right-0 w-0 h-0 rounded-2xl opacity-0 bg-white/10 backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 delay-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
                            </span>

                            {/* Content - iOS Glassmorphism */}
                            <div className="relative z-20 left-0 p-8 bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-3xl text-slate-800 transition-all duration-500 group-hover:left-[-25px] group-hover:p-10 group-hover:bg-white/70 h-full flex flex-col">
                                <h2 className="text-2xl font-bold mb-3 font-heading">{title}</h2>
                                <p className="text-sm leading-relaxed mb-4 text-slate-600 flex-grow">{desc}</p>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/60 backdrop-blur-xl border border-white/50 text-slate-700"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
