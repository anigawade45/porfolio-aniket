import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';

const projects = [
    {
        id: 1,
        title: "Full-Stack Auth System",
        description: "Secure user management with JWT & role-based access control.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200",
        tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
        live: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Admin Analytics",
        description: "Advanced data visualization with real-time filtering & Redux.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        tech: ["React", "MUI", "Chart.js", "Redux"],
        live: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Gig Marketplace",
        description: "Scalable MERN platform with real-time tracking & payments.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
        tech: ["Socket.io", "PostgreSQL", "React", "Node"],
        live: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Modern UI Portfolio",
        description: "High-performance interface with GSAP & premium animations.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
        tech: ["GSAP", "Vite", "Framer Motion"],
        live: "#",
        github: "#"
    }
];

const ProjectCard = ({ project }) => {
    const { theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col h-full
                ${theme === 'dark'
                    ? 'bg-surface-card border-border-divider hover:border-blue-500/30'
                    : 'bg-white border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:border-blue-500/30'}`}
        >
            {/* Project Image - Fixed Aspect Ratio */}
            <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden relative">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Desktop-Only Immersive Overlay */}
                <div className="absolute inset-0 bg-bg-primary/80 dark:bg-[#030712]/80 flex flex-col justify-end p-8 
                               hidden lg:flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-3xl font-black text-text-primary mb-4 tracking-tighter">
                            {project.title}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex flex-col grow transition-colors">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-blue-500" />
                    <h3 className="text-text-primary font-black text-xl md:text-2xl tracking-tight transition-colors">
                        {project.title}
                    </h3>
                </div>

                <p className="text-text-secondary text-sm md:text-base mb-6 line-clamp-2 leading-relaxed transition-colors opacity-80">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((skill) => (
                        <span key={skill} className={`text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider border transition-all
                            ${theme === 'dark'
                                ? 'text-blue-400 border-blue-400/20 bg-blue-500/5'
                                : 'text-blue-600 border-blue-600/10 bg-blue-50'}`}>
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <Button
                        component="a"
                        href={project.live}
                        target="_blank"
                        variant="contained"
                        sx={{
                            bgcolor: '#3B82F6',
                            color: 'white',
                            fontWeight: 800,
                            textTransform: 'none',
                            borderRadius: '12px',
                            fontSize: '0.85rem',
                            py: 1.2,
                            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                            '&:hover': { bgcolor: '#2563EB', transform: 'translateY(-2px)' },
                            transition: 'all 0.3s'
                        }}
                    >
                        Live Demo
                    </Button>
                    <Button
                        component="a"
                        href={project.github}
                        target="_blank"
                        variant="outlined"
                        sx={{
                            borderColor: theme === 'dark' ? 'white/10' : 'rgba(0,0,0,0.1)',
                            color: 'var(--text-primary)',
                            fontWeight: 700,
                            textTransform: 'none',
                            borderRadius: '12px',
                            fontSize: '0.85rem',
                            py: 1.2,
                            '&:hover': { borderColor: '#3B82F6', bgcolor: 'rgba(59, 130, 246, 0.05)', transform: 'translateY(-2px)' },
                            transition: 'all 0.3s'
                        }}
                    >
                        GitHub
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const { theme } = useTheme();

    return (
        <section id="projects" className="py-24">
            <Container maxWidth="xl" sx={{ px: { xs: 4, sm: 6, md: 10 } }}>
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-500 font-black tracking-[6px] text-xs uppercase mb-4 block">
                            PROJECTS
                        </span>
                        <h2 className="text-text-primary font-black text-5xl md:text-7xl tracking-tighter leading-[0.9] mb-8 transition-colors">
                            Featured <span className="text-gradient">Works.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Button
                        href="https://github.com"
                        target="_blank"
                        variant="outlined"
                        sx={{
                            color: 'var(--text-primary)',
                            borderColor: theme === 'dark' ? 'white/10' : 'rgba(0,0,0,0.1)',
                            px: 6,
                            py: 1.5,
                            borderRadius: '10px',
                            fontWeight: 700,
                            textTransform: 'none',
                            '&:hover': { borderColor: '#3B82F6', bgcolor: 'rgba(59, 130, 246, 0.05)', transform: 'translateY(-2px)' },
                            transition: 'all 0.3s'
                        }}
                    >
                        See more on GitHub
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default Projects;
