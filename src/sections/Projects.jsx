import React, { useState } from 'react';
import { Container, Button, Box, Modal, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'motion/react';
import {
    X,
    Github,
    Globe,
    Code2,
    Database,
    Server,
    Terminal,
    ShieldCheck,
    Zap,
    Cpu,
    Wind,
    Activity,
    Move,
    Layout,
    Atom,
    Box as BoxIcon,
    PieChart,
    Layers,
    Sparkles,
    Brain,
    CreditCard,
    ClipboardCheck
} from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';
import CircularGallery from '../components/CircularGallery';

// Import local project images
import project1 from '../assets/Project1.png';
import project2 from '../assets/Project2.png';
import project3 from '../assets/Project3.png';
import project4 from '../assets/Project4.png';

const Fade = ({ children, in: open }) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="project-modal-motion"
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 40 }}
                    transition={{ type: "spring", damping: 25, stiffness: 350 }}
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        zIndex: 1400
                    }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const projects = [
    {
        title: "AI Career Coach",
        text: "AI Coach",
        description: "An intelligent platform providing industry insights, career coaching, and professional guidance. Built with Gemini API for smart analysis and Clerk for secure, modern authentication.",
        image: project1,
        tech: [
            { name: "Next.js", icon: <Zap size={14} />, color: "#000000" },
            { name: "Express", icon: <Server size={14} />, color: "#828282" },
            { name: "Gemini AI", icon: <Sparkles size={14} />, color: "#1A73E8" },
            { name: "Clerk", icon: <ShieldCheck size={14} />, color: "#6C47FF" },
            { name: "Neon (PgSQL)", icon: <Database size={14} />, color: "#00E599" },
            { name: "Tailwind", icon: <Wind size={14} />, color: "#06B6D4" },
            { name: "shadcn/ui", icon: <Layout size={14} />, color: "#000000" }
        ],
        github: "https://github.com/anigawade45",
        live: "https://sensai-orcin.vercel.app/"
    },
    {
        title: "LMS Platform",
        text: "LMS",
        description: "A comprehensive Learning Management System featuring course management, student progress tracking, and secure video streaming. Integrates Stripe for course purchases and Clerk for unified authentication.",
        image: project2,
        tech: [
            { name: "MongoDB", icon: <Database size={14} />, color: "#4DB33D" },
            { name: "Express", icon: <Server size={14} />, color: "#828282" },
            { name: "React", icon: <Atom size={14} />, color: "#61DAFB" },
            { name: "Node.js", icon: <Terminal size={14} />, color: "#339933" },
            { name: "Stripe", icon: <CreditCard size={14} />, color: "#635BFF" },
            { name: "Clerk", icon: <ShieldCheck size={14} />, color: "#6C47FF" }
        ],
        github: "https://github.com/anigawade45",
        live: "https://lms-frontend-beta-seven.vercel.app/"
    },
    {
        title: "Audit Management System",
        text: "Audit Admin",
        description: "A professional-grade Accounting and Audit Management System. Featuring complex financial report generation, Marathi language support, and a dual-mode Electron desktop application for offline data entry.",
        image: project3,
        tech: [
            { name: "MongoDB", icon: <Database size={14} />, color: "#4DB33D" },
            { name: "Express", icon: <Server size={14} />, color: "#828282" },
            { name: "React", icon: <Atom size={14} />, color: "#61DAFB" },
            { name: "Vite", icon: <Zap size={14} />, color: "#646CFF" },
            { name: "Jest", icon: <Activity size={14} />, color: "#C21325" },
            { name: "JWT", icon: <ShieldCheck size={14} />, color: "#FB015B" }
        ],
        github: "https://github.com/anigawade45",
        live: "https://audit-frontend-zeta.vercel.app"
    },
    {
        title: "Immersive 3D Portfolio",
        text: "Portfolio",
        description: "A high-end personal portfolio featuring 3D circular galleries, pixel transitions, and proximity-based animations. Engineered for maximum visual impact with smooth scrolling and premium micro-interactions.",
        image: project4,
        tech: [
            { name: "React", icon: <Atom size={14} />, color: "#61DAFB" },
            { name: "GSAP", icon: <Activity size={14} />, color: "#88CE02" },
            { name: "Tailwind", icon: <Wind size={14} />, color: "#38B2AC" },
            { name: "OGL/WebGL", icon: <Globe size={14} />, color: "#FF4500" },
            { name: "MUI", icon: <BoxIcon size={14} />, color: "#007FFF" }
        ],
        github: "https://github.com/anigawade45",
        live: "https://porfolio-aniket-eta.vercel.app/"
    }
];

