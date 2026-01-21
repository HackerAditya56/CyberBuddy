"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconBrain,
    IconCpu,
    IconServer,
    IconAlertTriangle,
    IconLock
} from "@tabler/icons-react"; // Note: Using lucide-react in main page, but tabler is cool for bento. Let's stick to Lucide actually or basic SVGs to avoid package bloat if tabler isn't installed. User said Lucide React.
import { Brain, Cpu, Server, Activity, Lock } from "lucide-react";

export function FailureAnalysis() {
    return (
        <div className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
                Why It Failed
            </h2>
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}

const DgxSpark = ({ color }: { color: string }) => (
    <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative overflow-hidden bg-slate-950 border border-slate-800 ${color}`}>
        {/* Abstract Spark Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]" />

        {/* Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-current opacity-20 blur-[50px] rounded-full" />

        {/* Digital Grid Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />

        {/* Hardware nodes */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-2 opacity-50">
                {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
            </div>
        </div>
    </div>
);

const items = [
    {
        title: "The Brain (Architect)",
        description: "Llama-3-70B Logic engine requires 40GB VRAM to reason through complex attack vectors without hallucinating.",
        header: <DgxSpark color="text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]" />,
        icon: <Brain className="h-4 w-4 text-blue-500" />,
    },
    {
        title: "The Hands (Executor)",
        description: "Sandbox VMs need persistent, isolated environments. Execution latency kills defense time.",
        header: <DgxSpark color="text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]" />,
        icon: <Activity className="h-4 w-4 text-emerald-500" />,
    },
    {
        title: "The Reality",
        description: "Running on a consumer GTX 1650 (4GB). Models are quantized to 4-bit, lobotomizing their reasoning.",
        header: <DgxSpark color="text-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]" />,
        icon: <Cpu className="h-4 w-4 text-rose-500" />,
    },
];
