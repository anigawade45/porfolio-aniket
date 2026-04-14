import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, ExternalLink, Globe, Instagram, Phone, MessageCircle } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';

const Contact = () => {
    const { theme } = useTheme();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github size={20} />,
            url: 'https://github.com/anigawade45',
            label: 'github.com/anigawade45',
            brandColor: theme === 'dark' ? '#F8FAFC' : '#0F172A'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={20} />,
            url: 'https://www.linkedin.com/in/aniket-gawade-5095b52b2/',
            label: 'linkedin.com/in/aniket-gawade',
            brandColor: '#0077B5'
        },
        {
            name: 'Instagram',
            icon: <Instagram size={20} />,
            url: 'https://www.instagram.com/ani_gawade_45/',
            label: '@ani_gawade_45',
            brandColor: '#E4405F'
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
                        Feel free to reach out via Email or WhatsApp.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch text-left">

                    {/* Left: Primary Actions (Email & WhatsApp) */}
                    <div className="space-y-6">
                        {/* Email Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-[32px] p-8 transition-all duration-500 skeuo-card group"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-2xl skeuo-inner text-blue-500 group-hover:scale-110 transition-all duration-500">
                                    <Mail size={28} className="skeuo-icon" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-text-primary font-black text-lg md:text-xl mb-1 transition-colors">Shoot an Email</h3>
                                    <p className="text-text-secondary text-xs md:text-sm font-medium mb-4 transition-colors opacity-70">Always checking my inbox.</p>
                                    <a href="mailto:anigawade05@gmail.com" className="text-text-primary font-bold text-base md:text-lg hover:text-blue-500 transition-colors block leading-none break-all">
                                        anigawade05@gmail.com
                                    </a>
                                </div>
                                <ExternalLink size={18} className="text-text-secondary opacity-30 group-hover:opacity-100 group-hover:text-blue-500 transition-all" />
                            </div>
                        </motion.div>

                        {/* WhatsApp Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="rounded-[32px] p-8 transition-all duration-500 skeuo-card group"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-2xl skeuo-inner text-[#25D366] group-hover:scale-110 transition-all duration-500">
                                    <MessageCircle size={28} className="skeuo-icon" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-text-primary font-black text-lg md:text-xl mb-1 transition-colors">WhatsApp Chat</h3>
                                    <p className="text-text-secondary text-xs md:text-sm font-medium mb-4 transition-colors opacity-70">Quickest way to reach me.</p>
                                    <a href="https://wa.me/918830837435" target="_blank" rel="noopener noreferrer" className="text-text-primary font-bold text-base md:text-lg hover:text-[#25D366] transition-colors block leading-none">
                                        +91 8830837435
                                    </a>
                                </div>
                                <ExternalLink size={18} className="text-text-secondary opacity-30 group-hover:opacity-100 group-hover:text-[#25D366] transition-all" />
                            </div>
                        </motion.div>

                        {/* Call Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="rounded-[32px] p-8 transition-all duration-500 skeuo-card group"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-2xl skeuo-inner text-blue-500 group-hover:scale-110 transition-all duration-500">
                                    <Phone size={28} className="skeuo-icon" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-text-primary font-black text-lg md:text-xl mb-1 transition-colors">Direct Call</h3>
                                    <p className="text-text-secondary text-xs md:text-sm font-medium mb-4 transition-colors opacity-70">Available for quick calls.</p>
                                    <a href="tel:8830837435" className="text-text-primary font-bold text-base md:text-lg hover:text-blue-500 transition-colors block leading-none">
                                        +91 8830837435
                                    </a>
                                </div>
                                <ExternalLink size={18} className="text-text-secondary opacity-30 group-hover:opacity-100 group-hover:text-blue-500 transition-all" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Socials & Basic Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="rounded-[32px] p-8 md:p-10 transition-all duration-500 skeuo-card flex flex-col justify-between h-full"
                    >
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-text-secondary font-black text-[10px] uppercase tracking-[4px] mb-6 transition-colors opacity-50">Social Presence</h4>
                                <div className="grid grid-cols-1 gap-4">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            className="flex items-center justify-between p-4 rounded-2xl skeuo-btn transition-all duration-500 group hover:scale-[1.02] cursor-pointer"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className="p-2.5 rounded-xl transition-all duration-500 skeuo-inner skeuo-icon"
                                                    style={{ color: social.brandColor }}
                                                >
                                                    {social.icon}
                                                </div>
                                                <div>
                                                    <p className="text-text-primary font-bold text-sm leading-none mb-1 transition-colors">{social.name}</p>
                                                    <p className="text-text-secondary text-[10px] font-black transition-colors opacity-50 uppercase tracking-wider">{social.label}</p>
                                                </div>
                                            </div>
                                            <ExternalLink size={14} className="text-text-secondary opacity-20 group-hover:opacity-100 transition-all" style={{ color: social.brandColor }} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-border-divider grid grid-cols-2 gap-4 transition-colors">
                                <div>
                                    <div className="flex items-center gap-3 text-text-secondary font-black text-[10px] uppercase tracking-[4px] transition-colors opacity-50">
                                        <Globe size={14} className="text-blue-500" />
                                        Location
                                    </div>
                                    <p className="text-text-primary font-bold text-lg mt-2 transition-colors">Sawantwadi, India 🇮🇳</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 text-text-secondary font-black text-[10px] uppercase tracking-[4px] transition-colors opacity-50">
                                        <Phone size={14} className="text-blue-500" />
                                        Call Status
                                    </div>
                                    <p className="text-text-primary font-bold text-lg mt-2 transition-colors">Available Now</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
