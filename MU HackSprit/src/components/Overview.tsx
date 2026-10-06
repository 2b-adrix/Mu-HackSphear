import { motion } from "framer-motion";
import { FaCheckCircle, FaBolt, FaAward } from "react-icons/fa";

const Overview = () => {
    return (
        <section id="overview" className="pt-14 pb-16 md:pt-20 md:pb-24 bg-slate-950/60 relative border-t border-slate-900">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-10">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full inline-block mb-3">
                            Sprint Dynamics
                        </span>
                        <h2 className="text-3xl md:text-5xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 mb-3">
                            SPRINT OVERVIEW
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
                    </div>

                    <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/30 p-6 sm:p-10 rounded-3xl shadow-2xl">
                        <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4 font-montserrat">
                            <span className="font-bold text-cyan-400">MU HackSphere 2026</span> is an intensive 8-hour sprint hackathon organized by the <span className="font-semibold text-purple-300">Department of Computer Science &amp; Engineering, Mewar University</span>.
                        </p>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8 font-montserrat">
                            Engineered to evaluate rapid problem analysis, scalable software architecture, and speed of delivery, teams race against the clock to turn problem statements into functional, high-value prototypes.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 my-6">
                            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                                <h3 className="text-base font-exo font-bold text-cyan-300 mb-3 flex items-center gap-2">
                                    <FaBolt className="text-yellow-400" />
                                    <span>Sprint Features:</span>
                                </h3>
                                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-montserrat">
                                    {[
                                        "Curated real-world problem statements",
                                        "Two scheduled rounds of faculty & industry mentorship",
                                        "High-speed WiFi & dedicated campus infrastructure",
                                        "Live pitch presentation before the evaluation panel",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <FaCheckCircle className="text-cyan-400 text-xs mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                                <h3 className="text-base font-exo font-bold text-purple-300 mb-3 flex items-center gap-2">
                                    <FaAward className="text-purple-400" />
                                    <span>Core Objectives:</span>
                                </h3>
                                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-montserrat">
                                    {[
                                        "Foster fast-paced innovation & agile thinking",
                                        "Encourage interdisciplinary problem-solving",
                                        "Cultivate production-grade coding habits",
                                        "Build a thriving community of builders at Mewar Univ",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <FaCheckCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm text-cyan-200 font-montserrat italic border-l-4 border-cyan-400 pl-4 py-2.5 bg-cyan-950/20 rounded-r-xl">
                            All problem statements are publicly accessible at <a href="https://mu-hacksphere.vercel.app" target="_blank" rel="noopener noreferrer" className="underline font-bold text-cyan-300 hover:text-white">mu-hacksphere.vercel.app</a>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Overview;
