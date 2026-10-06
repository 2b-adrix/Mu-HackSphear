import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import h2sLogo from "../assets/hack2skills logo.png";
import acmLogo from "../assets/acm logo.png";
import xyzLogo from "../assets/xyz_logo.png";
import interviewBuddyLogo from "../assets/InterviewBuddy.png";
import startupNewsLogo from "../assets/startupnewsLogo.jpeg";
// import giveMyCertificateLogo from "../assets/givemycertificate.jpg";
import regexLogo from "../assets/regex.png";
import grrasLogo from "../assets/grras logo.jpg";
import engineersAcademyLogo from "../assets/Engineering_aca_logo.png";
import ducatLogo from "../assets/Ducat_logo_sponsor.jpeg";
import mcdonaldsLogo from "../assets/McDonald's_logo.png";
import hypedInLogo from "../assets/HYPEDIN_Logo.png";
import dockerHoLLogo from "../assets/dockerhol-logo-light.png";
import edviseLogo from "../assets/edvise logo.jpg";
import codeupLogo from "../assets/code-up.webp";
import youngIndiansLogo from "../assets/young-indians-logo.png";
import aurigaLogo from "../assets/Auriga Logo.png";
import thinkvibesLogo from "../assets/thinkvibes-logo.png";
import wuwbLogo from "../assets/WUWB.png";
import grastechLogo from "../assets/grastech.png";
import brightHubLogo from "../assets/Bright Hub Logo.png";
import primathixAiLogo from "../assets/logo_primathixai.jpeg";
import cyntexaLogo from "../assets/cyntexa_logo.jpg";

