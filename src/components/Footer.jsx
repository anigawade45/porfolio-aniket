import React from 'react';
import { Github, Linkedin, Instagram, MessageCircle, Mail } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';

const Footer = () => {
    const year = new Date().getFullYear();
    const { theme } = useTheme();

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/anigawade45',
            icon: <Github size={20} />,
            color: theme === 'dark' ? '#F8FAFC' : '#0F172A'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/aniket-gawade-5095b52b2/',
            icon: <Linkedin size={20} />,
            color: '#0077B5'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/ani_gawade_45/',
            icon: <Instagram size={20} />,
            color: '#E4405F'
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/918830837435',
            icon: <MessageCircle size={20} />,
            color: '#25D366'
        },
        {
            name: 'Email',
            url: 'mailto:anigawade05@gmail.com',
            icon: <Mail size={20} />,
            color: theme === 'dark' ? '#3B82F6' : '#2563EB'
        }
    ];

    return (
        <footer className="w-full border-t border-border-divider py-10 relative bg-bg-primary transition-colors duration-300">
            <div className="container mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Left: Copyright */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-text-secondary text-[13px] font-medium tracking-tight order-2 md:order-1">
                    <p>© {year} Aniket Gawade</p>
                    <span className="hidden md:block w-1 h-1 rounded-full bg-border-divider" />
                    <p className="opacity-70 uppercase tracking-widest text-[10px] font-bold">Software Development Engineer</p>
                </div>

                {/* Right: Social Icons Only */}
                <div className="flex items-center justify-center gap-4 order-1 md:order-2">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 rounded-2xl bg-bg-secondary border border-border-divider hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                            title={link.name}
                        >
                            <span
                                className="transition-all duration-300 group-hover:scale-110 block"
                                style={{ color: link.color }}
                            >
                                {link.icon}
                            </span>
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;
