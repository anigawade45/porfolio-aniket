import React, { useState, useEffect } from 'react';
import BubbleMenu from './BubbleMenu';
import { useTheme } from '../lib/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', color: '#3b82f6' },
        { name: 'About', href: '#about', color: '#10b981' },
        { name: 'Skills', href: '#skills', color: '#8b5cf6' },
        { name: 'Projects', href: '#projects', color: '#f59e0b' },
        { name: 'Contact', href: '#contact', color: '#ef4444' },
    ];

    const bubbleMenuItems = [
        {
            label: 'home',
            href: '#home',
            ariaLabel: 'Home',
            rotation: -8,
            hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
        },
        {
            label: 'about',
            href: '#about',
            ariaLabel: 'About',
            rotation: 8,
            hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
        },
        {
            label: 'skills',
            href: '#skills',
            ariaLabel: 'Skills',
            rotation: -8,
            hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
        },
        {
            label: 'projects',
            href: '#projects',
            ariaLabel: 'Projects',
            rotation: 8,
            hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
        },
        {
            label: 'contact',
            href: '#contact',
            ariaLabel: 'Contact',
            rotation: 8,
            hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
        },
        {
            label: 'resume',
            href: '#',
            ariaLabel: 'Resume',
            rotation: -8,
            hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
        }
    ];

    const Logo = () => (
        <a href="#home" className="text-2xl font-extrabold text-text-primary tracking-tighter flex items-baseline transition-colors">
            Aniket<span className="text-blue-500 text-3xl leading-none ml-0.5">.</span>
        </a>
    );

    return (
        <>
            {/* Desktop Navbar */}
            <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out hidden md:block ${scrolled ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border-divider h-16' : 'bg-transparent h-[72px]'
                }`}>
                <div className="max-w-[1400px] w-full mx-auto px-4 flex justify-between items-center h-full">
                    <div className="logo">
                        <Logo />
                    </div>

                    <div className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[13px] font-semibold text-text-secondary hover:text-text-primary transition-all duration-300 relative uppercase tracking-wider group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl bg-bg-secondary border border-border-divider text-text-primary hover:border-blue-500/50 transition-all active:scale-95 group"
                        >
                            {theme === 'dark' ? <Sun size={18} className="group-hover:rotate-12 transition-transform" /> : <Moon size={18} className="group-hover:-rotate-12 transition-transform" />}
                        </button>

                        <a href="#resume" className="bg-blue-500 text-white px-6 py-2 rounded-xl font-bold text-[13px] transition-all duration-300 hover:scale-105 hover:bg-blue-400 shadow-[0_4px_12px_rgba(59,130,246,0.3)] hover:shadow-[0_8px_16px_rgba(59,130,246,0.4)]">
                            Resume
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar using BubbleMenu */}
            <div className="md:hidden">
                <div className="fixed top-6 left-6 z-[1100]">
                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-full bg-bg-secondary border border-border-divider text-text-primary shadow-xl backdrop-blur-md active:scale-90 transition-transform"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
                <BubbleMenu
                    logo={<Logo />}
                    items={bubbleMenuItems}
                    menuAriaLabel="Toggle navigation"
                    menuBg={theme === 'dark' ? "#0F172A" : "#FFFFFF"}
                    menuContentColor={theme === 'dark' ? "#F8FAFC" : "#0F172A"}
                    useFixedPosition={false}
                    animationEase="back.out(1.5)"
                    animationDuration={0.5}
                    staggerDelay={0.12}
                />
            </div>
        </>
    );
};

export default Navbar;
