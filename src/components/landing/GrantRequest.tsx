"use client";
import React from "react";
import { Mail, Server } from "lucide-react";
import { motion } from "framer-motion";

export function GrantRequest() {
    return (
        <div className="py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <Server className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Help Me Turn This Back On.
                </h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    I don't want money. I want compute. If you have an unused <span className="text-emerald-400 font-bold">A100</span>,
                    a deprecated <span className="text-emerald-400 font-bold">DGX station</span>, or cloud credits with
                    Root access, you aren't just donating hardware.<br /><br />
                    You are enabling the future of open-source defense.
                </p>

                <motion.a
                    href="mailto:adityanandan137@gmail.com?subject=Hardware%20Grant%20for%20CyberBuddy"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-emerald-500/20 transition-colors text-lg"
                >
                    <Mail className="w-5 h-5" />
                    <span>Email Me to Connect</span>
                </motion.a>

                <div className="mt-12 pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-slate-600 text-sm">
                    <p>© 2026 CyberBuddy Project. Open Source Security.</p>
                    <div className="flex items-center space-x-6 mt-4 md:mt-0">
                        <a href="https://github.com/HackerAditya56/CyberBuddy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors">
                            <span className="sr-only">GitHub</span>
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.313-3.369-1.313-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.556-1.11-4.556-5.467 0-1.281.35-2.292.933-3.15-.091-.296-.405-1.49.091-3.09 0 0 .972-.311 3.19 1.192.933-.26 1.936-.39 2.924-.393 1.005.003 1.994.133 2.925.393 2.217-1.503 3.187-1.192 3.187-1.192.497 1.6.184 2.794.09 3.09.584.858.931 1.869.931 3.15 0 4.296-2.345 5.213-4.578 5.454.362.312.683.928.683 1.872 0 1.352-.012 2.441-.012 2.772 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            <span>GitHub</span>
                        </a>
                        <span>Next.js 14</span>
                        <span>Tailwind CSS</span>
                        <span>Agent Swarm</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
