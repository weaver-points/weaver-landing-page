import { useState } from "react";

import { motion } from "framer-motion";
import Card from "./components/ui/Card";
import CardContent from "./components/ui/CardContent";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";

export default function App() {
    const [email, setEmail] = useState("");

    return (
        <div className="min-h-screen bg-white text-black px-4 py-8 md:px-16">
            <header className="text-center space-y-4 mb-16">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Powering Starknet Growth Through Traction & Trust
                </h1>
                <p className="text-lg md:text-xl text-gray-700">
                    Weaver combines reputation, analytics, and AI-powered
                    campaigns to help Starknet protocols measure adoption,
                    improve retention, and reward genuine users.
                </p>
            </header>

            <section className="grid md:grid-cols-2 gap-12 mb-20">
                <Card>
                    <CardContent className="space-y-3 p-6">
                        <h2 className="text-2xl font-semibold">
                            What is Weaver?
                        </h2>
                        <p>
                            A new kind of analytics engine built for Starknet
                            protocols. More than a dashboard, Weaver enables you
                            to launch campaigns, monitor results, and drive
                            growth—all powered by on-chain data and user
                            reputation.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="space-y-3 p-6">
                        <h2 className="text-2xl font-semibold">How it Works</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Connect as a protocol to launch a campaign</li>
                            <li>
                                Track engagement and KPIs from your dashboard
                            </li>
                            <li>Receive suggestions from our AI assistant</li>
                            <li>Reward top users and grow retention</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="space-y-3 p-6">
                        <h2 className="text-2xl font-semibold">For Users</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Earn reputation by completing tasks</li>
                            <li>
                                Discover campaigns from your favorite Starknet
                                projects
                            </li>
                            <li>Build a verifiable on-chain profile</li>
                            <li>Unlock gated content and governance access</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="space-y-4 p-6">
                        <h2 className="text-2xl font-semibold">
                            Waitlist + Newsletter
                        </h2>
                        <p>
                            Stay ahead of the curve. Join the Weaver waitlist
                            and get exclusive early access updates.
                        </p>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full"
                        />
                        <div className="flex gap-2">
                            <Button className="w-full">Join Waitlist ✅</Button>
                            <Button variant="outline" className="w-full">
                                Subscribe 📨
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </section>

            <footer className="text-center space-y-2 text-gray-600">
                <p>Backed by the Starknet Ecosystem</p>
                <p>Follow our journey: Twitter / Mirror Blog / Discord</p>
            </footer>
        </div>
    );
}