const Sponsors = () => {
    const { ref, isInView } = useSectionInView();

    return (
        <section id="sponsors" className="pt-6 pb-12 md:pt-10 md:pb-20 bg-beige/70 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-exo font-bold text-neon-blue mb-4">
                        Our Sponsors
                    </h2>
                    <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full" />
                </motion.div>

                <div ref={ref} className="space-y-10 md:space-y-14">

                    {/* Single Row 4-Column Grid for all Sponsors */}
                    <div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

                            {/* Platform Partner */}
                            <motion.a
                                href="https://hack2skill.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-blue-50 to-sky-100 border-2 border-blue-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-neon-blue hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-blue-600">Platform Partner</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={h2sLogo} alt="Hack2Skill" className="max-h-14 md:max-h-27 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-blue-900 text-xs md:text-sm text-center">Hack2Skill</span>
                            </motion.a>

                            {/* Domain Partner - .xyz */}
                            <motion.a
                                href="https://gen.xyz"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-violet-50 to-purple-100 border-2 border-violet-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-violet-600">Domain Partner</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={xyzLogo} alt=".xyz Domain" className="max-h-14 md:max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-violet-900 text-xs md:text-sm text-center">.xyz</span>
                            </motion.a>
                            {/* Interview Buddy */}
                            <motion.a
                                href="https://interviewbuddy.net/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.35, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-sky-50 to-indigo-100 border-2 border-sky-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-sky-600 text-center px-2">Interview Prep Partner</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={interviewBuddyLogo} alt="Interview Buddy" className="max-h-12 md:max-h-16 w-auto object-contain px-2 group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-sky-900 text-xs md:text-sm text-center">Interview Buddy</span>
                            </motion.a>


                            {/* Media Partners */}
                            <motion.a
                                href="https://startupnews.fyi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-orange-50 to-amber-100 border-2 border-orange-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-orange-600 text-center px-2">Media Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={startupNewsLogo} alt="Startup News" className="max-h-12 md:max-h-16 w-auto object-contain px-2 group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-orange-900 text-xs md:text-sm text-center">Startup News</span>
                            </motion.a>
                            {/* Certificate Partner - GiveMyCertificate
                                <motion.a
                                    href="https://givemycertificate.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                    className="h-40 md:h-48 w-full bg-white border-2 border-emerald-200 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
                                >
                                    <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-emerald-500 text-center px-1">Certificate Partner</span>
                                    <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                        <img src={giveMyCertificateLogo} alt="GiveMyCertificate" className="max-h-16 md:max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <span className="font-exo font-bold text-gray-700 text-xs md:text-sm text-center">GiveMyCertificate</span>
                                </motion.a> */}
                            <motion.a
                                href="https://www.hypedin.co/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.25, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-red-50 to-rose-100 border-2 border-red-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-red-500 hover:shadow-xl hover:shadow-red-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-red-600 text-center px-2">Meal Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={hypedInLogo} alt="Hypedin" className="max-h-12 md:max-h-16 w-auto object-contain px-2 group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-red-900 text-xs md:text-sm text-center">Hypedin</span>
                            </motion.a>

                            {/* Meal Partner - McDonald's */}
                            <motion.a
                                href="https://mcdindia.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-yellow-50 to-orange-100 border-2 border-yellow-400 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-yellow-700 text-center px-2">Meal Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={mcdonaldsLogo} alt="McDonald's" className="max-h-14 md:max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-yellow-900 text-xs md:text-sm text-center">McDonald's</span>
                            </motion.a>

                            {/* Community & Technical Partner - DockerHoL */}
                            <motion.a
                                href="https://dockerhol.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.35, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-cyan-50 to-sky-100 border-2 border-cyan-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-cyan-700 text-center px-2">Community & Technical Partner</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={dockerHoLLogo} alt="DockerHoL" className="max-h-12 md:max-h-16 w-auto object-contain px-2 group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-cyan-900 text-xs md:text-sm text-center">DockerHoL</span>
                            </motion.a>

                            {/* Recruiting Partner - Edvise */}
                            <motion.a
                                href="https://www.edwiseinternational.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-fuchsia-50 to-pink-100 border-2 border-fuchsia-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-fuchsia-500 hover:shadow-xl hover:shadow-fuchsia-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-fuchsia-600 text-center px-2">Recruiting Partner</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={edviseLogo} alt="Edwise International" className="max-h-16 md:max-h-20 md:scale-110 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-fuchsia-900 text-xs md:text-sm text-center">Edwise International</span>
                            </motion.a>


                            {/* Support Partner - Young Indians */}
                            <motion.a
                                href="https://youngindians.net/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-lime-50 to-green-100 border-2 border-lime-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-lime-500 hover:shadow-xl hover:shadow-lime-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-lime-700 text-center px-2">Support Partner</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={youngIndiansLogo} alt="Young Indians" className="max-h-16 md:max-h-20 md:scale-110 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-green-900 text-xs md:text-sm text-center">Young Indians</span>
                            </motion.a>
                            {/* Technical Partner - ACM */}
                            <motion.a
                                href="https://jaipur.acm.org/#/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-indigo-50 to-blue-100 border-2 border-indigo-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-indigo-600">Technical Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={acmLogo} alt="ACM Jaipur Chapter" className="max-h-16 md:max-h-24 md:scale-110 w-auto object-contain group-hover:scale-105 md:group-hover:scale-[1.15] transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-indigo-900 text-xs md:text-sm text-center">ACM Jaipur Chapter</span>
                            </motion.a>

                            {/* Technical Partner - Grastech */}
                            <motion.a
                                href="https://www.grastech.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.25, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-teal-50 to-emerald-100 border-2 border-teal-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-teal-500 hover:shadow-xl hover:shadow-teal-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-teal-600 text-center px-2">Technical Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={grastechLogo} alt="Grastech" className="max-h-14 md:max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-teal-900 text-xs md:text-sm text-center">Grastech</span>
                            </motion.a>

                            {/* Technical Partner - GRRAS */}
                            <motion.a
                                href="https://grras.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-rose-50 to-pink-100 border-2 border-rose-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-rose-600">Technical Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={grrasLogo} alt="GRRAS" className="max-h-14 md:max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-rose-900 text-xs md:text-sm text-center">Grras Solutions</span>
                            </motion.a>

                            {/* Technical Partner - Codeup */}
                            <motion.a
                                href="https://codeup.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.35, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-indigo-50 to-blue-100 border-2 border-indigo-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-indigo-700 text-center px-2">Technical Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={codeupLogo} alt="Codeup" className="max-h-12 md:max-h-16 w-auto object-contain px-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                                </div>
                                <span className="font-exo font-bold text-indigo-900 text-xs md:text-sm text-center">Codeup</span>
                            </motion.a>

                            {/* Technical Partner - Engineers Academy */}
                            <motion.a
                                href="https://www.engineersacademy.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-teal-50 to-emerald-100 border-2 border-teal-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-teal-500 hover:shadow-xl hover:shadow-teal-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-teal-600">Technical Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={engineersAcademyLogo} alt="Engineers Academy" className="max-h-14 md:max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-teal-900 text-xs md:text-sm text-center">Engineers Academy</span>
                            </motion.a>

                            {/* Technical Partner - BrightHub */}
                            <motion.a
                                href="https://brighthubpvtltd.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.45, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-indigo-50 to-blue-100 border-2 border-indigo-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-indigo-600 text-center px-2">Technical Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={brightHubLogo} alt="BrightHub" className="max-h-14 md:max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-indigo-900 text-xs md:text-sm text-center">BrightHub</span>
                            </motion.a>

                            {/* Community & Technical Partner - DockerHoL */}
                            <motion.a
                                href="https://dockerhol.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-cyan-50 to-sky-100 border-2 border-cyan-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-cyan-700 text-center px-2">Community & Technical Partner</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={dockerHoLLogo} alt="DockerHoL" className="max-h-12 md:max-h-16 w-auto object-contain px-2 group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-cyan-900 text-xs md:text-sm text-center">DockerHoL</span>
                            </motion.a>

                            {/* Recruiting Partner - Edvise */}
                            <motion.a
                                href="https://www.edwiseinternational.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.55, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-fuchsia-50 to-pink-100 border-2 border-fuchsia-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-fuchsia-500 hover:shadow-xl hover:shadow-fuchsia-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-fuchsia-600 text-center px-2">Recruiting Partner</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={edviseLogo} alt="Edwise International" className="max-h-16 md:max-h-20 md:scale-110 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-fuchsia-900 text-xs md:text-sm text-center">Edwise International</span>
                            </motion.a>

                            {/* Technical Partner - PrimathixAI */}
                            <motion.a
                                href="https://www.primathixai.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-violet-50 to-purple-100 border-2 border-violet-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-violet-600 text-center px-2">Technical Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={primathixAiLogo} alt="PrimathixAI" className="max-h-14 md:max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-violet-900 text-xs md:text-sm text-center">PrimathixAI</span>
                            </motion.a>

                            {/* Technical Partner - Ducat */}
                            <motion.a
                                href="https://www.ducatindia.com/school-of-ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.65, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-amber-50 to-yellow-100 border-2 border-amber-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-amber-600">Technical Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={ducatLogo} alt="Ducat" className="max-h-14 md:max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-amber-900 text-xs md:text-sm text-center">Ducat</span>
                            </motion.a>

                            {/* Technical Partner - REGex */}
                            <motion.a
                                href="https://regexsoftware.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.7, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-purple-50 to-fuchsia-100 border-2 border-purple-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-purple-600">Technical Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={regexLogo} alt="REGex" className="max-h-16 md:max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-purple-900 text-xs md:text-sm text-center">REGex</span>
                            </motion.a>

                            {/* Technical Partner - Auriga IT */}
                            <motion.a
                                href="https://aurigait.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.75, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-sky-50 to-blue-100 border-2 border-sky-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-sky-700 text-center px-2">Technical Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={aurigaLogo} alt="Auriga IT" className="max-h-12 md:max-h-16 w-auto object-contain px-2 group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-sky-900 text-xs md:text-sm text-center">Auriga IT</span>
                            </motion.a>

                            {/* Technical Partner - WUWB */}
                            <motion.a
                                href="https://wuwb.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.8, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-amber-700 text-center px-2">Technical Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={wuwbLogo} alt="WUWB" className="max-h-16 md:max-h-20 md:scale-110 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-amber-900 text-xs md:text-sm text-center">WUWB</span>
                            </motion.a>

                            {/* Technical Partner - Thinkvibes */}
                            <motion.a
                                href="https://thinkvibes.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.85, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-emerald-50 to-teal-100 border-2 border-emerald-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-emerald-700 text-center px-2">Technical Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={thinkvibesLogo} alt="Thinkvibes" className="max-h-16 md:max-h-20 md:scale-110 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-emerald-900 text-xs md:text-sm text-center">Thinkvibes</span>
                            </motion.a>

                            {/* Technical Partner - Cyntexa */}
                            <motion.a
                                href="https://cyntexa.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.9, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-gradient-to-br from-blue-50 to-cyan-100 border-2 border-blue-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-blue-600 text-center px-2">Technical Partners</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={cyntexaLogo} alt="Cyntexa" className="max-h-14 md:max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-blue-900 text-xs md:text-sm text-center">Cyntexa</span>
                            </motion.a>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Sponsors;
