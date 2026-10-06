import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaLaptop, FaChalkboardTeacher, FaWifi, FaBan, FaCode, FaUsers, FaClock, FaBalanceScale } from "react-icons/fa";

const Guidelines = () => {
    const { ref, isInView } = useSectionInView();

    const rules = [
        { icon: <FaUsers className="text-cyan-400" />, title: "Team Formation", text: "Teams must consist of 2 to 4 members. Inter-branch and inter-year teams are welcome." },
        { icon: <FaClock className="text-yellow-400" />, title: "8-Hour Sprint Window", text: "All core coding, prototyping, and design must be executed strictly within the 8-hour sprint window." },
        { icon: <FaCode className="text-purple-400" />, title: "Fresh Code Policy", text: "Pre-written full projects are strictly prohibited. Open-source libraries and APIs may be used with declaration." },
        { icon: <FaLaptop className="text-blue-400" />, title: "Hardware & Laptops", text: "Teams must bring their personal laptops, chargers, extension cords, and any specialized IoT hardware." },
        { icon: <FaWifi className="text-emerald-400" />, title: "Campus Connectivity", text: "High-speed WiFi/LAN connections and uninterrupted power supply will be provided at the venue." },
        { icon: <FaChalkboardTeacher className="text-pink-400" />, title: "Faculty & Mentor Guidance", text: "Two scheduled rounds of mentorship will take place to help teams refine architecture and resolve blockers." },
        { icon: <FaBalanceScale className="text-amber-400" />, title: "Judging Criteria", text: "Evaluation is based on Innovation (25%), Technical Depth (25%), Working Prototype (30%), and Live Presentation (20%)." },
        { icon: <FaBan className="text-red-400" />, title: "Code of Conduct", text: "Plagiarism or disruptive behavior will lead to immediate disqualification by the organizing committee." },
    ];

    return (
        <section id="guidelines" className="pt-14 pb-16 md:pt-20 md:pb-24 bg-slate-950/60 relative border-t border-slate-900">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full inline-block mb-3">
                        Rules &amp; Code of Conduct
                    </span>
                    <h2 className="text-3xl md:text-5xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 mb-3">
                        SPRINT GUIDELINES
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 font-montserrat max-w-xl mx-auto">
                        Please review the essential rules, eligibility criteria, and fair-play standards for MU HackSphere 2026.
                    </p>
                </motion.div>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                    {rules.map((rule, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.07, duration: 0.4 }}
                            className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/40 p-5 sm:p-6 rounded-2xl flex items-start gap-4 transition-all hover:bg-slate-900 shadow-lg"
                        >
                            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xl flex-shrink-0 mt-0.5">
                                {rule.icon}
                            </div>
                            <div>
                                <h3 className="font-exo font-bold text-base text-white mb-1.5 flex items-center gap-2">
                                    <span>{rule.title}</span>
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-300 font-montserrat leading-relaxed">
                                    {rule.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Guidelines;
