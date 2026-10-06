import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaCode, FaUsers, FaUser, FaExternalLinkAlt, FaRocket, FaPhoneAlt, FaEnvelope, FaIdCard, FaGraduationCap, FaWhatsapp, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ParticleNetwork from './ParticleNetwork';

// ─────────────────────────────────────────────────────────────────────────────
// Official Google Form & WhatsApp Configuration
// Form URL: https://docs.google.com/forms/d/e/1FAIpQLScn0bpxbmJSNR04XFvlZfOafHxUJVAbUAtNjylNikYVdjkn1g/viewform
// WhatsApp Link: https://chat.whatsapp.com/CnmHyFKCjxn10wdvXFH7Vy
// ─────────────────────────────────────────────────────────────────────────────
const GOOGLE_FORM_BASE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScn0bpxbmJSNR04XFvlZfOafHxUJVAbUAtNjylNikYVdjkn1g/viewform';
const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/CnmHyFKCjxn10wdvXFH7Vy';

const STORAGE_REGISTRATIONS_KEY = 'mu_hacksphere_registered_teams';
const STORAGE_USER_SESSION_KEY = 'mu_hacksphere_user_session';

// Official entry IDs extracted from Google Form structure:
const ENTRY = {
    teamName:        'entry.126267137',   // Team Name (Required)
    leaderPhone:     'entry.1565320793',  // Mobile Number(Leader) (Required)
    leaderEmail:     'entry.336277876',   // E-mail (Leader) (Required)
    leaderName:      'entry.315526497',   // Member-1 Name (Leader) (Required)
    leaderRoll:      'entry.2137568525',  // Member-1 Enrollment Number (Required)
    leaderBranch:    'entry.1739319420',  // Member-1 Course/Branch and Year (Required)
    member2Name:     'entry.1164433296',  // Member-2 Name (Required)
    member2Roll:     'entry.2005620554',  // Member-2 Enrollment Number (Required)
    member2Branch:   'entry.627876046',   // Member-2 Course/Branch and Year (Required)
    member3Name:     'entry.1065046570',  // Member-3 Name (Optional)
    member3Roll:     'entry.1166974658',  // Member-3 Enrollment Number (Optional)
    member3Branch:   'entry.2056787770',  // Member-3 Course/Branch and Year (Optional)
};

interface RegistrationRecord {
    teamName: string;
    leaderEmail: string;
    leaderName: string;
    timestamp: number;
    prefilledUrl?: string;
}

