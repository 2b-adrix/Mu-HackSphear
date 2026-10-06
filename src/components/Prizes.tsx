import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaTrophy, FaCertificate, FaMedal, FaFemale, FaLightbulb, FaBriefcase } from "react-icons/fa";

const Prizes = () => {
    const { ref, isInView } = useSectionInView();

    const podium = [
        {
            place: "1st Place",
            title: "Grand Champion",
            badge: "Winner",
            amount: "Revealing Soon",
            desc: "Cash Prize + Winner Trophy + Certificate of Excellence + Exclusive Goodies",
            border: "border-yellow-500/50",
            bgGlow: "from-yellow-500/20 via-amber-500/10 to-transparent",
            icon: <FaTrophy className="text-yellow-400 text-3xl sm:text-4xl" />,
            highlight: true,
        },
        {
            place: "2nd Place",
            title: "First Runner Up",
            badge: "Runner Up",
            amount: "Revealing Soon",
            desc: "Cash Prize + Runner Up Trophy + Certificate of Excellence + Goodies",
            border: "border-cyan-400/50",
            bgGlow: "from-cyan-500/20 via-blue-500/10 to-transparent",
            icon: <FaMedal className="text-cyan-300 text-3xl sm:text-4xl" />,
            highlight: false,
        },
        {
            place: "3rd Place",
            title: "Second Runner Up",
            badge: "2nd Runner Up",
            amount: "Revealing Soon",
            desc: "Cash Prize + Trophy + Certificate of Excellence + Goodies",
            border: "border-purple-400/50",
            bgGlow: "from-purple-500/20 via-pink-500/10 to-transparent",
            icon: <FaMedal className="text-purple-400 text-3xl sm:text-4xl" />,
            highlight: false,
        },
    ];

    const specialAwards = [
        {
            icon: <FaFemale className="text-pink-400 text-2xl" />,
            title: "Best All-Girls Team",
            desc: "Special award & cash perk honoring the top-scoring all-women innovator team.",
        },
        {
            icon: <FaLightbulb className="text-cyan-400 text-2xl" />,
            title: "Most Innovative Solution",
            desc: "Recognizing outstanding creativity, disruption, and unconventional architecture.",
        },
        {
            icon: <FaBriefcase className="text-purple-400 text-2xl" />,
            title: "Internship & Mentorship",
            desc: "Direct interview fast-tracks and incubation mentorship for top projects.",
        },
        {
            icon: <FaCertificate className="text-emerald-400 text-2xl" />,
            title: "Certificates for All",
            desc: "Official verified Certificates of Participation by Mewar University CSE Dept.",
        },
    ];

    return (
        <section id="prizes" className="pt-14 pb-16 md:pt-20 md:pb-24 bg-slate-950/80 relative overflow-hidden border-t border-slate-900">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full inline-block mb-3">
                        Rewards &amp; Recognition
                    </span>
                    <h2 className="text-3xl md:text-5xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 mb-3">
                        PRIZES &amp; ACCOLADES
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 font-montserrat max-w-xl mx-auto mb-8">
                        Compete against the brightest minds for cash rewards, prestigious university trophies, and exclusive industry perks.
                    </p>

                    {/* Prize Pool Teaser Banner */}
                    <motion.div
                        ref={ref}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block bg-gradient-to-r from-slate-900 via-slate-900/90 to-purple-950/80 border-2 border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 relative overflow-hidden max-w-2xl w-full"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500" />
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-300 block mb-2">
                            Total Prize Pool
                        </span>
                        <div className="text-3xl sm:text-5xl md:text-6xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 drop-shadow-md">
                            REVEALING SOON
                        </div>
                        <p className="text-xs sm:text-sm font-montserrat text-gray-400 mt-2 font-medium">
                            Stay tuned! Attractive cash rewards, sponsor bounties &amp; hardware goodies will be announced.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Podium Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {podium.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: 0.3 + idx * 0.15, duration: 0.5 }}
                            className={`bg-slate-900/90 backdrop-blur-xl border-2 ${item.border} rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden hover:-translate-y-1.5 transition-all duration-300 ${
                                item.highlight ? "md:-translate-y-2 ring-1 ring-yellow-400/30 shadow-yellow-500/10" : ""
                            }`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-b ${item.bgGlow} pointer-events-none`} />
                            
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                                        {item.icon}
                                    </div>
                                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 bg-slate-950/80 border border-slate-700 text-gray-200 rounded-full">
                                        {item.badge}
                                    </span>
                                </div>

                                <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider block">
                                    {item.place}
                                </span>
                                <h3 className="text-xl sm:text-2xl font-exo font-bold text-white mb-2">
                                    {item.title}
                                </h3>
                                <div className="text-lg font-mono font-bold text-cyan-300 mb-3">
                                    {item.amount}
                                </div>
                                <p className="text-xs text-gray-300 font-montserrat leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Special Perks & Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {specialAwards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            className="bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 rounded-xl p-5 transition-all hover:bg-slate-900/90"
                        >
                            <div className="mb-3">{award.icon}</div>
                            <h4 className="text-sm font-exo font-bold text-white mb-1.5">{award.title}</h4>
                            <p className="text-xs text-gray-400 font-montserrat leading-relaxed">{award.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Prizes;
