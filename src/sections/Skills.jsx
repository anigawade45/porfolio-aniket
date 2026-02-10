import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Code2,
    Server,
    Database,
    Terminal,
    Github,
    Cpu,
    Globe,
    Monitor,
    Smartphone,
    Palette,
    Key,
    Leaf,
    Zap,
    Workflow,
    Waves,
    Atom,
    SquareCode,
    Box,
    Send,
    ChevronRight,
    Triangle,
    Cloud,
    ShieldCheck,
    FlaskConical
} from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';

const skillGroups = [
    {
        category: "Frontend Development",
        description: "Crafting immersive, responsive, and high-performance user interfaces.",
        icon: <Monitor className="w-8 h-8" />,
        color: "#3B82F6",
        skills: [
            { name: "React", icon: <Atom />, color: "#61DAFB", level: "Expert" },
            { name: "JavaScript", icon: <Code2 />, color: "#F7DF1E", level: "Advanced" },
            { name: "HTML5", icon: <SquareCode />, color: "#E34F26", level: "Expert" },
            { name: "Tailwind", icon: <Waves />, color: "#06B6D4", level: "Expert" },
            { name: "CSS3", icon: <Palette />, color: "#1572B6", level: "Expert" },
            { name: "Material UI", icon: <Box />, color: "#007FFF", level: "Advanced" },
            { name: "Next.js", icon: <Triangle />, color: "#FFFFFF", level: "Expert" }
        ]
    },
    {
        category: "Backend Development",
        description: "Architecting scalable server-side systems and secure API infrastructures.",
        icon: <Server className="w-8 h-8" />,
        color: "#10B981",
        skills: [
            { name: "Node.js", icon: <Terminal />, color: "#339933", level: "Expert" },
            { name: "Express.js", icon: <Server />, color: "#FFFFFF", level: "Advanced" },
            { name: "REST APIs", icon: <Globe />, color: "#00FFC8", level: "Expert" },
            { name: "JWT Auth", icon: <Key />, color: "#FB015B", level: "Advanced" },
            { name: "Clerk Auth", icon: <ShieldCheck />, color: "#6C47FF", level: "Expert" }
        ]
    },
    {
        category: "Databases",
        description: "Managing data integrity and performance with modern NoSQL/SQL.",
        icon: <Database className="w-8 h-8" />,
        color: "#F59E0B",
        skills: [
            { name: "MongoDB", icon: <Leaf />, color: "#47A248", level: "Expert" },
            { name: "PostgreSQL", icon: <Database />, color: "#4169E1", level: "Intermediate" },
            { name: "Mongoose", icon: <Cpu />, color: "#880000", level: "Advanced" },
            { name: "MySQL", icon: <Database />, color: "#4479A1", level: "Advanced" }
        ]
    },
    {
        category: "Architecture & Tools",
        description: "Optimizing developer workflow and modern deployment patterns.",
        icon: <Workflow className="w-8 h-8" />,
        color: "#A855F7",
        skills: [
            { name: "Vite", icon: <Zap />, color: "#646CFF", level: "Expert" },
            { name: "Git", icon: <Github />, color: "#F05032", level: "Advanced" },
            { name: "MVC Pattern", icon: <Workflow />, color: "#FFD700", level: "Expert" },
            { name: "Postman", icon: <Send />, color: "#FF6C37", level: "Advanced" },
            { name: "Vercel", icon: <Triangle />, color: "#FFFFFF", level: "Expert" },
            { name: "Render", icon: <Cloud />, color: "#46E3B7", level: "Expert" },
            { name: "Jest", icon: <FlaskConical />, color: "#C21325", level: "Advanced" }
        ]
    }
];

