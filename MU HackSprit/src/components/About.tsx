import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaUserTie, FaBalanceScale, FaMicrophoneAlt, FaBolt, FaLaptopCode, FaUsers, FaAward } from "react-icons/fa";

const About = () => {
    const { ref, isInView } = useSectionInView();

    const features = [
        { icon: <FaBolt className="text-yellow-400" />, text: "Curated 8-Hour Rapid Sprint" },
        { icon: <FaMicrophoneAlt className="text-cyan-400" />, text: "Expert Technical Mentoring" },
        { icon: <FaUserTie className="text-purple-400" />, text: "Department CSE Leadership" },
        { icon: <FaBalanceScale className="text-pink-400" />, text: "Strict & Fair Jury Evaluation" },
    ];

    const stats = [
        { count: "8 Hrs", label: "Non-Stop Sprint", icon: <FaBolt className="text-yellow-400" /> },
        { count: "50+", label: "Elite Teams", icon: <FaUsers className="text-cyan-400" /> },
        { count: "200+", label: "Coders & Innovators", icon: <FaLaptopCode className="text-purple-400" /> },
        { count: "₹ Cash", label: "Prizes & Goodies", icon: <FaAward className="text-emerald-400" /> },
    ];

    return (
        <section id="about" className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-slate-950/60 overflow-hidden border-t border-slate-900">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/5 rounded-full filter blur-3xl -z-10 animate-float" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/5 rounded-full filter blur-3xl -z-10" />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full inline-block mb-3">
                        About the Event
                    </span>
                    <h2 className="text-3xl md:text-5xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 mb-3">
                        ABOUT MU HACKSPHERE 2026
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="space-y-4 md:space-y-5 text-sm md:text-base text-gray-300 font-montserrat leading-relaxed text-justify"
                    >
                        <p>
                            <span className="font-bold text-cyan-400">MU HackSphere 2026</span> is the premier <span className="font-semibold text-white">8-Hour Sprint Edition Hackathon</span> organized by the <span className="font-semibold text-purple-400">Department of Computer Science &amp; Engineering, Mewar University</span>, Gangrar, Chittorgarh, Rajasthan.
                        </p>
                        <p>
                            Tailored to simulate high-pressure tech sprints, MU HackSphere challenges student developers, engineers, and creators to take curated, industry-aligned problem statements and build functional software or hardware prototypes within <span className="font-bold text-cyan-300">8 intense hours</span>.
                        </p>
                        <p>
                            With domains ranging across <span className="font-semibold text-white">AI/ML &amp; Generative Intelligence, Web3 &amp; Security, Smart Campus Automation, IoT, Healthcare, and Sustainable Tech</span>, the sprint creates an electric environment for rapid ideation, coding, and real-time live demonstrations.
                        </p>
                        <p>
                            Participants will benefit from continuous guidance by seasoned faculty mentors, industry judges, and tech leaders, pushing their technical and teamwork boundaries.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 p-6 md:p-8 rounded-2xl relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-purple-600" />
                            <h4 className="text-lg md:text-xl font-bold text-cyan-300 mb-5 font-exo">Event Highlights</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                                        <div className="text-xl flex-shrink-0">{feature.icon}</div>
                                        <span className="font-medium text-xs md:text-sm text-gray-200">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="bg-slate-900/60 border border-purple-500/20 p-5 rounded-2xl"
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <div className="text-lg mb-1">{stat.icon}</div>
                                        <span className="text-xl sm:text-2xl font-black font-exo text-white">{stat.count}</span>
                                        <span className="text-[11px] text-gray-400 font-montserrat mt-0.5">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
