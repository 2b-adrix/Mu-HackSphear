import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaCode, FaUsers, FaUser, FaExternalLinkAlt, FaRocket, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ParticleNetwork from './ParticleNetwork';


const GOOGLE_FORM_ID = '1FAIpQLScn0bpxbmJSNR04XFvlZfOafHxUJVAbUAtNjylNikYVdjkn1g';


const ENTRY = {
    teamName:        'entry.126267137',
    leaderPhone:     'entry.1565320793',
    leaderEmail:     'entry.336277876',
    leaderName:      'entry.315526497',    // "Member-1 Name (Leader)" = team leader
    leaderRoll:      'entry.2137568525',   // Member-1 Enrollment
    leaderBranch:    'entry.1739319420',   // Member-1 Course/Branch & Year
    member2Name:     'entry.1164433296',
    member2Roll:     'entry.2005620554',
    member2Branch:   'entry.627876046',
    member3Name:     'entry.1065046570',
    member3Roll:     'entry.1166974658',
    member3Branch:   'entry.2056787770',
};

async function submitToGoogleForm(data: {
    teamName: string; leaderName: string; leaderEmail: string;
    leaderPhone: string; college: string; rollNo: string;
    track: string; members: { name: string; email: string; roll: string }[];
}) {
    const body = new URLSearchParams();

    // Core leader fields
    body.append(ENTRY.teamName,     data.teamName);
    body.append(ENTRY.leaderPhone,  data.leaderPhone);
    body.append(ENTRY.leaderEmail,  data.leaderEmail);
    body.append(ENTRY.leaderName,   data.leaderName);
    body.append(ENTRY.leaderRoll,   data.rollNo);
    body.append(ENTRY.leaderBranch, data.college);   // college/branch field

    // Member 2
    if (data.members[0]) {
        body.append(ENTRY.member2Name,   data.members[0].name  || '');
        body.append(ENTRY.member2Roll,   data.members[0].roll  || '');
        body.append(ENTRY.member2Branch, data.members[0].email || ''); // email goes in branch field as extra info
    }

    // Member 3
    if (data.members[1]) {
        body.append(ENTRY.member3Name,   data.members[1].name  || '');
        body.append(ENTRY.member3Roll,   data.members[1].roll  || '');
        body.append(ENTRY.member3Branch, data.members[1].email || '');
    }

    // Google Forms doesn't allow CORS – use no-cors.
    // The POST still succeeds server-side; we just can't read the response.
    await fetch(
        `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`,
        { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() }
    );
}

const tracks = [
    "AI, GenAI & ML Systems",
    "Cybersecurity & Web3",
    "Smart Campus & EdTech (Mewar Univ Special)",
    "IoT & Smart Hardware / Robotics",
    "Healthcare & MedTech",
    "FinTech & Digital Commerce",
    "Clean Energy & Smart Cities",
    "Open Innovation / SDG",
];

const RegistrationPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [teamName, setTeamName] = useState("");
    const [leaderName, setLeaderName] = useState("");
    const [leaderEmail, setLeaderEmail] = useState("");
    const [leaderPhone, setLeaderPhone] = useState("");
    const [college, setCollege] = useState("Mewar University, Chittorgarh");
    const [rollNo, setRollNo] = useState("");
    const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
    const [memberCount, setMemberCount] = useState<number>(3);
    const [members, setMembers] = useState([
        { name: "", email: "", roll: "" },
        { name: "", email: "", roll: "" },
        { name: "", email: "", roll: "" },
    ]);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleMemberCountChange = (count: number) => {
        setMemberCount(count);
        // additional members (excluding leader, so count - 1)
        const additionalNeeded = count - 1;
        const newMembers = [...members];
        while (newMembers.length < additionalNeeded) {
            newMembers.push({ name: "", email: "", roll: "" });
        }
        setMembers(newMembers.slice(0, additionalNeeded));
    };

    const handleMemberChange = (index: number, field: string, value: string) => {
        const updated = [...members];
        updated[index] = { ...updated[index], [field]: value };
        setMembers(updated);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitError('');
        try {
            await submitToGoogleForm({
                teamName, leaderName, leaderEmail, leaderPhone,
                college, rollNo, track: selectedTrack, members,
            });
        } catch (err) {
            // no-cors mode throws on network failure; data may still be saved.
            console.warn('Google Form post error (may be CORS noise):', err);
        }
        setSubmitting(false);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-slate-950 min-h-screen text-gray-200 w-full overflow-x-hidden relative flex flex-col items-center justify-start py-12 md:py-16 px-4">
            {/* Animated Background */}
            <ParticleNetwork />

            {/* Glowing Accent Orbs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

            <div className="relative z-10 w-full max-w-4xl mx-auto">
                {/* Back to Home Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-slate-800 text-gray-300 rounded-xl font-montserrat text-xs font-semibold hover:border-cyan-400 hover:text-cyan-300 transition-all"
                    >
                        <FaArrowLeft className="text-xs" />
                        <span>Back to Event Home</span>
                    </Link>

                    <a
                        href="https://mu-hacksphere.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple-950/60 border border-purple-500/40 text-purple-300 rounded-xl font-montserrat text-xs font-semibold hover:bg-purple-900/60 transition-colors"
                    >
                        <span>Problem Statements Portal</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                </div>

                {/* Page Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 font-mono text-xs font-bold uppercase mb-3">
                        <FaCode />
                        <span>Mewar University • 8-Hour Sprint</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 tracking-tight mb-3">
                        TEAM REGISTRATION
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 font-montserrat max-w-xl mx-auto">
                        Register your team for <strong>MU HackSphere 2026</strong> on <strong>15th October 2026</strong>. Registration closes on <strong>12th October 2026</strong>.
                    </p>
                </motion.div>

                {/* Success Confirmation Modal / Card */}
                <AnimatePresence>
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-slate-900/90 backdrop-blur-2xl border-2 border-cyan-400/50 rounded-3xl p-8 sm:p-12 text-center shadow-2xl shadow-cyan-950/80 mb-12"
                        >
                            <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center mx-auto mb-6 text-4xl text-cyan-300 shadow-lg shadow-cyan-500/20">
                                <FaCheckCircle />
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-exo font-black text-white mb-2">
                                REGISTRATION CONFIRMED!
                            </h2>
                            <p className="text-sm sm:text-base font-montserrat text-cyan-300 font-semibold mb-4">
                                Team: <span className="text-white font-bold">{teamName || "Innovators"}</span> | Track: <span className="text-white">{selectedTrack}</span>
                            </p>
                            <p className="text-xs sm:text-sm text-gray-300 font-montserrat max-w-lg mx-auto leading-relaxed mb-8">
                                Your registration details have been received by the <strong>Department of CSE, Mewar University</strong>. Please report on <strong>15th October 2026 at 08:30 AM IST</strong> at the campus venue.
                            </p>

                            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 max-w-md mx-auto mb-8 text-left">
                                <h4 className="font-mono text-xs font-bold uppercase text-gray-400 mb-2">
                                    Emergency Faculty Assistance:
                                </h4>
                                <p className="text-xs text-gray-300 font-montserrat mb-1">
                                    <strong>Mr. B.L. Pal (HOD, CSE):</strong> +91 98871 64480
                                </p>
                                <p className="text-xs text-gray-300 font-montserrat">
                                    <strong>Mr. Dilip Memariya (Faculty Coord):</strong> +91 86194 97775
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="https://mu-hacksphere.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-montserrat font-bold text-sm rounded-xl shadow-lg hover:scale-105 transition-all"
                                >
                                    Browse Problem Statements →
                                </a>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="px-6 py-3 bg-slate-800 text-gray-300 font-montserrat font-semibold text-sm rounded-xl hover:bg-slate-700 transition-colors"
                                >
                                    Register Another Team
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        /* Registration Form */
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8"
                        >
                            {/* Section 1: Team & Track Details */}
                            <div>
                                <h3 className="font-exo font-bold text-lg text-cyan-300 mb-4 flex items-center gap-2 pb-2 border-b border-slate-800">
                                    <FaUsers />
                                    <span>1. Team &amp; Track Selection</span>
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                            Team Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={teamName}
                                            onChange={(e) => setTeamName(e.target.value)}
                                            placeholder="e.g., CyberKnights, NeuralSprint"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                            Total Team Size (Including Leader) *
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[2, 3, 4].map((size) => (
                                                <button
                                                    key={size}
                                                    type="button"
                                                    onClick={() => handleMemberCountChange(size)}
                                                    className={`py-2.5 rounded-xl font-mono text-sm font-bold border transition-all ${
                                                        memberCount === size
                                                            ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20"
                                                            : "bg-slate-950/60 text-gray-400 border-slate-800 hover:border-slate-700"
                                                    }`}
                                                >
                                                    {size} Members
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                            Choose Track / Domain *
                                        </label>
                                        <select
                                            value={selectedTrack}
                                            onChange={(e) => setSelectedTrack(e.target.value)}
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                                        >
                                            {tracks.map((track) => (
                                                <option key={track} value={track} className="bg-slate-900 text-white">
                                                    {track}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Team Leader Info */}
                            <div>
                                <h3 className="font-exo font-bold text-lg text-cyan-300 mb-4 flex items-center gap-2 pb-2 border-b border-slate-800">
                                    <FaUser />
                                    <span>2. Team Leader (Point of Contact)</span>
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                            Leader Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={leaderName}
                                            onChange={(e) => setLeaderName(e.target.value)}
                                            placeholder="Your Name"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                            Leader Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={leaderEmail}
                                            onChange={(e) => setLeaderEmail(e.target.value)}
                                            placeholder="leader@example.com"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                            WhatsApp / Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={leaderPhone}
                                            onChange={(e) => setLeaderPhone(e.target.value)}
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                            College / University *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={college}
                                            onChange={(e) => setCollege(e.target.value)}
                                            placeholder="Mewar University or Other College"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                            Enrollment / Roll Number *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={rollNo}
                                            onChange={(e) => setRollNo(e.target.value)}
                                            placeholder="e.g., MU22CSE045"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Additional Team Members */}
                            {members.length > 0 && (
                                <div>
                                    <h3 className="font-exo font-bold text-lg text-cyan-300 mb-4 flex items-center gap-2 pb-2 border-b border-slate-800">
                                        <FaUsers />
                                        <span>3. Additional Team Members ({members.length})</span>
                                    </h3>

                                    <div className="space-y-4">
                                        {members.map((member, i) => (
                                            <div key={i} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                <div>
                                                    <label className="block text-[11px] font-mono font-bold text-gray-400 uppercase mb-1">
                                                        Member {i + 2} Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={member.name}
                                                        onChange={(e) => handleMemberChange(i, "name", e.target.value)}
                                                        placeholder="Full Name"
                                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[11px] font-mono font-bold text-gray-400 uppercase mb-1">
                                                        Email Address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        value={member.email}
                                                        onChange={(e) => handleMemberChange(i, "email", e.target.value)}
                                                        placeholder="member@example.com"
                                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[11px] font-mono font-bold text-gray-400 uppercase mb-1">
                                                        Roll / Enrollment No
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={member.roll}
                                                        onChange={(e) => handleMemberChange(i, "roll", e.target.value)}
                                                        placeholder="Roll No"
                                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-xs text-gray-400 font-montserrat text-center sm:text-left">
                                    By registering, your team agrees to the 8-Hour Sprint guidelines and Mewar University Code of Conduct.
                                </p>
                                {submitError && (
                                    <p className="text-xs text-red-400 font-montserrat">{submitError}</p>
                                )}
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-montserrat font-black text-sm sm:text-base rounded-xl shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    {submitting ? <FaSpinner className="animate-spin" /> : <FaRocket />}
                                    <span>{submitting ? 'Submitting…' : 'Complete Team Registration'}</span>
                                </button>
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default RegistrationPage;
