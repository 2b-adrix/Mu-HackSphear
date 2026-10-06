import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaUserTie, FaLinkedin } from "react-icons/fa";

interface Mentor {
    name: string;
    designation: string;
    company: string;
}

// Groups ordered alphabetically
const mentorGroups: { company: string; members: Omit<Mentor, "company">[] }[] = [
    {
        company: "Apargo Solutions",
        members: [
            { name: "Deepratan Kushwaha", designation: "Data Scientist" },
            { name: "Ritesh Patidar", designation: "FullStack Developer" },
            { name: "Vikash Kumar", designation: "Data Analyst" },
        ],
    },
    {
        company: "Auriga IT",
        members: [
            { name: "Anshuman Sharma", designation: "SDE II" },
            { name: "Jhalak Dashora", designation: "Software Engineer II" },
            { name: "Mayank Bhootra", designation: "Principle Software Engineer" },
            { name: "Prithviraj Singh Hada", designation: "UX Designer" },
        ],
    },
    {
        company: "Bright Hub Private Limited",
        members: [
            { name: "Akshat agrawal", designation: "Operations Head" },
            { name: "Prashant Gupta", designation: "Founder & CEO" },
            { name: "Harendra jangir", designation: "Co - Founder" },
        ],
    },
    {
        company: "D2O",
        members: [
            { name: "Yugal Singh", designation: "Automation Engineer" },
        ],
    },
    {
        company: "Dianapps",
        members: [
            { name: "Pulkit Agarwal", designation: "Associate Software Engineer" },
        ],
    },
    {
        company: "Docker HOL",
        members: [
            { name: "Sarthak Varshney", designation: "Docker Captain, Founder" },
        ],
    },
    {
        company: "Dotsquares",
        members: [
            { name: "Shailendra Sharma", designation: "Senior Programmer Analyst" },
        ],
    },
    {
        company: "Ducat School of AI",
        members: [
            { name: "Aman Sharma", designation: "Cyber Security & AWS Cloud Trainer" },
            { name: "Yatendra Singh", designation: "Data Science & Machine Learning Trainer" },
        ],
    },
    {
        company: "Eterna Global Solutions LLP",
        members: [
            { name: "Aman Kulshresth", designation: "FullStack Developer" },
            { name: "Gaurav Nagda", designation: "Python Developer" },
        ],
    },
    {
        company: "EY GDS Global",
        members: [
            { name: "Rajat Kumar Singh", designation: "Full-Stack Developer" },
        ],
    },
    {
        company: "Gip Technologies Pvt. Ltd.",
        members: [
            { name: "Ashwani Belani", designation: "Sr. Software Developer" },
            { name: "Sarthak Jain", designation: "Data Analyst" },
        ],
    },
    {
        company: "GRAStech",
        members: [
            { name: "Mr. Ankit Mishra", designation: "Data Scientist & AI Expert" },
            { name: "Mr. Ashish Gupta", designation: "Placement Head" },
        ],
    },
    {
        company: "Grras Solutions Pvt. Ltd.",
        members: [
            { name: "Aashish Jangid", designation: "Software Developer" },
            { name: "Raman Jha", designation: "Software Developer" },
            { name: "Ravi Ramawat", designation: "Sr. Data Scientist" },
        ],
    },
    {
        company: "Metacube Software",
        members: [
            { name: "Gaurav Sharma", designation: "DevOps Engineer" },
            { name: "Kunal Upadhay", designation: "Software Engineer" },
            { name: "Priyanshu Sharma", designation: "Software Engineer" },
        ],
    },
    {
        company: "MNIT",
        members: [
            { name: "Dr. Surendra Hans", designation: "Associate Professor" },
        ],
    },
    {
        company: "Panoptic Analytics",
        members: [
            { name: "Mahima Dariyani", designation: "Software Developer" },
        ],
    },
    {
        company: "Pedestal Techno World Pvt Ltd",
        members: [
            { name: "Rich David", designation: "Head of Security" },
        ],
    },
    {
        company: "Polaris Grids Pvt. Ltd.",
        members: [
            { name: "Lalit Tak", designation: "Team Lead" },
        ],
    },
    {
        company: "PrimathixAi Technologies",
        members: [
            { name: "Aarti Khandelwal", designation: "Technical and Operations Lead" },
            { name: "Abhishek Saxena", designation: "HR and Placement Manager" },
            { name: "Hitesh Kashyap", designation: "Director & Founder" },
            { name: "Sanjay Lashkar", designation: "Mern & Devops specialist" },
        ],
    },
    {
        company: "TarqaAi",
        members: [
            { name: "Sudhanshu tiwari", designation: "CEO & FOUNDER" },
        ],
    },
    {
        company: "TechMatrix Consulting",
        members: [
            { name: "Vansh.jakhetia", designation: "Associate Software Engineer" },
        ],
    },
    {
        company: "Zordial Technologies",
        members: [
            { name: "Harshdeep Purohit", designation: "Project Manager" },
        ],
    },
    {
        company: "Design2occupancy Services LLP",
        members: [
            { name: "Sushant Koolwal", designation: "Project Architect" },
        ],
    },
];

