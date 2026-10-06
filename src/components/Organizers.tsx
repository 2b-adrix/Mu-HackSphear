import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaUniversity, FaUserTie, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Organizers = () => {
    const { ref, isInView } = useSectionInView();

    const facultyCoordinators = [
        {
            name: "Mr. B.L. Pal",
            role: "Head of Department (HOD)",
            dept: "Department of Computer Science & Engineering",
            institution: "Mewar University, Chittorgarh",
            phone: "+91 98871 64480",
            phoneRaw: "+919887164480",
            badge: "HOD / Chief Patron",
            badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
        },
        {
            name: "Mr. Dilip Memariya",
            role: "Faculty Coordinator",
            dept: "Department of Computer Science & Engineering",
            institution: "Mewar University, Chittorgarh",
            phone: "+91 86194 97775",
            phoneRaw: "+918619497775",
            badge: "Faculty Convener",
            badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
        },
    ];

    return (
        <section id="organizers" className="pt-14 pb-16 md:pt-20 md:pb-24 bg-slate-950/60 relative border-t border-slate-900">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full inline-block mb-3">
                        Leadership &amp; Faculty
                    </span>
                    <h2 className="text-3xl md:text-5xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 mb-3">
                        ORGANIZED BY
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 font-montserrat max-w-2xl mx-auto">
                        Department of Computer Science &amp; Engineering, Mewar University, Gangrar, Chittorgarh, Rajasthan
                    </p>
                </motion.div>

                {/* Faculty Leadership Cards */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {facultyCoordinators.map((faculty, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/50 p-6 md:p-8 rounded-2xl shadow-xl transition-all relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-purple-600" />
                            
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                                    <FaUserTie />
                                </div>
                                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${faculty.badgeColor}`}>
                                    {faculty.badge}
                                </span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-exo font-bold text-white mb-1">
                                {faculty.name}
                            </h3>
                            <p className="text-xs sm:text-sm font-montserrat font-bold text-cyan-300 mb-2">
                                {faculty.role}
                            </p>
                            <p className="text-xs text-gray-400 font-montserrat mb-1">
                                {faculty.dept}
                            </p>
                            <p className="text-xs text-gray-500 font-montserrat mb-5">
                                {faculty.institution}
                            </p>

                            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                                <span className="text-[11px] text-gray-400 font-montserrat flex items-center gap-1.5">
                                    <FaPhoneAlt className="text-cyan-400 text-xs" />
                                    <span>Direct Contact:</span>
                                </span>
                                <a
                                    href={`tel:${faculty.phoneRaw}`}
                                    className="font-mono font-bold text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                                >
                                    {faculty.phone}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* University Location and Department Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-4 text-left">
                        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-2xl flex-shrink-0">
                            <FaUniversity />
                        </div>
                        <div>
                            <h4 className="text-lg font-exo font-bold text-white mb-1">
                                Mewar University Campus
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-300 font-montserrat flex items-center gap-2">
                                <FaMapMarkerAlt className="text-purple-400 flex-shrink-0" />
                                <span>NH-79 Gangrar, Chittorgarh, Rajasthan — 312901</span>
                            </p>
                        </div>
                    </div>

                    <a
                        href="https://maps.google.com/?q=Mewar+University+Gangrar+Chittorgarh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded-xl text-xs font-montserrat font-bold transition-all whitespace-nowrap"
                    >
                        View on Google Maps →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Organizers;
