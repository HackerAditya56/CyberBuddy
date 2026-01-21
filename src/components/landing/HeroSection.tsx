"use client";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

export function HeroSection() {
    const scrollToDemo = () => {
        const element = document.getElementById("terminal-demo");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="h-[40rem] w-full dark:bg-slate-950 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="flex flex-col items-center justify-center text-center z-10 px-4 max-w-5xl mx-auto">
                <div className="inline-block mb-4 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-mono tracking-wider">
                    SYSTEM STATUS: OFFLINE [ERR_HARDWARE]
                </div>

                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 font-sans mb-6">
                    The First AI That Doesn't Just Chat.<br /> It Defends.
                </h1>

                <a
                    href="https://github.com/HackerAditya56/CyberBuddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-6 mx-auto"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.313-3.369-1.313-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.556-1.11-4.556-5.467 0-1.281.35-2.292.933-3.15-.091-.296-.405-1.49.091-3.09 0 0 .972-.311 3.19 1.192.933-.26 1.936-.39 2.924-.393 1.005.003 1.994.133 2.925.393 2.217-1.503 3.187-1.192 3.187-1.192.497 1.6.184 2.794.09 3.09.584.858.931 1.869.931 3.15 0 4.296-2.345 5.213-4.578 5.454.362.312.683.928.683 1.872 0 1.352-.012 2.441-.012 2.772 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span className="font-mono text-sm underline decoration-slate-600 hover:decoration-emerald-500 underline-offset-4">github.com/HackerAditya56/CyberBuddy</span>
                </a>

                <div className="max-w-3xl mx-auto mb-10 text-lg md:text-xl text-neutral-400 font-mono">
                    <TextGenerateEffect words="CyberBuddy: An autonomous multi-agent framework that identifies, isolates, and neutralizes ransomware in real-time. Currently offline due to VRAM limitations." />
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToDemo}
                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#50a3a2_50%,#E2E8F0_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl border border-slate-800 hover:bg-slate-900 transition-colors uppercase tracking-widest font-mono">
                        Initiate Simulation (Demo)
                        <span className="ml-2 flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                    </span>
                </motion.button>
            </div>
        </div>
    );
}
