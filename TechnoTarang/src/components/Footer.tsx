import { FaPhoneAlt, FaMapMarkerAlt, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const contacts = [
        { name: "Mr. B.L. Pal", phone: "+91 98871 64480", role: "HOD, Dept. of CSE" },
        { name: "Mr. Dilip Memariya", phone: "+91 86194 97775", role: "Faculty Coordinator, CSE" },
    ];

    return (
        <footer id="footer" className="bg-slate-950 border-t border-slate-900 text-white pt-12 md:pt-16 pb-8 relative overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">

                    {/* Hackathon & University Info */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 p-0.5">
                                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                                    <FaCode className="text-cyan-400 text-sm" />
                                </div>
                            </div>
                            <h3 className="text-xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                MU HACKSPHERE 2026
                            </h3>
                        </div>
                        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                            8-Hour Sprint Edition
                        </p>
                        <p className="text-gray-300 font-montserrat text-xs sm:text-sm leading-relaxed mb-4">
                            Organized by Department of Computer Science &amp; Engineering, Mewar University, Gangrar, Chittorgarh, Rajasthan — 312901.
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://mu-hacksphere.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-mono font-semibold hover:bg-cyan-950/40 transition-colors"
                            >
                                <span>Problem Statements</span>
                                <FaExternalLinkAlt className="text-[10px]" />
                            </a>
                            <Link
                                to="/register"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-mono font-bold hover:bg-cyan-400 transition-colors"
                            >
                                <span>Register</span>
                            </Link>
                        </div>
                    </div>

                    {/* Faculty Contact Coordinators */}
                    <div>
                        <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <FaPhoneAlt className="text-xs" />
                            <span>Faculty Coordinators</span>
                        </h4>
                        <div className="space-y-3.5">
                            {contacts.map((contact, index) => (
                                <div key={index} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
                                    <p className="text-white text-sm font-bold font-exo mb-0.5">
                                        {contact.name}
                                    </p>
                                    <p className="text-gray-400 text-xs font-montserrat mb-1.5">
                                        {contact.role}
                                    </p>
                                    <a
                                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300"
                                    >
                                        <FaPhoneAlt className="text-[10px]" />
                                        <span>{contact.phone}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Venue & Quick Links */}
                    <div>
                        <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <FaMapMarkerAlt className="text-xs" />
                            <span>Campus Venue</span>
                        </h4>
                        <p className="text-gray-300 font-montserrat text-xs sm:text-sm leading-relaxed mb-4">
                            Mewar University Campus<br />
                            NH-79, Gangrar, Chittorgarh<br />
                            Rajasthan, India — 312901
                        </p>
                        <a
                            href="https://maps.google.com/?q=Mewar+University+Gangrar+Chittorgarh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-cyan-400 hover:text-cyan-300"
                        >
                            <span>Open in Google Maps</span>
                            <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <p className="text-gray-400 font-montserrat text-xs">
                        © 2026 MU HackSphere • Department of Computer Science &amp; Engineering, Mewar University. All Rights Reserved.
                    </p>
                    <p className="text-gray-400 font-mono text-xs">
                        Sprint Date: <strong className="text-cyan-400">15th October 2026</strong>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
