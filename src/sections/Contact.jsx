import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, ExternalLink, Globe } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';

const Contact = () => {
    const { theme } = useTheme();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github size={20} />,
            url: 'https://github.com',
            label: 'github.com/yourprofile'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={20} />,
            url: 'https://linkedin.com',
            label: 'linkedin.com/in/yourprofile'
        }
    ];

    return (
        <section id="contact" className="py-24 md:py-40 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-[1400px] px-6 md:px-12 relative z-10 text-center">

                {/* Header Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-blue-500 font-black tracking-[6px] text-xs uppercase mb-4 block">
                        CONTACT
                    </span>
                    <h2 className="text-text-primary font-black text-5xl md:text-7xl tracking-tighter leading-[0.9] mb-8 transition-colors">
                        Let’s build something <br />
                        <span className="text-gradient">together.</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed transition-colors opacity-80">
                        I’m open to full-time roles, internships, and freelance opportunities.
                        If you have a project in mind or just want to connect, feel free to reach out.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* Primary Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`rounded-[32px] p-8 md:p-12 transition-all duration-500 border text-left h-full flex flex-col justify-center
                            ${theme === 'dark'
                                ? 'bg-surface-card border-border-divider hover:border-blue-500/20 hover:shadow-[0_0_50px_rgba(59,130,246,0.05)]'
                                : 'bg-white border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:border-blue-500/30'}`}
                    >
                        <div className="mb-10">
                            <div className="p-4 rounded-2xl bg-blue-500/10 w-fit text-blue-500 mb-6">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-text-primary font-black text-2xl mb-2 transition-colors">Email me at</h3>
                            <p className="text-text-secondary font-medium mb-6 transition-colors opacity-70 italic text-sm">Always checking my inbox for new opportunities.</p>
                            <a
                                href="mailto:aniketga878@gmail.com"
                                className="text-text-primary font-black text-xl md:text-2xl hover:text-blue-500 transition-colors tracking-tight"
                            >
                                aniketga878@gmail.com
                            </a>
                        </div>

                        <motion.a
                            href="mailto:aniketga878@gmail.com"
                            whileHover={{ y: -4, backgroundColor: '#2563EB' }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-blue-600 text-white font-extrabold py-4 px-8 rounded-2xl text-center flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-600/20"
                        >
                            <Send size={20} />
                            Send Email
                        </motion.a>
                    </motion.div>

                    {/* Secondary Information & Socials Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={`rounded-[32px] p-8 md:p-12 transition-all duration-500 border flex flex-col justify-between h-full
                            ${theme === 'dark'
                                ? 'bg-surface-card border-border-divider hover:border-blue-500/20'
                                : 'bg-white border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:border-blue-500/30'}`}
                    >
                        <div className="space-y-8">
                            <div className="text-left">
                                <h4 className="text-text-secondary font-black text-[10px] uppercase tracking-[4px] mb-6 transition-colors opacity-50">Connect</h4>
                                <div className="space-y-4">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 8 }}
                                            className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-500 group
                                                ${theme === 'dark'
                                                    ? 'bg-bg-secondary border-border-divider hover:border-blue-500/20'
                                                    : 'bg-slate-50 border-slate-100 hover:bg-blue-50 hover:border-blue-200 shadow-sm'}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="text-text-secondary group-hover:text-blue-500 transition-colors">
                                                    {social.icon}
                                                </div>
                                                <div className="text-left">
                                                    <p className="text-text-primary font-bold text-sm leading-none mb-1 transition-colors">{social.name}</p>
                                                    <p className="text-text-secondary text-[10px] font-black transition-colors opacity-50 uppercase tracking-wider">{social.label}</p>
                                                </div>
                                            </div>
                                            <ExternalLink size={14} className="text-text-secondary group-hover:text-blue-500 transition-colors opacity-40 group-hover:opacity-100" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-border-divider text-left transition-colors">
                                <div className="flex items-center gap-3 text-text-secondary font-black text-[10px] uppercase tracking-[4px] transition-colors opacity-50">
                                    <Globe size={14} className="text-blue-500" />
                                    Location
                                </div>
                                <p className="text-text-primary font-bold text-lg mt-2 transition-colors">India 🇮🇳</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
