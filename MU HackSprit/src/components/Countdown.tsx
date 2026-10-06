import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date("2026-12-15T09:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Helper component for countdown items
    const CountdownItem = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center mx-4 my-4 md:my-0">
            <div className="relative bg-dark-bg/50 border border-neon-green/30 rounded-lg p-6 min-w-[100px] md:min-w-[120px] backdrop-blur-md shadow-[0_0_15px_rgba(0,255,136,0.1)]">
                <span className="text-4xl md:text-6xl font-orbitron font-bold text-white block text-center tabular-nums text-glow">
                    {String(value).padStart(2, "0")}
                </span>
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-green"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-green"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-green"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-green"></div>
            </div>
            <span className="mt-4 text-cyber-blue font-exo uppercase tracking-widest text-xs md:text-sm">
                {label}
            </span>
        </div>
    );

    return (
        <section className="py-20 bg-dark-bg text-center relative overflow-hidden">
            {/* Background animated lines */}
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-50" />
            <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-12"
                >
                    LAUNCH INITIATING IN...
                </motion.h2>

                <div className="flex flex-wrap justify-center items-center">
                    <CountdownItem value={timeLeft.days} label="Days" />
                    <CountdownItem value={timeLeft.hours} label="Hours" />
                    <CountdownItem value={timeLeft.minutes} label="Minutes" />
                    <CountdownItem value={timeLeft.seconds} label="Seconds" />
                </div>

                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-12 text-neon-green font-exo tracking-[0.2em] text-sm"
                >
                    SYSTEM STATUS: SYSTEMS NOMINAL
                </motion.div>
            </div>
        </section>
    );
};

export default Countdown;
