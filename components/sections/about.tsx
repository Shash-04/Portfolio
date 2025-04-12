"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function About() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const skills = [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Next.js", level: 85 },
        { name: "Databases", level: 70 },
    ];

    const timeline = [
        {
            year: "2023 - Present",
            title: "Senior Frontend Developer",
            company: "Tech Innovations Inc.",
            description: "Leading frontend development for enterprise applications, focusing on accessibility and performance optimization."
        },
        {
            year: "2021 - 2023",
            title: "Full-stack Developer",
            company: "Digital Solutions Co.",
            description: "Developed scalable web applications with React, Node.js, and MongoDB. Improved application performance by 40%."
        },
        {
            year: "2019 - 2021",
            title: "Junior Web Developer",
            company: "WebCraft Studios",
            description: "Created responsive websites and collaborated with design teams to implement user-centric interfaces."
        },
    ];

    return (
        <div className=" text-black min-h-screen dark:text-white">
            <Head>
                <title>About Me | Developer Portfolio</title>
                <meta name="description" content="Learn more about my journey as a full-stack developer" />
            </Head>

            <main className="container mx-auto px-4 py-20 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl font-bold mb-6">About Me</h1>
                    <div className="h-1 w-20 bg-purple-500 mb-12 rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isLoaded ? "show" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-10"
                >
                    {/* Left Column */}
                    <motion.div variants={item} className="lg:col-span-2">
                        <div className="rounded-2xl overflow-hidden mb-8 relative group">
                            <img
                                src="profile.jpg"
                                alt="Profile"
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        </div>

                        <motion.div
                            variants={item}
                            className="bg-gray-900 text-white rounded-2xl p-8 mb-8"
                        >
                            <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
                            <div className="space-y-4">
                                {skills.map((skill, index) => (
                                    <div key={index} className="mb-3">
                                        <div className="flex justify-between mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.4 + (index * 0.1) }}
                                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* <motion.div
                            variants={item}
                            className="bg-gray-900 rounded-2xl p-8"
                        >
                            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    developer@example.com
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    +1 (555) 123-4567
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    San Francisco, CA
                                </li>
                            </ul>
                        </motion.div> */}
                    </motion.div>

                    {/* Right Column */}
                    <motion.div variants={item} className="lg:col-span-3">
                        <motion.div
                            variants={item}
                            className="bg-gray-900 rounded-2xl p-8 mb-8"
                        >
                            <h2 className="text-3xl text-white font-bold mb-6">My Journey</h2>
                            <p className="text-gray-300 mb-6">
                                I'm a passionate full-stack developer and a 2nd year Btech CSE student.I have experience creating seamless digital experiences. My journey in software development started during my computer science studies, where I discovered my fascination with building intuitive user interfaces and robust backend systems.
                            </p>
                            <p className="text-gray-300 mb-6">
                                Currently focused on building accessible, user-centric products with performance and design in mind for the community. I believe in creating software that not only meets technical requirements but also provides exceptional user experiences. I'm particularly interested in modern JavaScript frameworks, serverless architectures, and emerging web technologies.
                            </p>
                            <p className="text-gray-300">
                                Outside of coding, I enjoy contributing to open-source projects, mentoring junior developers, literature and exploring the great outdoors. I'm always looking to collaborate on interesting projects that push the boundaries of what's possible on the web.
                            </p>
                        </motion.div>
                        {/* 
                        <motion.div
                            variants={item}
                            className="bg-gray-900 rounded-2xl p-8 mb-8"
                        >
                            <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
                            <div className="space-y-8">
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                                        className="relative pl-10 border-l-2 border-purple-500 pb-8 last:pb-0"
                                    >
                                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                                        <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm mb-2">{item.year}</span>
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        <p className="text-purple-400 mb-2">{item.company}</p>
                                        <p className="text-gray-400">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div> */}

                        <motion.div
                            variants={item}
                            className="bg-gray-900 text-white rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Education</h2>
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold">BTech in Computer Science</h3>
                                    <p className="text-purple-400">Indraprastha University</p>
                                    <p className="text-gray-400">2023 - 2027</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Senior Year</h3>
                                    <p className="text-purple-400">VBBS</p>
                                    <p className="text-gray-400">2021 - 2022</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-6">Interests</h2>
                                <div className="flex flex-wrap gap-3">
                                    {["Open Source", "TypeScript", "AI", "UX Design", "AI Agents", "Cloud Computing", "Blockchain"].map((interest, index) => (
                                        <span key={index} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
}