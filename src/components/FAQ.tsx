import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const FAQ = () => {
    const { ref, isInView } = useSectionInView();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is MU HackSphere 2026 (8-Hour Sprint Edition)?",
            answer: "MU HackSphere 2026 is an offline, fast-paced 8-hour sprint hackathon organized by the Department of Computer Science & Engineering at Mewar University, Gangrar, Chittorgarh. Teams build working prototypes around curated industry and campus problem statements within 8 hours.",
        },
        {
            question: "Who is eligible to participate?",
            answer: "Undergraduate and postgraduate students from Mewar University as well as other engineering colleges and universities are eligible. Teams must comprise 2 to 4 members.",
        },
        {
            question: "Where can I view the curated problem statements?",
            answer: "Curated problem statements are published on our dedicated portal at https://mu-hacksphere.vercel.app. Teams can choose their preferred domain before or during the sprint kickoff.",
        },
        {
            question: "When and where is the event taking place?",
            answer: "The hackathon takes place on 17th October 2026 from 08:30 AM to 06:30 PM IST at Mewar University Campus, NH-79 Gangrar, Chittorgarh, Rajasthan. Registration closes on 15th October 2026.",
        },
        {
            question: "Will refreshments and meals be provided?",
            answer: "Yes! Complimentary welcome refreshments, power lunch, and evening tea will be provided by the organizers to keep all sprint participants energized.",
        },
        {
            question: "What should participants bring to the venue?",
            answer: "Every participant must bring their personal laptop, charger, student ID card, and any specific IoT boards/sensors if participating in the hardware track. High-speed WiFi and power sockets will be provided.",
        },
        {
            question: "How will the 8-hour sprint be judged?",
            answer: "Projects will be judged live by a distinguished jury based on Innovation & Problem Formulation (25%), Technical Execution & Code Quality (25%), Functional Working Prototype (30%), and Live Pitch/Demo (20%).",
        },
        {
            question: "Who can I contact for queries or registration assistance?",
            answer: "You can reach out to our Faculty Coordinators: Mr. B.L. Pal (HOD, CSE) at +91 98871 64480 or Mr. Dilip Memariya (Faculty Coordinator) at +91 86194 97775.",
        },
    ];

    return (
        <section id="faq" className="pt-14 pb-16 md:pt-20 md:pb-24 bg-slate-950/80 relative border-t border-slate-900">
            <div className="container mx-auto px-6 max-w-4xl">
                <div ref={ref}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full inline-block mb-3">
                            Clarifications &amp; Help
                        </span>
                        <h2 className="text-3xl md:text-5xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 mb-3">
                            FREQUENTLY ASKED QUESTIONS
                        </h2>
                        <p className="text-sm md:text-base text-gray-300 font-montserrat max-w-xl mx-auto">
                            Got questions regarding MU HackSphere 2026? Find answers to the most common queries below.
                        </p>
                    </motion.div>

                    <div className="space-y-3.5">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: index * 0.06, duration: 0.4 }}
                                className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-800 hover:border-cyan-500/40 shadow-lg overflow-hidden transition-all"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-4 sm:py-5 flex items-center justify-between text-left group gap-4"
                                >
                                    <span className="font-exo font-bold text-gray-200 text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                                        {faq.question}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="text-cyan-400 flex-shrink-0 text-sm"
                                    >
                                        <FaChevronDown />
                                    </motion.span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 text-gray-300 font-montserrat text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 pt-3.5">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
