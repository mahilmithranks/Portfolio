import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Turf Book',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        description: 'A comprehensive sports turf booking platform enabling users to browse venues, check availability, and book slots in real-time.',
        gradient: 'from-gray-700 to-black',
        github: 'https://github.com/mahilmithranks/Truf.git',
        website: 'https://truf-book.vercel.app/'
    },
    {
        title: 'Zenvoa Technologies',
        tags: ['React', 'Tailwind CSS', 'Framer Motion'],
        description: 'Modern, high-performance landing page for a tech solutions agency, featuring smooth animations and a monochrome aesthetic.',
        gradient: 'from-gray-600 to-gray-800',
        github: 'https://github.com/zenvoatechnologies/Zenvoa-Technologies.git',
        website: 'https://zenvoa-technologies.vercel.app/'
    }
];

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative h-96 w-full rounded-3xl bg-white/60 backdrop-blur-2xl p-8 border border-white/40 group md:h-[500px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_64px_rgba(0,0,0,0.12)] transition-all duration-300"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: "preserve-3d", transform }}
            ref={ref}
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 grid place-content-center rounded-2xl bg-white/50 backdrop-blur-2xl border border-white/50 p-8 transition-all duration-300 overflow-hidden"
            >
                {/* Action Icons - Fixed Position */}
                <div className="absolute top-6 right-6 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.website && (
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-black/80 backdrop-blur-md border border-black/20 hover:bg-black transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            title="View Live Site"
                        >
                            <ArrowUpRight size={20} className="text-white" />
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-black/80 backdrop-blur-md border border-black/20 hover:bg-black transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            title="View on GitHub"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                        </a>
                    )}
                </div>

                <div className="relative z-10 w-full">

                    <h3 className="text-3xl font-bold mb-4 text-black transition-colors duration-300">
                        {project.title}
                    </h3>

                    <p className="text-gray-600 mb-8 leading-relaxed transition-colors duration-300">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-white/60 backdrop-blur-xl border border-white/50 text-slate-700 hover:bg-white/80 hover:scale-105 transition-all duration-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-slate-800">
                        Featured <span className="text-slate-500">Projects</span>
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        A showcase of my recent work in full-stack development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
