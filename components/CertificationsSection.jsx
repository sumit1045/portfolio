import React, { useState } from "react";

const certificationsData = [
    {
        id: 1,
        title: "Certified Web Developer",
        imgUrl: "/eCertificate-2.JPG",
        type: "certified",
    },
    {
        id: 2,
        title: "National Level Project Competition",
        imgUrl: "/e-Yantram.JPG",
        type: "participation",
    },
    {
        id: 3,
        title: "Full-Stack Developer Certificate",
        imgUrl: "/images/certificates/full_stack_certificate.png",
        type: "certified",
    },
    {
        id: 4,
        title: "Participation in Coding Contest",
        imgUrl: "/images/certificates/coding_contest_participation.png",
        type: "participation",
    },
    {
        id: 5,
        title: "Data Science Certificate",
        imgUrl: "/images/certificates/data_science_certificate.png",
        type: "certified",
    },
    {
        id: 6,
        title: "Participation in Tech Talk",
        imgUrl: "/images/certificates/tech_talk_participation.png",
        type: "participation",
    },
];

const CertificationsSection = () => {
    const [selectedType, setSelectedType] = useState("All");

    const handleTypeChange = (type) => {
        setSelectedType(type);
    };

    const filteredCertifications = certificationsData.filter((cert) =>
        selectedType === "All" ? true : cert.type === selectedType.toLowerCase()
    );

    return (
        <section id="certifications">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
                My Certifications
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <button
                    className={`px-4 py-2 mr-2 rounded-md ${selectedType === "All"
                        ? "bg-white text-black font-semibold"
                        : "bg-gray-800 text-white"
                        }`}
                    onClick={() => handleTypeChange("All")}
                >
                    All
                </button>
                <button
                    className={`px-4 py-2 mr-2 rounded-md ${selectedType === "Certified"
                        ? "bg-white text-black font-semibold"
                        : "bg-gray-800 text-white"
                        }`}
                    onClick={() => handleTypeChange("Certified")}
                >
                    Certified
                </button>
                <button
                    className={`px-4 py-2 mr-2 rounded-md ${selectedType === "Participation"
                        ? "bg-white text-black font-semibold"
                        : "bg-gray-800 text-white"
                        }`}
                    onClick={() => handleTypeChange("Participation")}
                >
                    Participation
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredCertifications.map((cert) => (
                    <div key={cert.id} className="border rounded-lg overflow-hidden">
                        <img
                            src={cert.imgUrl}
                            alt={cert.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CertificationsSection;