interface JuryMember {
    name: string;
    designation: string;
    company: string;
    linkedin: string;
}

const juries: JuryMember[] = [
    { name: "Shubham Gupta", company: "Nagaro", designation: "Team Lead", linkedin: "https://www.linkedin.com/in/shubhamguptag/" },
    { name: "Uma Shankar Arora", company: "KaizenRise", designation: "Founder", linkedin: "https://www.linkedin.com/in/usarora/" },
    { name: "Vikas Soni", company: "DianApps", designation: "Co-Founder", linkedin: "https://www.linkedin.com/in/vikash-soni/" },
];

// Flatten into a single ordered list keeping company grouping
const mentors: Mentor[] = mentorGroups.flatMap((g) =>
    g.members.map((m) => ({ ...m, company: g.company }))
);

const MentorsJury = () => {
    const { ref, isInView } = useSectionInView();

    return (
        <section id="mentors-jury" className="pt-6 pb-12 md:pt-10 md:pb-20 bg-off-white/70 relative">
            <div className="container mx-auto px-6">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-exo font-bold text-neon-blue mb-4">
                        Mentors &amp; Jury Members
                    </h2>
                    <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full mb-4" />
                    <p className="text-gray-600 font-montserrat max-w-2xl mx-auto">
                        Industry experts guiding and evaluating innovative solutions
                    </p>
                </motion.div>

                <div ref={ref} className="max-w-[1400px] mx-auto space-y-14">
                    {/* ── Mentors ── */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-exo font-bold text-accent-blue mb-8 text-center normal-case tracking-normal">
                            🎓 Mentors
                        </h3>

                        {/* 5 per row → 7 rows of 5 = 35 cards, perfectly even */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                            {mentors.map((mentor, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.025, duration: 0.4 }}
                                    className="bg-white border border-blue-100 rounded-2xl p-4 flex flex-col items-center text-center
                                               hover:border-neon-blue/50 hover:shadow-xl hover:-translate-y-1
                                               transition-all duration-300 group"
                                >
                                    {/* Avatar */}
                                    <div className="w-12 h-12 md:w-14 md:h-14 mb-3 rounded-full
                                                    bg-gradient-to-br from-blue-100 to-blue-200
                                                    flex items-center justify-center text-neon-blue shadow-sm
                                                    group-hover:from-neon-blue group-hover:to-accent-blue
                                                    group-hover:text-white transition-all duration-300">
                                        <FaUserTie className="text-lg md:text-xl" />
                                    </div>

                                    {/* Name */}
                                    <h4 className="font-exo font-bold text-[13px] md:text-sm text-neon-blue
                                                   leading-snug mb-1 normal-case tracking-normal">
                                        {mentor.name}
                                    </h4>

                                    {/* Designation */}
                                    <p className="font-montserrat text-[11px] text-gray-500 leading-snug mb-1">
                                        {mentor.designation}
                                    </p>

                                    {/* Company badge */}
                                    <span className="mt-auto inline-block bg-blue-50 text-accent-blue
                                                     font-montserrat text-[10px] font-semibold
                                                     px-2 py-0.5 rounded-full leading-tight text-center">
                                        {mentor.company}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ── Jury Members ── */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-exo font-bold text-accent-blue mb-8 text-center normal-case tracking-normal">
                            ⚖️ Jury Members
                        </h3>

                        {/* Real Jury Members — 3 per row, centred */}
                        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {juries.map((jury, index) => (
                                <motion.div
                                    key={`jury-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    className="bg-white border border-blue-100 rounded-2xl p-6
                                               flex flex-col items-center text-center relative
                                               hover:border-neon-blue/50 hover:shadow-xl hover:-translate-y-1
                                               transition-all duration-300 group"
                                >
                                    {/* LinkedIn Link (Top Right Corner) */}
                                    {jury.linkedin && jury.linkedin !== '#' && (
                                        <a href={jury.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-gray-400 hover:text-[#0077b5] transition-colors duration-300 group-hover:scale-110">
                                            <FaLinkedin className="text-xl" />
                                        </a>
                                    )}

                                    {/* Avatar */}
                                    <div className="w-16 h-16 md:w-20 md:h-20 mb-4 rounded-full overflow-hidden shadow-sm
                                                    border-2 border-blue-50 group-hover:border-neon-blue group-hover:shadow-md
                                                    transition-all duration-300 bg-blue-50">
                                        <img 
                                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(jury.name)}&background=eff6ff&color=0aa0f6&size=150&font-size=0.4&bold=true`}
                                            alt={jury.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <h4 className="font-exo font-bold text-base md:text-lg text-neon-blue
                                                   leading-snug mb-1 normal-case tracking-normal">
                                        {jury.name}
                                    </h4>
                                    
                                    <p className="font-montserrat text-sm text-gray-500 leading-snug mb-2 font-medium">
                                        {jury.designation}
                                    </p>

                                    {/* Company badge */}
                                    <span className="mt-auto inline-block bg-blue-50 text-accent-blue
                                                     font-montserrat text-xs font-semibold
                                                     px-3 py-1 rounded-full leading-tight text-center">
                                        {jury.company}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorsJury;
