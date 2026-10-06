import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import {
    FaRobot, FaShieldAlt, FaGraduationCap, FaMicrochip,
    FaHeartbeat, FaCoins, FaSolarPanel, FaLightbulb, FaCode, FaExternalLinkAlt
} from "react-icons/fa";

const tracks = [
    {
        icon: <FaRobot />,
        title: "AI, GenAI & ML Systems",
        category: "Artificial Intelligence",
        description: "Curated problem statements solving real challenges using Large Language Models, vision AI, predictive analytics, and automated decision engines.",
        color: "from-cyan-500 to-blue-600",
        badge: "High Impact",
        badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    },
    {
        icon: <FaShieldAlt />,
        title: "Cybersecurity & Web3",
        category: "Security & Trust",
        description: "Zero-trust architectures, vulnerability scanners, cryptography, smart contracts, decentralized identity, and fraud detection tools.",
        color: "from-purple-500 to-pink-600",
        badge: "Security",
        badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    },
    {
        icon: <FaGraduationCap />,
        title: "Smart Campus & EdTech",
        category: "University Innovation",
        description: "Next-gen ERP systems, automated grading, intelligent student portals, AR learning tools, and campus resource management for Mewar University.",
        color: "from-blue-500 to-indigo-600",
        badge: "Campus Special",
        badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    },
    {
        icon: <FaMicrochip />,
        title: "IoT & Smart Hardware",
        category: "Connected Systems",
        description: "Embedded electronics, sensor telemetry, smart agriculture monitoring, industrial automation, and edge computing prototypes.",
        color: "from-teal-500 to-emerald-600",
        badge: "Hardware & Edge",
        badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    },
    {
        icon: <FaHeartbeat />,
        title: "Healthcare & MedTech",
        category: "Health & Care",
        description: "Telemedicine workflows, diagnostic assistants, patient monitoring dashboards, and accessible health-tech utilities for rural outreach.",
        color: "from-rose-500 to-red-600",
        badge: "Social Impact",
        badgeColor: "bg-rose-500/10 text-rose-300 border-rose-500/30",
    },
    {
        icon: <FaCoins />,
        title: "FinTech & Digital Commerce",
        category: "Financial Tech",
        description: "Micro-payment gateways, algorithmic budgeting, decentralized lending, fraud surveillance, and accessible banking APIs.",
        color: "from-amber-500 to-orange-600",
        badge: "Finance",
        badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    },
    {
        icon: <FaSolarPanel />,
        title: "Clean Energy & Smart Cities",
        category: "Sustainability",
        description: "Carbon footprint tracking, smart grid optimization, waste management routing, and eco-friendly infrastructure tools.",
        color: "from-green-500 to-teal-600",
        badge: "Green Tech",
        badgeColor: "bg-green-500/10 text-green-300 border-green-500/30",
    },
    {
        icon: <FaLightbulb />,
        title: "Open Innovation",
        category: "Creative Breakthrough",
        description: "Have an out-of-the-box solution or disruptive product concept? Build your own vision during this 8-hour sprint.",
        color: "from-violet-500 to-purple-600",
        badge: "Unbounded",
        badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/30",
    },
];

const TrackCard = ({ track, index, isInView }: { track: typeof tracks[0]; index: number; isInView: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: index * 0.06, duration: 0.5 }}
            className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1.5 group overflow-hidden"
        >
            {/* Ambient Top Glow on Hover */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${track.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
            
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center text-white text-xl shadow-lg shadow-black/40 group-hover:scale-110 transition-transform`}>
                        {track.icon}
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${track.badgeColor}`}>
                        {track.badge}
                    </span>
                </div>

                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                    {track.category}
                </span>

                <h3 className="text-base sm:text-lg font-exo font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {track.title}
                </h3>

                <p className="text-xs text-gray-300 font-montserrat leading-relaxed">
                    {track.description}
                </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400/90 font-medium">8-Hour Sprint Track</span>
                <a
                    href="https://mu-hacksphere.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-montserrat font-bold text-gray-400 group-hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                    <span>View Statements</span>
                    <FaExternalLinkAlt className="text-[9px]" />
                </a>
            </div>
        </motion.div>
    );
};

const Themes = () => {
    const { ref, isInView } = useSectionInView();

    return (
        <section id="themes" className="pt-14 pb-16 md:pt-20 md:pb-24 bg-slate-950/80 relative border-t border-slate-900">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full inline-block mb-3">
                        Curated Tracks &amp; Problem Statements
                    </span>
                    <h2 className="text-3xl md:text-5xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 mb-3">
                        8-HOUR SPRINT THEMES
                    </h2>
                    <p className="text-sm md:text-lg text-gray-300 font-montserrat font-medium max-w-2xl mx-auto">
                        Engineered for rapid prototyping, high technical depth, and actionable impact across 8 focused thematic domains.
                    </p>
                </motion.div>

                {/* Problem Statement Portal Showcase Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-10 max-w-4xl mx-auto"
                >
                    <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-purple-950/50 border-2 border-cyan-500/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="text-center sm:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase mb-2">
                                <FaCode />
                                <span>Official Repository</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-exo font-bold text-white">
                                Curated Problem Statements Live
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-300 font-montserrat mt-1 max-w-md">
                                Explore detailed problem statements, technical requirements, submission guidelines, and evaluation metrics on our dedicated portal.
                            </p>
                        </div>

                        <a
                            href="https://mu-hacksphere.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-montserrat font-black text-sm rounded-xl shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all duration-300 whitespace-nowrap flex-shrink-0"
                        >
                            <span>Open Problem Portal</span>
                            <FaExternalLinkAlt className="text-xs" />
                        </a>
                    </div>
                </motion.div>

                {/* Track Cards Grid */}
                <div
                    ref={ref}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
                >
                    {tracks.map((track, index) => (
                        <TrackCard key={index} track={track} index={index} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Themes;