const getInitialSession = (): RegistrationRecord | null => {
    try {
        const raw = localStorage.getItem(STORAGE_USER_SESSION_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
};

const RegistrationPage: React.FC = () => {
    const initialSession = getInitialSession();

    // Form fields mapped 1:1 to the Google Form
    const [teamName, setTeamName] = useState(initialSession?.teamName || "");
    const [leaderPhone, setLeaderPhone] = useState("");
    const [leaderEmail, setLeaderEmail] = useState(initialSession?.leaderEmail || "");
    const [leaderName, setLeaderName] = useState(initialSession?.leaderName || "");
    const [leaderRoll, setLeaderRoll] = useState("");
    const [leaderBranch, setLeaderBranch] = useState("");

    const [member2Name, setMember2Name] = useState("");
    const [member2Roll, setMember2Roll] = useState("");
    const [member2Branch, setMember2Branch] = useState("");

    const [includeMember3, setIncludeMember3] = useState(false);
    const [member3Name, setMember3Name] = useState("");
    const [member3Roll, setMember3Roll] = useState("");
    const [member3Branch, setMember3Branch] = useState("");

    const [prefilledUrl, setPrefilledUrl] = useState(initialSession?.prefilledUrl || "");
    const [submitted, setSubmitted] = useState(!!initialSession);
    const [duplicateError, setDuplicateError] = useState("");
    const [registeredRecord, setRegisteredRecord] = useState<RegistrationRecord | null>(initialSession);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Get all existing registrations from storage
    const getStoredRegistrations = (): RegistrationRecord[] => {
        try {
            const raw = localStorage.getItem(STORAGE_REGISTRATIONS_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    };

    // Build the prefilled Google Form URL
    const buildPrefilledUrl = () => {
        const params = new URLSearchParams();
        params.set('usp', 'pp_url');
        params.set(ENTRY.teamName, teamName.trim());
        params.set(ENTRY.leaderPhone, leaderPhone.trim());
        params.set(ENTRY.leaderEmail, leaderEmail.trim());
        params.set(ENTRY.leaderName, leaderName.trim());
        params.set(ENTRY.leaderRoll, leaderRoll.trim());
        params.set(ENTRY.leaderBranch, leaderBranch.trim());

        params.set(ENTRY.member2Name, member2Name.trim());
        params.set(ENTRY.member2Roll, member2Roll.trim());
        params.set(ENTRY.member2Branch, member2Branch.trim());

        if (includeMember3 && member3Name.trim()) {
            params.set(ENTRY.member3Name, member3Name.trim());
            params.set(ENTRY.member3Roll, member3Roll.trim());
            params.set(ENTRY.member3Branch, member3Branch.trim());
        }

        return `${GOOGLE_FORM_BASE_URL}?${params.toString()}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setDuplicateError("");

        const trimmedTeam = teamName.trim().toLowerCase();
        const trimmedEmail = leaderEmail.trim().toLowerCase();

        // 1. Check duplicate Team Name or Email in existing storage
        const allRegistrations = getStoredRegistrations();

        const duplicateTeam = allRegistrations.find(
            r => r.teamName.trim().toLowerCase() === trimmedTeam
        );
        if (duplicateTeam) {
            setDuplicateError(`A team with the name "${teamName.trim()}" is already registered! Each team must have a unique name.`);
            return;
        }

        const duplicateEmail = allRegistrations.find(
            r => r.leaderEmail.trim().toLowerCase() === trimmedEmail
        );
        if (duplicateEmail) {
            setDuplicateError(`The email "${leaderEmail.trim()}" has already been used for registration! Each team leader can register only once.`);
            return;
        }

        // 2. Generate prefilled Google Form URL
        const url = buildPrefilledUrl();
        setPrefilledUrl(url);

        // 3. Save new registration record to localStorage so they cannot re-fill with same team name/email
        const newRecord: RegistrationRecord = {
            teamName: teamName.trim(),
            leaderEmail: leaderEmail.trim(),
            leaderName: leaderName.trim(),
            timestamp: Date.now(),
            prefilledUrl: url,
        };

        try {
            allRegistrations.push(newRecord);
            localStorage.setItem(STORAGE_REGISTRATIONS_KEY, JSON.stringify(allRegistrations));
            localStorage.setItem(STORAGE_USER_SESSION_KEY, JSON.stringify(newRecord));
        } catch (err) {
            console.error("Error writing to localStorage:", err);
        }

        setRegisteredRecord(newRecord);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // 4. Open the prefilled Google Form in a new tab
        window.open(url, '_blank');
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
                        href={GOOGLE_FORM_BASE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 border border-purple-500/40 text-purple-200 rounded-xl font-montserrat text-xs font-bold hover:brightness-125 transition-all shadow-md"
                    >
                        <span>Official Google Form</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                </div>

                {/* Page Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 font-mono text-xs font-bold uppercase mb-3">
                        <FaCode />
                        <span>Mewar University • Dept. of CSE</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 tracking-tight mb-3">
                        TEAM REGISTRATION
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 font-montserrat max-w-xl mx-auto">
                        Official registration for <strong>MU HackSphere 2026</strong> (Interdepartmental 8-Hour Sprint on <strong>17th October 2026</strong>). Registration closes on <strong>15th October 2026</strong>.
                    </p>
                </motion.div>

                {/* Success Confirmation / WhatsApp Group Card */}
                <AnimatePresence>
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-slate-900/95 backdrop-blur-2xl border-2 border-cyan-400/50 rounded-3xl p-6 sm:p-10 text-center shadow-2xl shadow-cyan-950/80 mb-12"
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center mx-auto mb-5 text-3xl sm:text-4xl text-emerald-300 shadow-lg shadow-emerald-500/20">
                                <FaCheckCircle />
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-exo font-black text-white mb-2">
                                REGISTRATION RECORDED!
                            </h2>
                            <p className="text-sm sm:text-base font-montserrat text-cyan-300 font-semibold mb-6">
                                Team: <span className="text-white font-bold">{registeredRecord?.teamName || teamName || "Your Team"}</span> • Leader: <span className="text-white font-bold">{registeredRecord?.leaderName || leaderName}</span>
                            </p>

                            {/* ═══════════════════════════════════════════════════ */}
                            {/* OFFICIAL WHATSAPP GROUP INVITATION CARD */}
                            {/* ═══════════════════════════════════════════════════ */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-br from-emerald-950/90 via-slate-900/95 to-teal-950/90 border-2 border-emerald-400/60 rounded-3xl p-6 sm:p-8 text-center shadow-2xl shadow-emerald-950/60 relative overflow-hidden mb-8"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                                
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-300 font-mono text-xs font-bold uppercase mb-4">
                                    <FaWhatsapp className="text-base text-emerald-400" />
                                    <span>Mandatory Step</span>
                                </div>

                                <h3 className="text-xl sm:text-3xl font-exo font-black text-white mb-2">
                                    Join Participants WhatsApp Group
                                </h3>
                                
                                <p className="text-xs sm:text-sm text-gray-200 font-montserrat max-w-lg mx-auto mb-6 leading-relaxed">
                                    All official hackathon announcements, 8-hour sprint problem statements, lab seating, mentor allocations, and timeline reminders will be shared exclusively in this WhatsApp group.
                                </p>

                                <a
                                    href={WHATSAPP_GROUP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-montserrat font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
                                >
                                    <FaWhatsapp className="text-2xl text-slate-950" />
                                    <span>Join WhatsApp Group Now</span>
                                    <FaExternalLinkAlt className="text-xs text-slate-950" />
                                </a>

                                <p className="text-[11px] font-mono text-emerald-400/80 mt-3 break-all">
                                    {WHATSAPP_GROUP_URL}
                                </p>
                            </motion.div>

                            {/* Google Form Final Submission Banner */}
                            <div className="bg-yellow-500/10 border border-yellow-500/40 rounded-2xl p-4 max-w-xl mx-auto mb-6 text-left">
                                <p className="text-xs sm:text-sm text-yellow-200 font-montserrat leading-relaxed">
                                    <strong>Important:</strong> Your details were pre-filled into the official Google Form in a new tab. If the tab did not open, click the button below to submit your pre-filled form into the official Google Sheet:
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
                                <a
                                    href={prefilledUrl || buildPrefilledUrl()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-montserrat font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
                                >
                                    <span>Re-open Pre-filled Google Form</span>
                                    <FaExternalLinkAlt className="text-xs" />
                                </a>

                                <button
                                    onClick={() => {
                                        // Allow entering a fresh team if user explicitly clicks, but storage prevents re-using same team name/email
                                        setSubmitted(false);
                                        setTeamName("");
                                        setLeaderEmail("");
                                        setLeaderPhone("");
                                        setLeaderName("");
                                        setLeaderRoll("");
                                        setLeaderBranch("");
                                        setMember2Name("");
                                        setMember2Roll("");
                                        setMember2Branch("");
                                        setMember3Name("");
                                        setMember3Roll("");
                                        setMember3Branch("");
                                        setIncludeMember3(false);
                                        setDuplicateError("");
                                    }}
                                    className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 text-gray-300 font-montserrat font-semibold text-xs sm:text-sm rounded-xl hover:bg-slate-700 transition-colors"
                                >
                                    Register Another Team
                                </button>
                            </div>

                            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 max-w-md mx-auto text-left">
                                <h4 className="font-mono text-[11px] font-bold uppercase text-gray-400 mb-2">
                                    Organizing Faculty Coordinators:
                                </h4>
                                <p className="text-xs text-gray-300 font-montserrat mb-1">
                                    <strong>Mr. B.L. Pal (HOD, CSE):</strong> +91 98871 64480
                                </p>
                                <p className="text-xs text-gray-300 font-montserrat">
                                    <strong>Mr. Dilip Memariya (Faculty Coord):</strong> +91 86194 97775
                                </p>
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
                            {/* Duplicate Warning Alert */}
                            {duplicateError && (
                                <div className="p-4 rounded-2xl bg-red-950/80 border-2 border-red-500/60 flex items-start gap-3 text-red-200">
                                    <FaExclamationTriangle className="text-red-400 text-xl shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-exo font-bold text-red-300 mb-1">
                                            Duplicate Registration Blocked
                                        </h4>
                                        <p className="text-xs font-montserrat leading-relaxed">
                                            {duplicateError}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Section 1: Team Info */}
                            <div>
                                <h3 className="font-exo font-bold text-lg text-cyan-300 mb-4 flex items-center gap-2 pb-2 border-b border-slate-800">
                                    <FaUsers />
                                    <span>1. Team Name</span>
                                </h3>

                                <div>
                                    <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                        Team Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={teamName}
                                        onChange={(e) => {
                                            setTeamName(e.target.value);
                                            if (duplicateError) setDuplicateError("");
                                        }}
                                        placeholder="e.g., CodeKnights, BinaryBeasts"
                                        className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                    />
                                    <span className="text-[11px] text-gray-400 font-montserrat mt-1 block">
                                        Must be unique across all participating teams.
                                    </span>
                                </div>
                            </div>

                            {/* Section 2: Team Leader (Member 1) */}
                            <div>
                                <h3 className="font-exo font-bold text-lg text-cyan-300 mb-4 flex items-center gap-2 pb-2 border-b border-slate-800">
                                    <FaUser />
                                    <span>2. Member-1 (Team Leader)</span>
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                            Member-1 Full Name (Leader) *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={leaderName}
                                            onChange={(e) => setLeaderName(e.target.value)}
                                            placeholder="Leader Full Name"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2 flex items-center gap-1.5">
                                            <FaPhoneAlt className="text-[10px] text-cyan-400" />
                                            <span>Mobile Number (Leader) *</span>
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={leaderPhone}
                                            onChange={(e) => setLeaderPhone(e.target.value)}
                                            placeholder="e.g., 9876543210"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2 flex items-center gap-1.5">
                                            <FaEnvelope className="text-[10px] text-cyan-400" />
                                            <span>E-mail (Leader) *</span>
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={leaderEmail}
                                            onChange={(e) => {
                                                setLeaderEmail(e.target.value);
                                                if (duplicateError) setDuplicateError("");
                                            }}
                                            placeholder="leader@mewaruniversity.org"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                        <span className="text-[11px] text-gray-400 font-montserrat mt-1 block">
                                            Only one registration permitted per leader email.
                                        </span>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2 flex items-center gap-1.5">
                                            <FaIdCard className="text-[10px] text-cyan-400" />
                                            <span>Member-1 Enrollment Number *</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={leaderRoll}
                                            onChange={(e) => setLeaderRoll(e.target.value)}
                                            placeholder="e.g., MUR2201452"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2 flex items-center gap-1.5">
                                            <FaGraduationCap className="text-[10px] text-cyan-400" />
                                            <span>Member-1 Course/Branch and Year *</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={leaderBranch}
                                            onChange={(e) => setLeaderBranch(e.target.value)}
                                            placeholder="e.g., B.Tech CSE 2nd Year"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Member 2 (Required) */}
                            <div>
                                <h3 className="font-exo font-bold text-lg text-cyan-300 mb-4 flex items-center gap-2 pb-2 border-b border-slate-800">
                                    <FaUser />
                                    <span>3. Member-2 (Mandatory)</span>
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                            Member-2 Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={member2Name}
                                            onChange={(e) => setMember2Name(e.target.value)}
                                            placeholder="Member 2 Full Name"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                            Member-2 Enrollment Number *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={member2Roll}
                                            onChange={(e) => setMember2Roll(e.target.value)}
                                            placeholder="e.g., MUR2401890"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                            Member-2 Course/Branch &amp; Year *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={member2Branch}
                                            onChange={(e) => setMember2Branch(e.target.value)}
                                            placeholder="e.g., B.Tech CSE 1st Year"
                                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Member 3 (Optional) */}
                            <div>
                                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-4">
                                    <h3 className="font-exo font-bold text-lg text-cyan-300 flex items-center gap-2">
                                        <FaUser />
                                        <span>4. Member-3 (Optional)</span>
                                    </h3>
                                    <label className="inline-flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={includeMember3}
                                            onChange={(e) => setIncludeMember3(e.target.checked)}
                                            className="w-4 h-4 accent-cyan-400 rounded cursor-pointer"
                                        />
                                        <span className="text-xs font-montserrat text-gray-300">Add 3rd Member</span>
                                    </label>
                                </div>

                                {includeMember3 && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                                    >
                                        <div>
                                            <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                                Member-3 Name
                                            </label>
                                            <input
                                                type="text"
                                                value={member3Name}
                                                onChange={(e) => setMember3Name(e.target.value)}
                                                placeholder="Member 3 Full Name"
                                                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                                Member-3 Enrollment Number
                                            </label>
                                            <input
                                                type="text"
                                                value={member3Roll}
                                                onChange={(e) => setMember3Roll(e.target.value)}
                                                placeholder="e.g., MUR2302110"
                                                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                                                Member-3 Course/Branch &amp; Year
                                            </label>
                                            <input
                                                type="text"
                                                value={member3Branch}
                                                onChange={(e) => setMember3Branch(e.target.value)}
                                                placeholder="e.g., B.Tech CSE 2nd Year"
                                                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-xs text-gray-400 font-montserrat text-center sm:text-left">
                                    Submitting locks your Team Name &amp; Email, pre-fills the official Google Form, and directs you to the official WhatsApp Group.
                                </p>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-montserrat font-black text-sm sm:text-base rounded-xl shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all duration-300 cursor-pointer"
                                >
                                    <FaRocket />
                                    <span>Complete Registration &amp; Join Group</span>
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
