import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaCrown, FaUserShield, FaChalkboardTeacher, FaUsers, FaLinkedin } from "react-icons/fa";

import imgRahul from "../assets/Organizing team/Rahul sir.webp";
import imgMahesh from "../assets/Organizing team/Mahesh_Bundele sir.jpg";
import imgPankaj from "../assets/Organizing team/Pankaj Dhemla Sir.jpg";
import imgNikita from "../assets/Organizing team/Nikita Ma'am.jpeg";
import imgGajendra from "../assets/Organizing team/Gajendra Sir.jpg";
import imgAmol from "../assets/Organizing team/Amol Saxena Sir.jpg";
import imgAmitGupta from "../assets/Organizing team/amit gupta sir.jpg";
import imgAmitKumar from "../assets/Organizing team/Amit Kumar sir.jpeg";
import imgSachin from "../assets/Organizing team/Sachin Jain sir.jpeg";
import imgUpma from "../assets/Organizing team/Upma Kumari ma'am.jpg";
import imgApoorva from "../assets/Organizing team/Apoorva Bansal.jpeg";
import imgNayan from "../assets/Organizing team/Nayan Mathur.jpg";
import imgDev from "../assets/Organizing team/Dev Sharma.jpeg";
import imgPrakhar from "../assets/Organizing team/Prakhar Mathur.jpg";
import imgNihal from "../assets/Organizing team/Nihal Gupta.jpg";

interface TeamMember {
    name: string;
    designation: string;
    department?: string;
    institution?: string;
    image?: string;
    linkedin?: string;
}

interface TeamCategory {
    title: string;
    icon: React.ReactNode;
    gradient: string;
    borderColor: string;
    textColor: string;
    badgeColor: string;
    members: TeamMember[];
}

const teamData: TeamCategory[] = [
    {
        title: "Chief Patron",
        icon: <FaCrown className="text-xl" />,
        gradient: "from-amber-50 via-yellow-50 to-orange-50",
        borderColor: "border-amber-300",
        textColor: "text-amber-700",
        badgeColor: "bg-amber-100 text-amber-800",
        members: [
            {
                name: "Ar. Rahul Singhi",
                designation: "Director of Poornima Group",
                institution: "Poornima Group, Jaipur",
                image: imgRahul,
                linkedin: "https://www.linkedin.com/in/singhirahul/",
            },
        ],
    },
    {
        title: "Patrons",
        icon: <FaUserShield className="text-xl" />,
        gradient: "from-blue-50 via-indigo-50 to-violet-50",
        borderColor: "border-indigo-300",
        textColor: "text-indigo-700",
        badgeColor: "bg-indigo-100 text-indigo-800",
        members: [
            {
                name: "Dr. Mahesh Bundele",
                designation: "Director and Principal",
                institution: "PCE, Jaipur",
                image: imgMahesh,
                linkedin: "https://www.linkedin.com/in/dr-mahesh-bundele-b45a8815/",
            },
            {
                name: "Dr. Pankaj Dhemla",
                designation: "Vice Principal",
                institution: "PCE, Jaipur",
                image: imgPankaj,
                linkedin: "https://www.linkedin.com/in/dr-pankaj-dhemla-2a3ab576/",
            },
        ],
    },
    {
        title: "Convenors",
        icon: <FaChalkboardTeacher className="text-xl" />,
        gradient: "from-emerald-50 via-teal-50 to-cyan-50",
        borderColor: "border-teal-300",
        textColor: "text-teal-700",
        badgeColor: "bg-teal-100 text-teal-800",
        members: [
            {
                name: "Dr. Nikita Jain",
                designation: "Professor and Head",
                department: "Department of Computer Engineering",
                institution: "PCE, Jaipur",
                image: imgNikita,
                linkedin: "https://www.linkedin.com/in/dr-nikita-jain-054953295/",
            },
            {
                name: "Dr. Gajendra Rajawat",
                designation: "Professor and Head",
                department: "Department of Information Technology",
                institution: "PCE, Jaipur",
                image: imgGajendra,
                linkedin: "https://www.linkedin.com/in/dr-gajendra-rajawat/",
            },
            {
                name: "Dr. Amol Saxena",
                designation: "Professor and Head",
                department: "Department of Advance Computing",
                institution: "PCE, Jaipur",
                image: imgAmol,
                linkedin: "https://www.linkedin.com/in/amol-saxena-322b10b9/",
            },
            {
                name: "Dr. Amit Gupta",
                designation: "Chief Proctor",
                institution: "PCE, Jaipur",
                image: imgAmitGupta,
                linkedin: "https://www.linkedin.com/in/dr-amit-gupta-a4201322a/",
            },
            {
                name: "Mr. Amit Kumar",
                designation: "Assistant Professor",
                department: "Department of Computer Engineering",
                institution: "PCE, Jaipur",
                image: imgAmitKumar,
                linkedin: "https://www.linkedin.com/in/amit-kumar-011004254/",
            },
            {
                name: "Mr. Sachin Jain",
                designation: "Assistant Professor",
                department: "Department of Computer Engineering",
                institution: "PCE, Jaipur",
                image: imgSachin,
                linkedin: "https://www.linkedin.com/in/sachin-jain-a5b51033/",
            },
            {
                name: "Ms. Upma Kumari",
                designation: "Assistant Professor",
                department: "Department of Computer Engineering",
                institution: "PCE, Jaipur",
                image: imgUpma,
            },
            {
                name: "Ms. Appoorva Bansal",
                designation: "Assistant Professor",
                department: "Department of Advance Computing",
                institution: "PCE, Jaipur",
                image: imgApoorva,
                linkedin: "https://www.linkedin.com/in/appoorvabansal11/",
            },
        ],
    },
    {
        title: "Student Coordinators",
        icon: <FaUsers className="text-xl" />,
        gradient: "from-rose-50 via-pink-50 to-fuchsia-50",
        borderColor: "border-rose-300",
        textColor: "text-rose-700",
        badgeColor: "bg-rose-100 text-rose-800",
        members: [
            {
                name: "Nayan Mathur",
                designation: "Tech Lead, 2nd Year",
                department: "Department of Computer Engineering",
                image: imgNayan,
                linkedin: "https://www.linkedin.com/in/nayan-mathur-a4008b209/",
            },
            {
                name: "Dev Sharma",
                designation: "Tech Lead, 2nd Year",
                department: "Department of Computer Engineering",
                image: imgDev,
                linkedin: "https://www.linkedin.com/in/dev-sharma-732510330/",
            },
            {
                name: "Prakhar Mathur",
                designation: "Tech Lead, 2nd Year",
                department: "Department of Computer Engineering",
                image: imgPrakhar,
                linkedin: "https://www.linkedin.com/in/prakhar-mathur-498402275/",
            },
            {
                name: "Nihal Gupta",
                designation: "Tech Lead, 2nd Year",
                department: "Department of Computer Engineering",
                image: imgNihal,
                linkedin: "https://www.linkedin.com/in/nihal-gupta-g2506/",
            },
        ],
    },
];

