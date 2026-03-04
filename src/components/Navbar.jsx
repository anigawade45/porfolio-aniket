import React, { useState, useEffect } from 'react';
import BubbleMenu from './BubbleMenu';
import { useTheme } from '../lib/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import ResumePDF from '../assets/Aniket_Resume.pdf';

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
            <nav className={`fixed left-1/2 -translate-x-1/2 w-full max-w-[1400px] z-[1000] transition-all duration-500 ease-in-out hidden md:block rounded-full ${scrolled ? 'top-4 skeuo-card bg-opacity-90 backdrop-blur-xl h-16 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)]' : 'top-0 bg-transparent h-[72px]'
                }`}>

                <div className="w-full h-full px-6 flex justify-between items-center">
                    <div className="logo cursor-pointer hover:scale-105 transition-transform duration-300">
                        <Logo />
                    </div>

                    <div className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[12px] font-bold text-text-secondary hover:text-text-primary transition-all duration-300 uppercase tracking-widest px-4 py-2 rounded-full skeuo-btn hover:scale-105 active:scale-95"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full skeuo-btn text-text-primary hover:scale-105 transition-all active:scale-95 group flex items-center justify-center"
                        >
                            {theme === 'dark' ? <Sun size={18} className="group-hover:rotate-12 transition-transform skeuo-icon" /> : <Moon size={18} className="group-hover:-rotate-12 transition-transform skeuo-icon" />}
                        </button>

                        <a
                            href={ResumePDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="skeuo-accent px-8 py-3 rounded-full font-bold text-[13px] transition-all duration-300 hover:scale-105 active:scale-95"
                        >
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
                        className="p-3 rounded-full skeuo-btn text-text-primary shadow-xl backdrop-blur-md active:scale-90 transition-transform"
                    >
                        {theme === 'dark' ? <Sun size={20} className="skeuo-icon" /> : <Moon size={20} className="skeuo-icon" />}
                    </button>
                </div>
                <BubbleMenu
                    logo={<Logo />}
                    items={bubbleMenuItems}
                    menuAriaLabel="Toggle navigation"
                    menuBg={theme === 'dark' ? "#1f2128" : "#e6e9ee"}
                    menuContentColor={theme === 'dark' ? "#F8FAFC" : "#1f2937"}
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
