import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaClock, FaCheckCircle, FaBolt } from "react-icons/fa";

type ScheduleItem = { time: string; activity: string; highlight?: boolean };

type TimelinePhase = {
    date: string;
    badge: string;
    title: string;
    desc: string;
    schedule?: ScheduleItem[];
};

const Timeline = () => {
    const { ref, isInView } = useSectionInView();

    const phases: TimelinePhase[] = [
        {
            date: "Open Now",
            badge: "Phase 1",
            title: "Online Registration & Team Formation",
            desc: "Register your team (2–4 members) and select your preferred track.",
        },
        {
            date: "12th October 2026 (11:59 PM)",
            badge: "Deadline",
            title: "Registration Closes",
            desc: "Final deadline for team registrations and problem statement pre-selection.",
        },
        {
            date: "15th October 2026 (08:30 AM – 06:30 PM)",
            badge: "Main Event",
            title: "8-Hour Sprint Hackathon Day",
            desc: "The intense 8-hour sprint on campus at Mewar University.",
            schedule: [
                { time: "08:30 AM – 09:15 AM", activity: "Reporting, Team Check-in & Welcome Refreshments" },
                { time: "09:15 AM – 09:45 AM", activity: "Inaugural Ceremony & Address by Dept. of CSE Leadership" },
                { time: "09:45 AM – 10:00 AM", activity: "⚡ 8-Hour Sprint Kickoff & Problem Statement Briefing", highlight: true },
                { time: "10:00 AM – 12:30 PM", activity: "Sprint Session 1: Core System Architecture & Coding" },
                { time: "12:30 PM – 01:30 PM", activity: "💡 Mentorship Round 1: Architecture Validation & Technical Guidance" },
                { time: "01:30 PM – 02:15 PM", activity: "🍕 Power Lunch Break (Provided by Organizers)" },
                { time: "02:15 PM – 04:30 PM", activity: "Sprint Session 2: Frontend Integration, Testing & Feature Polish" },
                { time: "04:30 PM – 05:00 PM", activity: "🛑 Code Freeze & Final Project Submission on Portal", highlight: true },
                { time: "05:00 PM – 06:00 PM", activity: "🎤 Final Pitching, Live Demos & Jury Q&A Evaluation" },
                { time: "06:00 PM – 06:30 PM", activity: "🏆 Valedictory Ceremony, Awards & Winner Announcements", highlight: true },
            ],
        },
    ];

    return (
        <section id="timeline" className="pt-14 pb-16 md:pt-20 md:pb-24 bg-slate-950/60 relative overflow-hidden border-t border-slate-900">
            {/* Ambient Lighting */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full inline-block mb-3">
                        Sprint Schedule
                    </span>
                    <h2 className="text-3xl md:text-5xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 mb-3">
                        8-HOUR SPRINT TIMELINE
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 font-montserrat max-w-xl mx-auto">
                        Precision, stamina, and execution: here is how the 8-hour sprint unfolds on 15th October 2026.
                    </p>
                </motion.div>

                <div ref={ref} className="space-y-8 md:space-y-10 relative">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-4 sm:left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-400 hidden sm:block opacity-30" />

                    {phases.map((phase, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="relative sm:pl-16"
                        >
                            {/* Marker Node for desktop */}
                            <div className="hidden sm:flex absolute left-3 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-900 border-2 border-cyan-400 items-center justify-center shadow-lg shadow-cyan-500/30 z-10">
                                {idx === 2 ? (
                                    <FaBolt className="text-cyan-400 text-xs animate-pulse" />
                                ) : (
                                    <FaCheckCircle className="text-purple-400 text-xs" />
                                )}
                            </div>

                            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-xl transition-all">
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-full">
                                        {phase.badge}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-purple-300 font-semibold">
                                        <FaClock className="text-purple-400 text-xs" />
                                        <span>{phase.date}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-exo font-bold text-white mb-2">
                                    {phase.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-300 font-montserrat mb-4">
                                    {phase.desc}
                                </p>

                                {phase.schedule && (
                                    <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2.5">
                                        <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider">
                                            <FaBolt />
                                            <span>Full 8-Hour Schedule (15th Oct, 2026)</span>
                                        </div>
                                        <div className="grid grid-cols-1 gap-2.5">
                                            {phase.schedule.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 p-3 rounded-xl border transition-colors ${
                                                        item.highlight
                                                            ? "bg-cyan-950/30 border-cyan-500/40 text-cyan-200"
                                                            : "bg-slate-950/50 border-slate-800/80 text-gray-300 hover:border-slate-700"
                                                    }`}
                                                >
                                                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md shrink-0 w-fit ${
                                                        item.highlight 
                                                            ? "bg-cyan-500/20 text-cyan-300" 
                                                            : "bg-slate-800 text-gray-300"
                                                    }`}>
                                                        {item.time}
                                                    </span>
                                                    <span className="text-xs sm:text-sm font-montserrat font-medium sm:text-right">
                                                        {item.activity}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
