// React import removed

import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Team = () => {
    const { ref, isInView } = useSectionInView();

    const team = [
        { name: "John Doe", role: "Organizer", img: "https://i.pravatar.cc/150?img=11" },
        { name: "Jane Smith", role: "Tech Lead", img: "https://i.pravatar.cc/150?img=5" },
        { name: "David Lee", role: "Design Head", img: "https://i.pravatar.cc/150?img=3" },
        { name: "Sarah Connor", role: "Event Manager", img: "https://i.pravatar.cc/150?img=9" },
    ];

    return (
        <section id="team" className="py-20 bg-dark-bg relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,194,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,194,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-white"
                >
                    <span className="text-cyber-blue">OPERATORS</span> // TEAM
                </motion.h2>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center group"
                        >
                            {/* Avatar Container */}
                            <div className="relative w-40 h-40 mb-6">
                                {/* Rotating Border */}
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-neon-green animate-spin-slow"></div>
                                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyber-blue animate-spin" style={{ animationDuration: '3s' }}></div>

                                <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-neon-green transition-colors">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-neon-green transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-sm font-exo text-cyber-blue mb-3">{member.role}</p>

                            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