const Projects = () => {
    const { theme } = useTheme();
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (index) => {
        const originalIndex = index % projects.length;
        setSelectedProject(projects[originalIndex]);
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden h-[900px] flex flex-col justify-center">
            <Container maxWidth="xl" className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 z-20" sx={{ px: { xs: 4, sm: 6, md: 10 } }}>
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-500 font-black tracking-[6px] text-xs uppercase mb-4 block">
                            PROJECTS
                        </span>
                        <h2 className="text-text-primary font-black text-5xl md:text-7xl tracking-tighter leading-[0.9] mb-4 transition-colors">
                            Featured <span className="text-gradient">Works.</span>
                        </h2>
                        <p className="text-text-secondary text-sm font-bold uppercase tracking-widest opacity-40">
                            Click to reveal project details
                        </p>
                    </motion.div>
                </div>
            </Container>

            {/* Immersive 3D Gallery */}
            <div className="w-full h-full relative z-10">
                <CircularGallery
                    items={projects}
                    bend={3}
                    textColor={theme === 'dark' ? '#F8FAFC' : '#0F172A'}
                    font="black 24px 'Plus Jakarta Sans'"
                    borderRadius={0.08}
                    onItemClick={handleProjectClick}
                />
            </div>



            {/* Project Details Modal */}
            <Modal
                open={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                closeAfterTransition
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: { xs: 2, md: 4 },
                    backdropFilter: 'blur(16px) saturate(180%)',
                    backgroundColor: theme === 'dark' ? 'rgba(3, 7, 18, 0.4)' : 'rgba(248, 250, 252, 0.4)'
                }}
            >
                <Fade in={!!selectedProject}>
                    <Box sx={{
                        position: 'relative',
                        width: { xs: '95%', sm: '85%', md: '100%' },
                        maxWidth: '850px',
                        maxHeight: { xs: '90vh', md: 'auto' },
                        bgcolor: theme === 'dark' ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.85)',
                        borderRadius: '32px',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        outline: 'none',
                        backdropFilter: 'blur(40px) saturate(200%)',
                        // High-end Custom Border
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '32px',
                            padding: '1.5px', // Border thickness
                            background: theme === 'dark'
                                ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(37, 99, 235, 0.05), rgba(59, 130, 246, 0.3))'
                                : 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(255, 255, 255, 0.8), rgba(59, 130, 246, 0.2))',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            zIndex: 2,
                            pointerEvents: 'none',
                        },
                        // Animated Glow Layer
                        boxShadow: theme === 'dark'
                            ? '0 0 0 1px rgba(59, 130, 246, 0.1), 0 20px 50px -12px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(59, 130, 246, 0.05)'
                            : '0 0 0 1px rgba(59, 130, 246, 0.05), 0 20px 50px -12px rgba(59, 130, 246, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.5)',
                    }}>
                        <IconButton
                            onClick={() => setSelectedProject(null)}
                            sx={{
                                position: 'absolute',
                                right: { xs: 16, md: 32 },
                                top: { xs: 16, md: 32 },
                                zIndex: 20,
                                bgcolor: theme === 'dark' ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                                backdropFilter: 'blur(10px)',
                                color: 'var(--text-primary)',
                                '&:hover': { bgcolor: '#ef4444', color: 'white', transform: 'rotate(90deg)' },
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <X size={20} />
                        </IconButton>

                        <div className="grid lg:grid-cols-[1fr_1.1fr] overflow-y-auto custom-scrollbar">
                            {/* Image Side */}
                            <div className="aspect-[16/10] lg:aspect-auto relative group overflow-hidden shrink-0">
                                <img
                                    src={selectedProject?.image}
                                    alt={selectedProject?.title}
                                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-overlay" />
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent lg:hidden" />
                            </div>

                            {/* Content Side */}
                            <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center relative">
                                <div className="flex items-center gap-2 text-blue-500 font-black text-[8px] md:text-[9px] tracking-[3px] md:tracking-[4px] uppercase mb-4 md:mb-6 opacity-80">
                                    <div className="w-6 md:w-8 h-[1px] bg-blue-500" />
                                    <span>Spotlight</span>
                                </div>

                                <h3 className="text-text-primary text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tighter leading-[0.9] mb-4 md:mb-6 transition-colors">
                                    {selectedProject?.title}
                                </h3>

                                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 opacity-90 transition-colors font-medium">
                                    {selectedProject?.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject?.tech.map((tech, index) => (
                                        <div
                                            key={`${selectedProject.title}-${tech.name}-${index}`}
                                            className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full border transition-all duration-500 group/badge
                                                ${theme === 'dark'
                                                    ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                                                    : 'bg-slate-100/50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 shadow-sm'}`}
                                        >
                                            <span
                                                className="opacity-80 group-hover/badge:opacity-100 group-hover/badge:scale-110 transition-all duration-300"
                                                style={{ color: tech.color }}
                                            >
                                                {tech.icon}
                                            </span>
                                            <span className="text-[11px] font-black uppercase tracking-widest">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-[1fr_auto] gap-4">
                                    <Button
                                        component="a"
                                        href={selectedProject?.live}
                                        target="_blank"
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            position: 'relative',
                                            bgcolor: 'transparent',
                                            backgroundImage: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                                            borderRadius: '20px',
                                            fontWeight: 900,
                                            height: { xs: '56px', md: '72px' },
                                            fontSize: { xs: '0.85rem', md: '1rem' },
                                            textTransform: 'none',
                                            letterSpacing: '0.05em',
                                            overflow: 'hidden',
                                            boxShadow: theme === 'dark'
                                                ? '0 10px 20px -5px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
                                                : '0 10px 20px -5px rgba(59, 130, 246, 0.3)',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: '-100%',
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                                transition: '0.5s',
                                            },
                                            '&:hover': {
                                                backgroundImage: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                                                transform: 'translateY(-3px) scale(1.02)',
                                                boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.5)',
                                                '&::before': {
                                                    left: '100%',
                                                }
                                            },
                                            transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)'
                                        }}
                                        startIcon={<Globe size={20} className="mr-1" />}
                                    >
                                        Launch Experience
                                    </Button>
                                    <IconButton
                                        component="a"
                                        href={selectedProject?.github}
                                        target="_blank"
                                        sx={{
                                            borderRadius: '20px',
                                            width: { xs: '56px', md: '72px' },
                                            height: { xs: '56px', md: '72px' },
                                            border: '1px solid',
                                            borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                                            bgcolor: theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                                            backdropFilter: 'blur(10px)',
                                            color: 'var(--text-primary)',
                                            '&:hover': {
                                                borderColor: '#8b5cf6',
                                                color: '#8b5cf6',
                                                transform: 'translateY(-3px) rotate(8deg) scale(1.1)',
                                                bgcolor: 'rgba(139, 92, 246, 0.08)',
                                                boxShadow: '0 15px 30px -10px rgba(139, 92, 246, 0.3)'
                                            },
                                            transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)'
                                        }}
                                    >
                                        <Github size={26} />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </section>
    );
};



export default Projects;
