import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border-divider py-8 md:py-6 relative bg-bg-primary transition-colors duration-300">
            <div className="container mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center">

                {/* Left/Center Content */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-text-secondary text-[13px] font-medium tracking-tight">
                    <p>© {year} Aniket Gawade</p>
                    <span className="hidden md:block w-1 h-1 rounded-full bg-border-divider" />
                    <p>Built with React</p>
                </div>

                {/* Right Links Content */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                    {[
                        { name: 'GitHub', url: 'https://github.com' },
                        { name: 'LinkedIn', url: 'https://linkedin.com' },
                        { name: 'Email', url: 'mailto:aniketga878@gmail.com' }
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary text-[13px] font-bold uppercase tracking-wider hover:text-blue-500 transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;
