import React from 'react';
import { motion } from 'motion/react';
import { User, MapPin, Briefcase, GraduationCap, Download, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';

const About = () => {
    const { theme } = useTheme();

    return (
        <section id="about" className="py-24 md:py-40 relative overflow-hidden">
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
                                    I’m a <span className="text-text-primary font-bold border-b border-text-primary/30 pb-0.5 transition-colors">full-stack developer</span> specializing in <span className="text-blue-500 dark:text-blue-400 font-bold border-b border-blue-500/30 dark:border-blue-400/30 pb-0.5 transition-colors">React</span> and the <span className="text-blue-500 dark:text-blue-400 font-bold border-b border-blue-500/30 dark:border-blue-400/30 pb-0.5 transition-colors">MERN stack</span>. I enjoy building scalable web applications with clean interfaces and efficient backend systems.
                                </p>
                                <p>
                                    I focus on writing <span className="text-text-primary font-bold transition-colors">maintainable code</span>, designing intuitive user flows, and building features that solve real problems. I value performance, accessibility, and clean architecture as the foundation of any professional product.
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
                                                <div className="p-0.5 rounded-full bg-blue-500/10">
                                                    <CheckCircle2 className="text-blue-500 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                                                </div>
                                                <span className="text-text-secondary transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-8">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-3 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/20"
                                    >
                                        <Download size={20} />
                                        <span>Download Resume</span>
                                    </motion.button>
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
                            className={`rounded-[32px] p-8 md:p-10 relative group transition-all duration-500 border ${theme === 'dark' ? 'bg-surface-card border-border-divider hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]' : 'bg-white border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:border-blue-500/30'}`}
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
                                        { icon: <Briefcase className="text-blue-500 dark:text-blue-400" />, label: "Role", value: "React & MERN Developer" },
                                        { icon: <MapPin className="text-blue-500 dark:text-blue-400" />, label: "Location", value: "India 🇮🇳" },
                                        { icon: <GraduationCap className="text-blue-500 dark:text-blue-400" />, label: "Experience", value: "Fresher / Entry-Level" },
                                    ].map((fact, i) => (
                                        <div key={i} className="flex items-start gap-5">
                                            <div className={`p-3 rounded-2xl transition-all duration-500 border ${theme === 'dark' ? 'bg-bg-secondary border-border-divider group-hover:bg-blue-500/10' : 'bg-slate-50 border-slate-100 group-hover:bg-blue-50 shadow-sm'}`}>
                                                {fact.icon}
                                            </div>
                                            <div>
                                                <p className="text-text-secondary text-[10px] uppercase tracking-[4px] font-black mb-1 transition-colors opacity-50">{fact.label}</p>
                                                <p className="text-text-primary font-bold text-lg leading-tight tracking-tight transition-colors">{fact.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className={`mt-12 p-6 rounded-2xl border transition-all duration-500 ${theme === 'dark' ? 'bg-bg-secondary/50 border-border-divider group-hover:border-blue-500/10' : 'bg-slate-50/50 border-slate-100 group-hover:bg-blue-50/50'}`}>
                                    <p className="text-text-secondary text-xs italic leading-relaxed transition-colors font-medium">
                                        "I believe in building software that isn't just functional, but reliable and scalable from the very first line of code."
                                    </p>
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