const SkillCard = ({ group, isActive, onSelect }) => {
    const { theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative group bg-surface-card rounded-[28px] border transition-all duration-500 overflow-hidden
                ${isActive ? 'border-blue-500/30' : 'border-border-divider hover:border-blue-500/20'}`}
        >
            {/* Background Accent Glow */}
            <div
                className={`absolute top-0 right-0 w-24 h-24 blur-[60px] rounded-full opacity-10 transition-opacity duration-500
                    ${isActive ? 'opacity-30' : 'group-hover:opacity-20'}`}
                style={{ background: group.color }}
            />

            <div className="p-6 md:p-8 relative z-10">
                {/* Header Container */}
                <div className="flex items-start justify-between mb-5">
                    <div
                        className={`p-3 rounded-xl transition-all duration-500 group-hover:scale-110 ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}
                        style={{ color: group.color, boxShadow: `0 10px 30px ${group.color}15` }}
                    >
                        {React.cloneElement(group.icon, { size: 28 })}
                    </div>
                </div>

                <h3 className="text-text-primary font-black text-xl md:text-2xl tracking-tight mb-3 leading-tight transition-colors">
                    {group.category}
                </h3>

                <p className="text-text-secondary text-xs md:text-sm leading-relaxed mb-6 transition-colors opacity-80">
                    {group.description}
                </p>

                {/* Skills Section */}
                <div className="space-y-4">
                    <div className="h-px bg-border-divider w-full transition-colors" />
                    <div className="flex flex-wrap gap-2.5 pt-2">
                        {group.skills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                onMouseEnter={() => onSelect(skill, group.category)}
                                whileHover={{ y: -3, scale: 1.05 }}
                                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border font-bold text-xs transition-all duration-300 cursor-default group/badge
                                    ${theme === 'dark'
                                        ? 'bg-white/5 border-white/5 text-slate-200 hover:border-white/20 hover:bg-white/10'
                                        : 'bg-slate-50 border-slate-100 text-slate-700 hover:border-blue-500/20 hover:bg-slate-100'}`}
                            >
                                <span style={{ color: skill.color === '#FFFFFF' ? (theme === 'dark' ? '#FFFFFF' : '#0F172A') : skill.color }}>
                                    {React.cloneElement(skill.icon, { size: 16 })}
                                </span>
                                <span>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Corner Decorative Icon */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
                {React.cloneElement(group.icon, { size: 100, color: 'currentColor' })}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const [inspectedTech, setInspectedTech] = useState(null);
    const { theme } = useTheme();

    return (
        <section id="skills" className="py-24 lg:py-40 relative overflow-hidden">
            {/* Ambient blending glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/[0.03] blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
                {/* Header & Tech Inspector Display */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-500 font-black tracking-[6px] text-xs uppercase mb-4 block">
                            TECHNICAL COMPETENCE
                        </span>
                        <h2 className="text-text-primary font-black text-5xl md:text-7xl tracking-tighter leading-[0.9] mb-8 transition-colors">
                            Technical <br />
                            <span className="text-gradient">Versatility.</span>
                        </h2>
                        <p className="text-text-secondary max-w-lg text-lg leading-relaxed transition-colors opacity-80">
                            A curated selection of modern technologies used to build scalable architectures and pixel-perfect experiences.
                        </p>
                    </motion.div>

                    {/* DYNAMIC TECH INSPECTOR */}
                    <div className="h-[140px] md:h-[180px] flex items-center justify-center lg:justify-end">
                        <AnimatePresence mode="wait">
                            {inspectedTech ? (
                                <motion.div
                                    key={inspectedTech.name}
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                    className={`backdrop-blur-3xl border rounded-[40px] p-8 md:p-10 flex min-w-[350px] items-center gap-8 relative isolate transition-colors
                                        ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)]'}`}
                                >
                                    <div
                                        className="absolute inset-0 blur-[50px] opacity-10 rounded-full -z-10"
                                        style={{ background: inspectedTech.color }}
                                    />
                                    <div
                                        className={`w-24 h-24 rounded-3xl flex items-center justify-center border relative transition-all
                                            ${theme === 'dark' ? 'bg-black/40 border-white/10 shadow-2xl' : 'bg-slate-50 border-slate-100'}`}
                                        style={{ color: inspectedTech.color === '#FFFFFF' ? (theme === 'dark' ? '#FFFFFF' : '#0F172A') : inspectedTech.color, boxShadow: `0 20px 50px ${inspectedTech.color}22` }}
                                    >
                                        {React.cloneElement(inspectedTech.icon, { size: 52 })}
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-text-secondary opacity-50 font-black uppercase tracking-[5px] mb-1 transition-colors">
                                            {inspectedTech.category}
                                        </p>
                                        <h4 className="text-4xl font-black text-text-primary tracking-tighter leading-none mb-2 transition-colors">
                                            {inspectedTech.name}
                                        </h4>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full" style={{ background: inspectedTech.color }} />
                                            <span className="text-[10px] text-text-secondary font-bold uppercase tracking-widest transition-colors">{inspectedTech.level} Proficiency</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="text-right flex flex-col items-center lg:items-end">
                                    <div className="flex gap-1 mb-2">
                                        {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500/20" />)}
                                    </div>
                                    <p className="text-text-secondary opacity-40 font-bold text-[10px] uppercase tracking-[6px] max-w-[200px] leading-relaxed transition-colors">
                                        Hover Skills to <br /> Inspect Core Stack
                                    </p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Equal Height Rich Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillGroups.map((group, index) => (
                        <SkillCard
                            key={index}
                            group={group}
                            isActive={inspectedTech?.category === group.category}
                            onSelect={(skill, cat) => setInspectedTech({ ...skill, category: cat })}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
