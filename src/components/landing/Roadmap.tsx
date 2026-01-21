"use client";
import React from "react";
import { CheckCircle2, Circle, AlertCircle } from "lucide-react";

export function Roadmap() {
    const steps = [
        { title: "Phase 1: Core Logic", status: "completed", description: "Agent reasoning chains, basic RAG implementation, and PDF parsing." },
        { title: "Phase 2: Multi-Agent Handshake", status: "completed", description: "Architect/Executor protocol, JSON schemas, and error handling." },
        { title: "Phase 3: Hardware Acquisition", status: "stuck", description: "Need minimum 24GB VRAM for concurrent 70B/7B execution. Currently blocked." },
        { title: "Phase 4: Open Sourcing", status: "pending", description: "Deploying to KV Schools for free educational use vs ransomware." },
    ];

    return (
        <div className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">Project Status</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                {steps.map((step, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            {step.status === "completed" ? (
                                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                            ) : step.status === "stuck" ? (
                                <AlertCircle className="w-6 h-6 text-rose-500 animate-pulse" />
                            ) : (
                                <Circle className="w-6 h-6 text-slate-500" />
                            )}
                        </div>
                        {/* Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/50 p-6 rounded-xl border border-slate-800 shadow-xl">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <h3 className="font-bold text-slate-200">{step.title}</h3>
                                {step.status === "stuck" && (
                                    <span className="text-[10px] bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded uppercase tracking-wider">Blocked</span>
                                )}
                            </div>
                            <p className="text-slate-400 text-sm">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
