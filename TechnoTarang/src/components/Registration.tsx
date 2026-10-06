// React import removed

import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";

const Registration = () => {
    const { ref, isInView } = useSectionInView();

    return (
        <section id="register" className="py-20 bg-dark-bg relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-white"
                >
                    <span className="text-neon-green">REGISTRATION</span> STATUS
                </motion.h2>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto bg-glass-white backdrop-blur-xl border border-neon-green/30 p-8 md:p-12 rounded-2xl shadow-[0_0_30px_rgba(0,255,136,0.1)] relative"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neon-green rounded-tl-2xl opacity-50"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neon-green rounded-br-2xl opacity-50"></div>

                    <div className="text-center py-10">
                        <div className="w-24 h-24 mx-auto mb-6 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30">
                            <span className="text-5xl">🔒</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6 tracking-wider">
                            REGISTRATION <span className="text-red-500">CLOSED</span>
                        </h3>
                        <p className="text-gray-400 font-exo text-lg max-w-lg mx-auto leading-relaxed">
                            Thank you for the overwhelming response! Registrations for TechnoTarang are now officially closed. 
                            <br/><br/>
                            Prepare yourselves for an incredible coding experience. We'll see you at the event!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Registration;
