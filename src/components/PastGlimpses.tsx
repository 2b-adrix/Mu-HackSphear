import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import glimpse1 from "../assets/glimpse1.jpg";
import glimpse2 from "../assets/glimpse2.jpg";
import glimpse3 from "../assets/glimpse3.jpg";
import glimpse4 from "../assets/glimpse4.jpg";
import glimpse5 from "../assets/glimpse5.jpg";

const PastGlimpses = () => {
    const { ref, isInView } = useSectionInView();

    const photos = [
        { src: glimpse1, edition: "HACKATHON 1.0" },
        { src: glimpse2, edition: "HACKATHON 1.0" },
        { src: glimpse3, edition: "HACKATHON 2.0" },
        { src: glimpse4, edition: "HACKATHON 2.0" },
        { src: glimpse5, edition: "HACKATHON 2.0" },
    ];

    // Duplicate for seamless infinite loop
    const allPhotos = [...photos, ...photos];

    return (
        <section id="past-glimpses" className="py-12 md:py-20 bg-off-white/70 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-14"
                >
                    <h2 className="text-3xl md:text-5xl font-exo font-bold text-neon-blue mb-4">
                        Past Glimpses
                    </h2>
                    <p className="text-gray-600 font-montserrat max-w-2xl mx-auto text-justify">
                        Relive the energy, creativity, and excitement from our previous hackathon events!
                    </p>
                    <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full mt-4" />
                </motion.div>
            </div>

            {/* Infinite Scrolling Marquee */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-off-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-off-white to-transparent z-10 pointer-events-none" />

                <div
                    className="flex gap-4 sm:gap-6"
                    style={{
                        animation: "marquee 30s linear infinite",
                        width: "max-content",
                    }}
                >
                    {allPhotos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            whileHover={{ scale: 1.05, y: -8 }}
                            className="flex-shrink-0 w-[250px] sm:w-[300px] md:w-[380px] h-[180px] sm:h-[220px] md:h-[260px] rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
                        >
                            <img
                                src={photo.src}
                                alt={`${photo.edition} Glimpse ${(index % 5) + 1}`}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            {/* Hover glow overlay */}
                            <div className="absolute inset-0 bg-neon-blue/0 group-hover:bg-neon-blue/10 transition-colors duration-500" />
                            {/* Edition watermark */}
                            <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 backdrop-blur-sm px-4 py-1.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${
                                photo.edition === "HACKATHON 1.0"
                                    ? "bg-amber-500/70"
                                    : "bg-black/50"
                            }`}>
                                <span className="text-white text-xs font-bold font-exo tracking-wider">{photo.edition}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastGlimpses;
