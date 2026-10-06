import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt, FaBolt, FaRocket, FaClock, FaExternalLinkAlt } from "react-icons/fa";

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Countdown to October 15, 2026 23:59:59 IST (Registration Deadline)
    const targetDate = new Date("2026-10-15T23:59:59+05:30").getTime();

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const diff = targetDate - now;

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((diff % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const pad = (n: number) => String(n).padStart(2, "0");

    return (
        <section ref={targetRef} id="hero" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 pt-36 md:pt-40 lg:pt-44 pb-20 md:pb-28">

            {/* Background Glow Orbs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="relative z-10 text-center w-full max-w-5xl mx-auto flex flex-col items-center justify-center h-full">

                {/* Edition & Department Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 md:mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-6 md:py-2 bg-slate-900/90 border border-cyan-500/40 rounded-full text-cyan-300 font-mono text-xs md:text-sm tracking-wider shadow-lg shadow-cyan-500/10 backdrop-blur-md">
                        <FaBolt className="text-yellow-400 animate-pulse text-sm" />
                        <span className="font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300">
                            8-Hour Sprint Edition
                        </span>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-300 hidden sm:inline">Dept. of CSE, Mewar University</span>
                    </div>
                </motion.div>

                {/* Main Title with Animated Lettering */}
                <div className="mb-3 md:mb-4">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-exo font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">
                        {"MU HACKSPHERE".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 35 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.04 * i, duration: 0.4, ease: "easeOut" }}
                                style={{ display: "inline-block" }}
                                className={char === " " ? "w-3 sm:w-6" : ""}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="w-full flex flex-col items-center"
                >
                    {/* Taglines */}
                    <p className="text-lg sm:text-2xl md:text-3xl font-montserrat font-bold text-gray-200 mt-1 mb-2 tracking-wide px-2">
                        Mewar University • <span className="text-cyan-400 text-glow-cyan">Curated 8-Hour Sprint</span> Problem Statements
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-montserrat text-gray-400 max-w-2xl mb-6">
                        An intensive 8-hour offline national hackathon designed to test speed, real-world engineering, and high-impact software execution.
                    </p>

                    {/* Registration Deadline Banner */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 md:px-6 md:py-2 bg-gradient-to-r from-red-950/60 to-purple-950/60 border border-red-500/40 rounded-full text-red-300 font-montserrat font-bold text-xs md:text-sm shadow-lg mb-6 backdrop-blur-md"
                    >
                        <FaClock className="text-red-400 animate-spin" style={{ animationDuration: "6s" }} />
                        <span>Registration Deadline: <strong className="text-white">15th October 2026</strong></span>
                    </motion.div>

                    {/* Event Details Boxes (Date & Venue) */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-7 md:mb-9">
                        {/* Event Date Box */}
                        <a
                            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=MU+HackSphere+2026&dates=20261017T033000Z/20261017T123000Z&details=MU+HackSphere+2026+-+Curated+8-Hour+Sprint+National+Hackathon+at+Mewar+University&location=Mewar+University,+Gangrar,+Chittorgarh,+Rajasthan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-5 py-3 bg-slate-900/80 border border-cyan-500/30 rounded-2xl hover:border-cyan-400 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group backdrop-blur-md text-left"
                        >
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg group-hover:scale-110 transition-transform">
                                <FaCalendarAlt />
                            </div>
                            <div>
                                <span className="block text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">Sprint Date</span>
                                <span className="font-exo font-extrabold text-cyan-300 text-xs sm:text-sm md:text-base">17th October 2026</span>
                                <span className="block text-[10px] text-gray-400 font-mono">09:00 AM – 05:00 PM IST (8 Hours)</span>
                            </div>
                        </a>

                        {/* Venue Box */}
                        <a
                            href="https://maps.google.com/?q=Mewar+University+Gangrar+Chittorgarh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-5 py-3 bg-slate-900/80 border border-purple-500/30 rounded-2xl hover:border-purple-400 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-purple-500/10 transition-all group backdrop-blur-md text-left"
                        >
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-lg group-hover:scale-110 transition-transform">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <span className="block text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">Venue</span>
                                <span className="font-exo font-extrabold text-purple-300 text-xs sm:text-sm md:text-base">Mewar University Campus</span>
                                <span className="block text-[10px] text-gray-400 font-mono">Gangrar, Chittorgarh, Rajasthan</span>
                            </div>
                        </a>
                    </div>

                    {/* Countdown Timer to Oct 12, 2026 */}
                    <div className="mb-7 md:mb-9">
                        <p className="text-[11px] md:text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold mb-3">
                            Time Left to Register
                        </p>
                        <div className="flex justify-center gap-2 sm:gap-4 md:gap-6">
                            {[
                                { value: timeLeft.days, label: "Days" },
                                { value: timeLeft.hours, label: "Hours" },
                                { value: timeLeft.minutes, label: "Min" },
                                { value: timeLeft.seconds, label: "Sec" },
                            ].map((unit, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 bg-slate-900/90 border border-cyan-500/40 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg shadow-cyan-950/50 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />
                                        <span className="text-xl sm:text-3xl md:text-4xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-300 tabular-nums">
                                            {pad(unit.value)}
                                        </span>
                                    </div>
                                    <span className="text-[10px] sm:text-xs font-montserrat font-bold text-gray-400 mt-2 uppercase tracking-widest">
                                        {unit.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="flex flex-wrap gap-3 md:gap-4 justify-center items-center">
                        <Link
                            to="/register"
                            className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-9 sm:py-4 bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 text-slate-950 rounded-full font-montserrat font-black text-sm sm:text-base md:text-lg shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                        >
                            <FaRocket />
                            <span>Register Now</span>
                        </Link>

                        <a
                            href="https://mu-hacksphere.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-slate-900/90 border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-purple-950/60 hover:border-purple-400 rounded-full font-montserrat font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                        >
                            <span>Problem Statements</span>
                            <FaExternalLinkAlt className="text-xs" />
                        </a>

                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById("about");
                                if (el) {
                                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                                    window.scrollTo({ top, behavior: "smooth" });
                                }
                            }}
                            className="px-5 py-3 text-gray-400 hover:text-cyan-300 rounded-full font-montserrat font-semibold text-xs sm:text-sm transition-colors"
                        >
                            Explore Details ↓
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
                style={{ opacity }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-5 h-9 border-2 border-cyan-500/40 rounded-full flex justify-center p-1 bg-slate-950/50">
                    <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