const OrganizingTeam = () => {
    const { ref, isInView } = useSectionInView();

    return (
        <section id="organizing-team" className="pt-6 pb-12 md:pt-10 md:pb-20 bg-off-white/70 relative overflow-hidden">
            {/* Subtle background decorations */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-exo font-bold text-neon-blue mb-4">
                        Organizing Team
                    </h2>
                    <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full" />
                    <p className="mt-4 text-gray-500 font-montserrat text-sm md:text-base max-w-2xl mx-auto">
                        Meet the dedicated team behind TechnoTarang who make this event possible
                    </p>
                </motion.div>

                <div ref={ref} className="space-y-8 md:space-y-12 max-w-6xl mx-auto">
                    {teamData.map((category, catIdx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${category.badgeColor} font-montserrat font-bold text-sm md:text-base`}>
                                    {category.icon}
                                    {category.title}
                                </div>
                                <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                            </div>

                            {/* Members Grid */}
                            <div className={`grid gap-4 ${
                                category.members.length === 1
                                    ? "grid-cols-1 max-w-md mx-auto"
                                    : category.members.length === 2
                                    ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
                                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                            }`}>
                                {category.members.map((member, memIdx) => (
                                    <motion.div
                                        key={member.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, delay: catIdx * 0.15 + memIdx * 0.07 }}
                                        className={`bg-gradient-to-br ${category.gradient} border-2 ${category.borderColor} rounded-2xl p-5 md:p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full items-center text-center`}
                                    >
                                        {/* Decorative glow on hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none" />

                                        <div className="relative z-10 flex flex-col items-center flex-1 w-full">
                                            {/* Avatar Image or Initials */}
                                            {member.image ? (
                                                <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full border-4 ${category.borderColor} p-1 mb-4 shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0 bg-white`}>
                                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-[center_15%] rounded-full" />
                                                </div>
                                            ) : (
                                                <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full border-4 ${category.borderColor} flex items-center justify-center mb-4 bg-white/80 shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
                                                    <span className={`font-exo font-bold text-2xl ${category.textColor}`}>
                                                        {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                                                    </span>
                                                </div>
                                            )}

                                            <div className="flex flex-col flex-1 justify-center items-center">
                                                <h4 className="font-exo font-bold text-gray-800 text-sm md:text-base mb-1 group-hover:text-neon-blue transition-colors duration-300 leading-tight">
                                                    {member.name}
                                                </h4>
                                                <p className={`font-montserrat font-semibold text-xs md:text-sm ${category.textColor} mb-1 leading-snug`}>
                                                    {member.designation}
                                                </p>
                                                {member.department && (
                                                    <p className="font-montserrat text-xs text-gray-500 leading-snug">
                                                        {member.department}
                                                    </p>
                                                )}
                                                {member.institution && (
                                                    <p className="font-montserrat text-xs text-gray-400 mt-1 leading-snug">
                                                        {member.institution}
                                                    </p>
                                                )}
                                                {member.linkedin && (
                                                    <a
                                                        href={member.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`mt-3 text-xl ${category.textColor} opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-300`}
                                                        title="LinkedIn Profile"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <FaLinkedin />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OrganizingTeam;
