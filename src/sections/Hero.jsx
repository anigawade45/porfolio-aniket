import React, { useRef, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

import TextType from '@/components/TextType';
import TiltedCard from '@/components/TiltedCard';
import PixelTransition from '@/components/PixelTransition';
import VariableProximity from '@/components/VariableProximity';
import { useTheme } from '@/lib/ThemeContext';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const sectionRef = useRef(null);
    const proximityContainerRef = useRef(null);
    const imageRef = useRef(null);
    const { theme } = useTheme();

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

        // 🔒 Tell ScrollTrigger to use Lenis
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                return arguments.length
                    ? lenis.scrollTo(value, { immediate: true })
                    : lenis.scroll;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
        });

        ScrollTrigger.refresh();

        return () => {
            lenis.destroy();
            ScrollTrigger.killAll();
        };
    }, []);


    // GSAP Animations
    useGSAP(() => {
        // 1. Entrance Animation (On Load)
        const entranceTl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 0.8 }
        });

        entranceTl
            .from(".hero-badge", { opacity: 0, y: 30 })
            .from(".hero-title-main", { opacity: 0, y: 30 }, "-=0.6")
            .from(".hero-typing-container", { opacity: 0, y: 30 }, "-=0.6")
            .from(".hero-description", { opacity: 0, y: 30 }, "-=0.6")
            .from(".hero-buttons", { opacity: 0, y: 30 }, "-=0.6")
            .from(".hero-stats", { opacity: 0, y: 30 }, "-=0.6");

        gsap.from(".hero-image-container", {
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            delay: 0.3,
            ease: "power3.out"
        });

        // 2. Scroll-Based Parallax & Hanging Effect
        // Background Parallax (0.2x speed)
        gsap.to(".hero-bg-glow", {
            y: 100,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Text Parallax (0.4x speed)
        gsap.to(".hero-text-block", {
            y: -80,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Image Parallax (0.7x speed) + Hanging Effect
        gsap.to(".hero-image-wrapper", {
            y: -140,
            rotate: 2, // Hanging tilt
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
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
                                            'FullStack Developer',
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
                                    px: 5,
                                    py: 2,
                                    borderRadius: '12px',
                                    fontWeight: 800,
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    boxShadow: '0 10px 30px -5px rgba(59, 130, 246, 0.4)',
                                    '&:hover': {
                                        bgcolor: '#60A5FA',
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.5)'
                                    },
                                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
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
                                    px: 5,
                                    py: 2,
                                    borderRadius: '12px',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    backdropFilter: 'blur(10px)',
                                    '&:hover': {
                                        borderColor: '#3B82F6',
                                        bgcolor: 'rgba(59, 130, 246, 0.05)',
                                        transform: 'translateY(-4px)'
                                    },
                                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}
                            >
                                Get in Touch
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="hero-stats flex gap-8 sm:gap-12 mt-6 p-1 bg-bg-secondary/80 rounded-2xl border border-border-divider backdrop-blur-md w-fit px-8 py-4 transition-colors">
                            <div>
                                <h4 className="text-2xl font-black text-text-primary transition-colors">2+</h4>
                                <p className="text-[10px] text-text-secondary font-bold tracking-[2px] uppercase opacity-60">Years Exp.</p>
                            </div>
                            <div className="w-px h-10 bg-border-divider self-center" />
                            <div>
                                <h4 className="text-2xl font-black text-text-primary transition-colors">20+</h4>
                                <p className="text-[10px] text-text-secondary font-bold tracking-[2px] uppercase opacity-60">Projects</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="hero-image-container relative w-full flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
                        <div ref={imageRef} className="hero-image-wrapper relative will-change-transform">
                            {/* Decorative Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-blue/20 blur-[100px] rounded-full -z-10" />

                            <TiltedCard
                                altText="Aniket - FullStack Developer"
                                captionText="Aniket - MERN Expert"
                                containerHeight={window.innerWidth < 768 ? "350px" : "500px"}
                                containerWidth="100%"
                                imageHeight={window.innerWidth < 768 ? "350px" : "500px"}
                                imageWidth={window.innerWidth < 768 ? "100%" : "420px"}
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
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                                            alt="Professional Portrait 1"
                                            className="w-full h-full object-cover"
                                        />
                                    }
                                    secondContent={
                                        <img
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
                                            alt="Professional Portrait 2"
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
                        </div>
                    </div>

                </div>
            </Container>

        </section>
    );
};

export default Hero;
