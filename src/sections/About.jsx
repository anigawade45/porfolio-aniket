import React from 'react';
import { motion } from 'motion/react';
import { User, MapPin, Briefcase, GraduationCap, Download, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';
import ResumePDF from '../assets/Aniket_Resume.pdf';

const About = () => {
    const { theme } = useTheme();

    return (
        <section id="about" className="pt-24 md:pt-40 pb-12 md:pb-20 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* LEFT COLUMN: Text Content (60%) */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-blue-500 font-black tracking-[6px] text-xs uppercase mb-4 block">
                                ABOUT ME
                            </span>
                            <h2 className="text-text-primary font-black text-5xl md:text-7xl tracking-tighter leading-[0.9] mb-8 transition-colors">
                                Building reliable <br />
                                <span className="text-gradient">web experiences.</span>
                            </h2>

                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed max-w-2xl transition-colors">
                                <p>
                                    I’m a <span className="text-text-primary font-bold border-b border-text-primary/30 pb-0.5 transition-colors">Full Stack Developer</span> with hands-on experience building scalable, production-grade web applications using the <span className="text-blue-500 dark:text-blue-400 font-bold border-b border-blue-500/30 dark:border-blue-400/30 pb-0.5 transition-colors">MERN stack</span> and <span className="text-blue-500 dark:text-blue-400 font-bold border-b border-blue-500/30 dark:border-blue-400/30 pb-0.5 transition-colors">Next.js</span>. I specialize in designing efficient RESTful APIs, implementing secure authentication systems, and optimizing performance to enhance user engagement.
                                </p>
                                <p>
                                    I focus on writing <span className="text-text-primary font-bold transition-colors">clean, maintainable code</span> and taking projects from concept to deployment. I’m passionate about solving real-world problems through precision engineering and intuitive design.
                                </p>

                                <div className="pt-4">
                                    <h4 className="text-text-primary font-bold text-sm uppercase tracking-[3px] mb-4 transition-colors">Currently working on:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Full-stack applications using React and Node.js",
                                            "Authentication systems and interactive dashboards",
                                            "Improving UI performance and motion design"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm md:text-base font-medium">
                                                <div className="p-0.5 rounded-full skeuo-card">
                                                    <CheckCircle2 className="text-blue-500 w-4 h-4 md:w-5 md:h-5 flex-shrink-0 skeuo-icon" />
                                                </div>
                                                <span className="text-text-secondary transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-8">
                                    <motion.a
                                        href={ResumePDF}
                                        download="Aniket_Gawade_Resume.pdf"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-3 px-8 md:px-10 py-3 md:py-4 skeuo-accent font-black rounded-full transition-all duration-300 w-fit text-sm md:text-base"
                                    >
                                        <Download size={20} />
                                        <span>Download Resume</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Visual Highlight Card (40%) */}
                    <div className="lg:col-span-5 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-[32px] p-8 md:p-10 relative group transition-all duration-500 skeuo-card"
                        >
                            {/* Decorative Corner Icon */}
                            <div className="absolute top-8 right-10 text-text-primary/5 group-hover:text-blue-500/20 transition-colors pointer-events-none">
                                <User size={120} />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-text-primary font-black text-3xl tracking-tight mb-8 transition-colors">Quick Facts</h3>

                                <div className="space-y-8">
                                    {[
                                        { icon: <User className="text-blue-500 dark:text-blue-400" />, label: "Name", value: "Aniket Gawade" },
                                        { icon: <Briefcase className="text-blue-500 dark:text-blue-400" />, label: "Role", value: "Full Stack Developer" },
                                        { icon: <MapPin className="text-blue-500 dark:text-blue-400" />, label: "Location", value: "Sawantwadi, MH, India 🇮🇳" },
                                        { icon: <GraduationCap className="text-blue-500 dark:text-blue-400" />, label: "Education", value: "B.Tech in CS (2023-27)" },
                                    ].map((fact, i) => (
                                        <div key={i} className="flex items-start gap-5">
                                            <div className="p-3 rounded-2xl transition-all duration-500 skeuo-inner hover:scale-105 cursor-default">
                                                {fact.icon}
                                            </div>
                                            <div>
                                                <p className="text-text-secondary text-[10px] uppercase tracking-[4px] font-black mb-1 transition-colors opacity-50">{fact.label}</p>
                                                <p className="text-text-primary font-bold text-lg leading-tight tracking-tight transition-colors">{fact.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 space-y-4">
                                    <h4 className="text-text-primary font-bold text-xs uppercase tracking-[3px] mb-2 transition-colors">Key Achievements:</h4>
                                    <div className="space-y-3">
                                        {[
                                            "Top 15 nationally at WCE Hackathon 2026",
                                            "Top 120 teams at Project Morphosis 2026",
                                            "Top 52 across MH at Codeshetra 2026"
                                        ].map((achievement, i) => (
                                            <div key={i} className="flex items-center gap-3 text-xs font-bold text-text-secondary">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                <span>{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 space-y-4">
                                    <h4 className="text-text-primary font-bold text-xs uppercase tracking-[3px] mb-2 transition-colors">Certifications:</h4>
                                    <div className="space-y-3">
                                        {[
                                            "Full Stack Development — Apna College (2024)",
                                            "Cisco Cybersecurity Internship — Cisco (2025)"
                                        ].map((cert, i) => (
                                            <div key={i} className="flex items-center gap-3 text-xs font-bold text-text-secondary">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                <span>{cert}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 p-6 rounded-2xl transition-all duration-500 skeuo-inner">
                                    <h4 className="text-text-primary font-bold text-[10px] uppercase tracking-[3px] mb-2 transition-colors">Latest Experience:</h4>
                                    <p className="text-text-primary font-bold text-sm">Web Dev Intern @ AI Pathshaala</p>
                                    <p className="text-text-secondary text-[10px] uppercase tracking-widest mt-1 opacity-60">June 2025 – August 2025</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
