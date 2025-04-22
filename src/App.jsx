import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./components/ui/Card";
import CardContent from "./components/ui/CardContent";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import Logo from "./assets/Group 53.svg";
import Badge from "./assets/Group 57.svg";
import HeroImage1 from "./assets/hero-images/hero-image-1.png";
import HeroImage2 from "./assets/hero-images/hero-image-2.png";
import HeroImage3 from "./assets/hero-images/hero-image-3.png";

export default function App() {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("user");
    const [name, setName] = useState("");
    const [network, setNetwork] = useState("mainnet");
    const [description, setDescription] = useState("");
    const waitlistCount = 1342;

    return (
        <div className="min-h-screen bg-gradient-to-b from-dark-900 to-black text-white px-4 py-8 md:px-16 font-sans relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-10"></div>
            <div className="absolute -top-48 -right-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-8 mb-20 relative z-10"
            >
                <motion.img
                    src={Logo}
                    alt="Weaver Logo"
                    className="mx-auto w-24 animate-float"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent animate-gradient-x">
                    Powering Starknet Growth Through Traction & Trust
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                    Weaver blends on-chain reputation with traction analytics
                    and AI-powered campaigns for next-level growth.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-10">
                    <Button className="px-8 py-4 text-lg shadow-lg shadow-primary/20">
                        Get Started →
                    </Button>
                    <Button variant="outline" className="px-8 py-4 text-lg">
                        Learn More
                    </Button>
                </div>

                {/* First hero image */}
                <motion.div 
                    className="relative mt-16 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <motion.div 
                        className="rounded-2xl shadow-2xl overflow-hidden border-4 border-dark-600/50 backdrop-blur-sm"
                        initial={{ y: 20, scale: 0.95 }}
                        animate={{ y: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        <img 
                            src={HeroImage1} 
                            alt="Weaver Dashboard" 
                            className="w-full h-auto object-cover transform transition-transform duration-3000 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 opacity-60"></div>
                        <div className="absolute bottom-4 left-4 text-white text-base font-medium">Reputation Dashboard</div>
                    </motion.div>
                </motion.div>
            </motion.header>

            <section className="grid md:grid-cols-2 gap-8 mb-24 relative z-10 mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Card>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/20 p-3 rounded-xl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-primary"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-white">
                                    Why Weaver?
                                </h2>
                            </div>
                            <p className="text-gray-300">
                                Protocols struggle to know which users matter.
                                Users lack credibility when jumping between
                                dapps. Weaver solves both: measurable traction
                                for protocols, portable reputation for users.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Card>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/20 p-3 rounded-xl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-primary"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-white">
                                    How it Works
                                </h2>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    {
                                        text: "Connect as a protocol to launch KPI-driven campaigns",
                                        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                    },
                                    {
                                        text: "Users earn reputation through on-chain actions",
                                        icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
                                    },
                                    {
                                        text: "AI analyzes and suggests improvements",
                                        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                                    },
                                    {
                                        text: "Track engagement + retention in real time",
                                        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                    },
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-primary"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d={item.icon}
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Second hero image - Analytics platform in the middle of content */}
                <motion.div
                    className="md:col-span-2 my-10 relative max-w-3xl mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] opacity-40 z-0"></div>
                    <motion.div
                        className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-dark-600/50 backdrop-blur-sm z-10"
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                        <img
                            src={HeroImage2}
                            alt="Analytics Platform"
                            className="w-full h-auto object-cover transform transition-transform duration-3000 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 max-w-md">
                            <h3 className="text-2xl font-bold text-white mb-2">Analytics Platform</h3>
                            <p className="text-gray-200 text-sm">Real-time data visualization and insights to help protocols understand user behavior and optimize campaigns.</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Card>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/20 p-3 rounded-xl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-primary"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-white">
                                    AI Campaign Optimizer
                                </h2>
                            </div>
                            <p className="text-gray-300">
                                Weaver's AI engine reviews engagement trends and
                                recommends campaign tweaks. From targeting
                                dormant users to boosting onboarding
                                conversion—your traction engine just got
                                smarter.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative"
                >
                    <div className="relative">
                        <Card className="bg-gradient-to-br from-dark-800 to-dark-900 border-primary/20">
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/20 p-3 rounded-xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">
                                        Join Waitlist
                                    </h2>
                                </div>
                                <p className="text-gray-300">
                                    <span className="font-bold text-primary text-lg">
                                        {waitlistCount.toLocaleString()}+
                                    </span>{" "}
                                    people have joined the waitlist. Sign up to join
                                    our growing traction community.
                                </p>

                                <div className="grid gap-4 mt-2">
                                    <Input
                                        type="email"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                id="user"
                                                name="role"
                                                value="user"
                                                checked={role === "user"}
                                                onChange={() => setRole("user")}
                                                className="accent-primary w-4 h-4"
                                            />
                                            <label
                                                htmlFor="user"
                                                className="text-gray-300"
                                            >
                                                User
                                            </label>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                id="project"
                                                name="role"
                                                value="project"
                                                checked={role === "project"}
                                                onChange={() => setRole("project")}
                                                className="accent-primary w-4 h-4"
                                            />
                                            <label
                                                htmlFor="project"
                                                className="text-gray-300"
                                            >
                                                Project
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <AnimatePresence mode="wait">
                                        {role === "user" ? (
                                            <motion.div
                                                key="user-form"
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Input
                                                    placeholder="Username"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </motion.div>
                                        ) : (
                                            <motion.div 
                                                key="project-form"
                                                className="space-y-3"
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                            <Input
                                                placeholder="Project Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            
                                            <div className="grid grid-cols-1 gap-3 p-3 bg-dark-700/50 rounded-xl">
                                                <p className="text-sm font-medium text-gray-300 mb-1">Project Network</p>
                                                <div className="flex flex-wrap gap-3">
                                                    <div className="flex items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            id="mainnet"
                                                            name="network"
                                                            value="mainnet"
                                                            checked={network === "mainnet"}
                                                            onChange={() => setNetwork("mainnet")}
                                                            className="accent-primary w-4 h-4"
                                                        />
                                                        <label htmlFor="mainnet" className="text-gray-300 text-sm">
                                                            Mainnet
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            id="testnet"
                                                            name="network"
                                                            value="testnet"
                                                            checked={network === "testnet"}
                                                            onChange={() => setNetwork("testnet")}
                                                            className="accent-primary w-4 h-4"
                                                        />
                                                        <label htmlFor="testnet" className="text-gray-300 text-sm">
                                                            Testnet
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            id="both"
                                                            name="network"
                                                            value="both"
                                                            checked={network === "both"}
                                                            onChange={() => setNetwork("both")}
                                                            className="accent-primary w-4 h-4"
                                                        />
                                                        <label htmlFor="both" className="text-gray-300 text-sm">
                                                            Both
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="project-description" className="text-sm font-medium text-gray-300 block mb-2">Project Description</label>
                                                <textarea 
                                                    id="project-description"
                                                    placeholder="Brief project description (Optional)" 
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    className="w-full bg-dark-700/50 rounded-xl p-3 h-24 border border-dark-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white placeholder:text-gray-500 resize-none transition-all duration-200"
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                    </AnimatePresence>
                                </div>

                                <div className="flex gap-3 mt-2">
                                    <Button className="w-full">
                                        Join Waitlist
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        Subscribe
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </section>

            {/* Third hero image - Campaign manager before footer */}
            <motion.div
                className="relative -mt-10 mb-24 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] opacity-40 z-0"></div>
                <motion.div 
                    className="relative z-10 rounded-2xl shadow-2xl overflow-hidden border-4 border-dark-600/50 backdrop-blur-sm flex md:flex-row flex-col"
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                    <div className="md:w-1/2 order-2 md:order-1 p-8 flex flex-col justify-center bg-gradient-to-r from-dark-800 to-transparent">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Campaign Manager</h3>
                        <p className="text-gray-300 mb-6">Launch, track, and optimize targeted campaigns with our AI-powered platform. Customize rewards and track user engagement in real-time.</p>
                        <div>
                            <Button className="px-6">Explore Features →</Button>
                        </div>
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2">
                        <img 
                            src={HeroImage3} 
                            alt="Campaign Manager" 
                            className="w-full h-full object-cover object-left transform transition-transform duration-3000 hover:scale-110"
                        />
                    </div>
                </motion.div>
            </motion.div>

            <footer className="relative z-10 py-6 border-t border-dark-600 mt-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <img
                            src={Badge}
                            alt="Starknet Ecosystem"
                            className="w-16"
                        />
                        <p className="text-gray-400">
                            Backed by the Starknet Ecosystem
                        </p>
                    </div>

                    <div className="flex gap-8 text-gray-400">
                        <a
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Twitter
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Mirror Blog
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Discord
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
                <p className="text-center text-gray-500 text-sm mt-6">
                    © {new Date().getFullYear()} Weaver. All rights reserved.
                </p>
            </footer>
        </div>
    );
}