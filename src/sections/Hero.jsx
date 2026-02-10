import React, { useRef, useEffect, useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'motion/react';

import TextType from '@/components/TextType';
import TiltedCard from '@/components/TiltedCard';
import PixelTransition from '@/components/PixelTransition';
import VariableProximity from '@/components/VariableProximity';
import { useTheme } from '@/lib/ThemeContext';
import GradualBlur from '@/components/GradualBlur';

import Profile1 from '@/assets/Profile1.jpeg';
import Profile2 from '@/assets/Profile2.jpeg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const sectionRef = useRef(null);
    const proximityContainerRef = useRef(null);
    const imageRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const { theme } = useTheme();

    // Check for mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Initialize Smooth Scrolling (Lenis)
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            ScrollTrigger.update(); // 🔒 CRITICAL
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    useGSAP(() => {
        // Entrance Animations
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from(".hero-badge", {
            y: 40,
            opacity: 0,
            duration: 1,
            delay: 0.5
        })
            .from(".hero-typing-container", {
                y: 30,
                opacity: 0,
                duration: 1
            }, "-=0.6")
            .from(".hero-description", {
                y: 30,
                opacity: 0,
                duration: 1
            }, "-=0.7")
            .from(".hero-buttons", {
                y: 30,
                opacity: 0,
                duration: 1
            }, "-=0.8")
            .from(".hero-stats", {
                y: 20,
                opacity: 0,
                duration: 1
            }, "-=0.8")
            .from(".hero-image-wrapper", {
                scale: 0.8,
                opacity: 0,
                duration: 1.5,
                ease: "expo.out"
            }, "-=1.2");

        // Subtle parallax on scroll
        gsap.to(".hero-text-block", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: 100,
            opacity: 0.3
        });

        gsap.to(".hero-bg-glow", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: -50,
            scale: 1.1
        });
    }, { scope: sectionRef });

    return (
        <section
            id="home"
            ref={sectionRef}
            className="min-h-screen flex items-center pt-20 lg:pt-[72px] relative overflow-hidden"
        >
            {/* Parallax Background Layer (0.2x speed) */}
            <div className="hero-bg-glow absolute inset-0 pointer-events-none z-0 opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-blue/20 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
            </div>

            <Container maxWidth="xl" className="relative z-10" sx={{ px: { xs: 4, sm: 6, md: 10 } }}>
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-10 lg:gap-12 items-start w-full py-10 lg:py-0">

                    {/* LEFT CONTENT */}
                    <div className="hero-text-block flex flex-col gap-6 lg:gap-8 lg:items-start items-center lg:text-left text-center will-change-transform">

                        {/* Badge */}
                        <div className="hero-badge flex items-center gap-3 bg-bg-secondary/80 border border-border-divider px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-text-secondary backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)] relative group overflow-hidden transition-colors">
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 shadow-[0_0_10px_#3B82F6]"></span>
                            </span>
                            <span className="relative">
                                Hi 👋, I'm <span className="text-text-primary font-black tracking-tight transition-colors">Aniket</span>
                            </span>
                        </div>

                        {/* Heading Cluster */}
                        <div className="flex flex-col gap-1 items-center lg:items-start w-full">
                            <Box
                                className="hero-typing-container"
                                sx={{
                                    height: { xs: '1.2em', sm: '1.4em' },
                                    display: 'flex',
                                    alignItems: 'center',
                                    lineHeight: 1,
                                    width: '100%',
                                    justifyContent: { xs: 'center', lg: 'flex-start' },
                                    overflow: 'visible'
                                }}
                            >
                                <Typography
                                    component="div"
                                    sx={{
                                        fontSize: 'clamp(24px, 5vw, 48px)',
                                        fontWeight: 800,
                                        color: 'var(--text-primary)',
                                        transition: 'color 0.3s ease'
                                    }}
                                >
                                    <TextType
                                        className='whitespace-nowrap'
                                        text={[
                                            'SDE',
                                            'UI/UX Designer',
                                            'MERN Expert'
                                        ]}
                                        typingSpeed={70}
                                        deletingSpeed={40}
                                        loop
                                    />
                                </Typography>
                            </Box>
                        </div>

                        <div
                            ref={proximityContainerRef}
                            className="hero-description text-base sm:text-xl text-text-secondary max-w-[600px] leading-relaxed will-change-transform transition-colors"
                        >
                            <VariableProximity
                                label="Crafting high-performance, visually stunning web experiences with modern technology and precision engineering."
                                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                containerRef={proximityContainerRef}
                                radius={100}
                                falloff="linear"
                                highlightWords={['web', 'experiences']}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="hero-buttons flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto mt-2">
                            <Button
                                href="#projects"
                                variant="contained"
                                sx={{
                                    bgcolor: '#3B82F6',
                                    color: 'white',
                                    px: { xs: 4, md: 6 },
                                    py: { xs: 1.5, md: 2.2 },
                                    borderRadius: '999px',
                                    fontWeight: 800,
                                    textTransform: 'none',
                                    fontSize: { xs: '0.9rem', md: '1.05rem' },
                                    boxShadow: '0 10px 30px -5px rgba(59, 130, 246, 0.4)',
                                    '&:hover': {
                                        bgcolor: '#60A5FA',
                                        transform: 'scale(1.1) translateY(-4px)',
                                        boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.5)'
                                    },
                                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}
                            >
                                View Projects
                            </Button>

                            <Button
                                href="#contact"
                                variant="outlined"
                                sx={{
                                    borderColor: 'var(--border-divider)',
                                    color: 'var(--text-primary)',
                                    px: { xs: 4, md: 6 },
                                    py: { xs: 1.5, md: 2.2 },
                                    borderRadius: '999px',
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                    backdropBlur: '10px',
                                    '&:hover': {
                                        borderColor: '#10b981',
                                        color: '#10b981',
                                        bgcolor: 'rgba(16, 185, 129, 0.05)',
                                        transform: 'scale(1.1) translateY(-4px)',
                                        boxShadow: '0 20px 40px -10px rgba(16, 185, 129, 0.1)'
                                    },
                                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}
                            >
                                Get in Touch
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="hero-stats flex gap-8 sm:gap-12 mt-6 p-1 bg-bg-secondary/80 rounded-2xl border border-border-divider backdrop-blur-md w-fit px-8 py-4 transition-colors">
                            <div>
                                <h4 className="text-2xl font-black text-text-primary transition-colors">1</h4>
                                <p className="text-[10px] text-text-secondary font-bold tracking-[2px] uppercase opacity-60">Year Exp.</p>
                            </div>
                            <div className="w-px h-10 bg-border-divider self-center" />
                            <div>
                                <h4 className="text-2xl font-black text-text-primary transition-colors">5+</h4>
                                <p className="text-[10px] text-text-secondary font-bold tracking-[2px] uppercase opacity-60">Projects</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="hero-image-container relative w-full flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
                        <div ref={imageRef} className="hero-image-wrapper relative will-change-transform">
                            {/* Decorative Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-blue/20 blur-[100px] rounded-full -z-10" />

                            <div className="relative group w-full max-w-[420px] mx-auto lg:mx-0">
                                <AnimatePresence mode="wait">
                                    {isMobile ? (
                                        <motion.div
                                            key="mobile-image"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden border border-border-divider shadow-2xl"
                                        >
                                            <img
                                                src={Profile1}
                                                alt="Aniket - SDE"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-xl w-fit mx-auto text-center">
                                                    Open to Opportunities
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <TiltedCard
                                            key="desktop-image"
                                            altText="Aniket - SDE"
                                            captionText="Aniket - MERN Expert"
                                            containerHeight="500px"
                                            containerWidth="100%"
                                            imageHeight="500px"
                                            imageWidth="420px"
                                            rotateAmplitude={12}
                                            scaleOnHover={1.05}
                                            showMobileWarning={false}
                                            showTooltip={true}
                                            displayOverlayContent={true}
                                            overlayContent={
                                                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold text-white shadow-xl">
                                                    Open to Opportunities
                                                </div>
                                            }
                                        >
                                            <PixelTransition
                                                firstContent={
                                                    <img
                                                        src={Profile1}
                                                        alt="Aniket - Profile 1"
                                                        className="w-full h-full object-cover"
                                                    />
                                                }
                                                secondContent={
                                                    <img
                                                        src={Profile2}
                                                        alt="Aniket - Profile 2"
                                                        className="w-full h-full object-cover"
                                                    />
                                                }
                                                gridSize={12}
                                                animationStepDuration={0.4}
                                                pixelColor="var(--bg-primary)"
                                                className="w-full h-full rounded-[15px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)]"
                                                aspectRatio="120%"
                                            />
                                        </TiltedCard>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>

            {/* Section Transition Blur */}
            <GradualBlur preset="bottom" height="8rem" strength={3} opacity={0.6} />
        </section>
    );
};

export default Hero;
