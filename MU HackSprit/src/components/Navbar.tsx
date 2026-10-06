import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaCode, FaExternalLinkAlt } from "react-icons/fa";

const NAVBAR_HEIGHT_MOBILE = 90;
const NAVBAR_HEIGHT_DESKTOP = 100;

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);

            const sections = ["hero", "about", "themes", "timeline", "prizes", "guidelines", "organizers", "faq"];
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 140) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#hero", icon: <FaHome className="text-sm" /> },
        { name: "About", href: "#about" },
        { name: "Themes", href: "#themes" },
        { name: "8-Hr Timeline", href: "#timeline" },
        { name: "Prizes", href: "#prizes" },
        { name: "Guidelines", href: "#guidelines" },
        { name: "Faculty & Team", href: "#organizers" },
        { name: "FAQ", href: "#faq" },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            const offset = window.innerWidth < 768 ? NAVBAR_HEIGHT_MOBILE : NAVBAR_HEIGHT_DESKTOP;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    isScrolled 
                        ? "bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-950/30 py-2.5" 
                        : "bg-slate-950/70 backdrop-blur-md border-b border-slate-800/60 py-3.5"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Brand Logo & University Tag */}
                    <a
                        href="#hero"
                        onClick={(e) => scrollToSection(e, "#hero")}
                        className="flex items-center gap-3 group cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                                <FaCode className="text-cyan-400 text-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col text-left">
                            <div className="flex items-center gap-2">
                                <span className="font-exo font-black text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 tracking-wider">
                                    MU HACKSPHERE
                                </span>
                                <span className="text-[10px] font-bold px-2 py-0.5 bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 rounded-full font-mono uppercase tracking-wider">
                                    2026
                                </span>
                            </div>
                            <span className="text-[10px] font-montserrat font-medium text-gray-400 -mt-0.5 tracking-wide">
                                Mewar University • Dept. of CSE
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={`flex items-center gap-1.5 font-montserrat text-xs xl:text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                                        isActive
                                            ? "text-cyan-400 bg-cyan-500/10 border border-cyan-400/30 shadow-sm shadow-cyan-500/10"
                                            : "text-gray-300 hover:text-cyan-300 hover:bg-slate-800/60"
                                    }`}
                                >
                                    {link.icon && link.icon}
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>

                    {/* Action Buttons: Problem Statements & Register */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="https://mu-hacksphere.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800/80 hover:bg-slate-700/80 text-cyan-300 border border-cyan-500/30 rounded-lg text-xs font-montserrat font-bold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                            <span>Problems</span>
                            <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                        <Link
                            to="/register"
                            className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-montserrat font-extrabold text-xs xl:text-sm rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                        >
                            Register Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <Link
                            to="/register"
                            className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-montserrat font-bold text-xs rounded-md shadow-sm"
                        >
                            Register
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-cyan-400 hover:text-cyan-300 hover:bg-slate-800/60 rounded-lg transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Scrollable Quick Nav */}
                <div className="lg:hidden flex items-center gap-2 px-4 py-2 mt-1 overflow-x-auto no-scrollbar border-t border-slate-800/60 bg-slate-950/60">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-montserrat font-bold transition-all ${
                                    isActive
                                        ? "bg-cyan-500 text-slate-950 font-extrabold shadow-sm shadow-cyan-500/30"
                                        : "bg-slate-800/70 text-gray-300 hover:bg-slate-700"
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                    <a
                        href="https://mu-hacksphere.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-montserrat font-bold bg-purple-900/60 text-purple-200 border border-purple-500/30 flex items-center gap-1"
                    >
                        <span>Problems</span>
                        <FaExternalLinkAlt className="text-[8px]" />
                    </a>
                </div>
            </motion.nav>

            {/* Mobile Fullscreen Drawer Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-md z-[60]"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="lg:hidden fixed top-0 right-0 h-[100dvh] w-[80%] max-w-[320px] bg-slate-950 border-l border-cyan-500/20 shadow-2xl z-[70] flex flex-col justify-between p-6 overflow-y-auto"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 p-0.5">
                                            <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                                                <FaCode className="text-cyan-400 text-sm" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-exo font-bold text-sm text-cyan-400">MU HACKSPHERE</h4>
                                            <p className="text-[10px] text-gray-400 font-montserrat">Mewar University</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-400 hover:text-cyan-400 p-1"
                                    >
                                        <FaTimes className="text-xl" />
                                    </button>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    {navLinks.map((link) => {
                                        const isActive = activeSection === link.href.replace("#", "");
                                        return (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                onClick={(e) => scrollToSection(e, link.href)}
                                                className={`font-montserrat text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-3 ${
                                                    isActive
                                                        ? "text-cyan-400 bg-cyan-500/10 border-l-4 border-cyan-400 font-bold"
                                                        : "text-gray-300 hover:text-cyan-400 hover:bg-slate-900"
                                                }`}
                                            >
                                                {link.icon && link.icon}
                                                {link.name}
                                            </a>
                                        );
                                    })}
                                    <a
                                        href="https://mu-hacksphere.vercel.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-montserrat text-sm font-semibold px-4 py-2.5 rounded-lg text-purple-300 hover:bg-purple-950/40 flex items-center justify-between border border-purple-500/20"
                                    >
                                        <span className="flex items-center gap-2">
                                            <span>⚡</span> Problem Statements
                                        </span>
                                        <FaExternalLinkAlt className="text-xs" />
                                    </a>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-800 space-y-3">
                                <Link
                                    to="/register"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-montserrat font-black rounded-lg shadow-lg shadow-cyan-500/20 text-sm tracking-wide"
                                >
                                    Register Now
                                </Link>
                                <p className="text-center text-[10px] text-gray-400 font-montserrat">
                                    Organized by Dept. of CSE, Mewar University
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
