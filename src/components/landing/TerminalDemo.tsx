"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldAlert, Cpu, Activity, Play, RefreshCw, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type LogEntry = {
    id: string;
    agent: string;
    message: string;
    type: "info" | "success" | "warning" | "error";
    timestamp: string;
};

export function TerminalDemo() {
    const [isActive, setIsActive] = useState(false);
    const [isCrashed, setIsCrashed] = useState(false);
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    const initialLogs: LogEntry[] = [
        { id: "init-1", agent: "System", message: "CyberBuddy Core v2.4.0 initialized", type: "info", timestamp: "00:00:01" },
        { id: "init-2", agent: "System", message: "Agents online: Scanner, Llama-3-70B, Architect, Executor", type: "success", timestamp: "00:00:02" },
        { id: "init-3", agent: "System", message: "Connected to repository: payment-gateway-backend...", type: "info", timestamp: "00:00:03" },
    ];

    const auditSequence = [
        { delay: 1000, agent: "Scanner", message: "Parsing payment_gateway.py. 4,200 lines of code loaded.", type: "info" },
        { delay: 3000, agent: "Llama-3-70B", message: "Anomaly Detected in Line 402. The verify_transaction function lacks atomic locking. High risk of Double-Spend Attack.", type: "warning" },
        { delay: 5500, agent: "Architect", message: "@Executor, draft a patch using asyncio.Lock() and rewrite the unit test.", type: "info" },
        { delay: 7500, agent: "Executor", message: "Analyzing dependency tree for safe locking mechanisms...", type: "info" },
        { delay: 9000, agent: "System", message: "Allocating 18GB VRAM context for code generation...", type: "warning" },
        { delay: 10500, agent: "System", message: "CUDA_ERROR_OUT_OF_MEMORY. Generating secure patch requires 18GB VRAM context. Available: 4GB.", type: "error" },
        { delay: 11000, agent: "System", message: "Patch Failed. Vulnerability remains exposed.", type: "error" },
    ];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    const startSimulation = () => {
        if (isActive) return;
        setIsActive(true);
        setIsCrashed(false);
        setLogs(initialLogs);

        auditSequence.forEach((step, index) => {
            setTimeout(() => {
                const newLog: LogEntry = {
                    id: `log-${Date.now()}-${index}`,
                    agent: step.agent,
                    message: step.message,
                    type: step.type as any,
                    timestamp: new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric", second: "numeric" })
                };

                setLogs(prev => [...prev, newLog]);

                if (step.type === "error") {
                    setIsCrashed(true);
                }
            }, step.delay);
        });
    };

    const getLogColor = (type: string) => {
        switch (type) {
            case "success": return "text-emerald-400";
            case "warning": return "text-amber-400";
            case "error": return "text-rose-500 font-bold";
            default: return "text-slate-300";
        }
    };

    return (
        <div id="terminal-demo" className="w-full max-w-5xl mx-auto p-4 md:p-8 relative">
            <div className={cn(
                "relative rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl transition-all duration-300",
                isCrashed && "animate-shake border-rose-500/50 shadow-rose-900/20"
            )}>
                {/* Terminal Header */}
                <div className={cn("flex items-center px-4 py-2 border-b border-slate-800 bg-slate-900/50", isCrashed ? "bg-rose-950/30" : "")}>
                    <div className="flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <div className="flex-1 text-center font-mono text-xs text-slate-500">
                        cyberbuddy-audit-agent — bash — 80x24
                    </div>
                </div>

                {/* Terminal Body */}
                <div
                    ref={scrollRef}
                    className={cn(
                        "h-96 md:h-[32rem] overflow-y-auto p-6 font-mono text-sm md:text-base space-y-2 scrollbar-hide",
                        isCrashed ? "bg-rose-950/10" : ""
                    )}
                >
                    {!isActive && logs.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-full text-slate-600">
                            <Terminal className="w-16 h-16 mb-4 opacity-50" />
                            <p>System Ready. Waiting for repository input...</p>
                        </div>
                    )}

                    <AnimatePresence>
                        {logs.map((log) => (
                            <motion.div
                                key={log.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-start space-x-2"
                            >
                                <span className="text-slate-600 shrink-0">[{log.timestamp}]</span>
                                <span className={cn("font-bold shrink-0 w-32",
                                    log.agent === "System" ? "text-cyan-400" :
                                        log.agent === "Llama-3-70B" ? "text-purple-400" :
                                            log.agent === "Architect" ? "text-blue-400" :
                                                "text-orange-400"
                                )}>
                                    {log.agent}:
                                </span>
                                <span className={getLogColor(log.type)}>{log.message}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {isActive && !isCrashed && (
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-2 h-4 bg-emerald-500 inline-block ml-1"
                        />
                    )}
                </div>

                {/* Control Panel */}
                <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className={cn("text-xs font-mono px-2 py-1 rounded", isCrashed ? "bg-rose-500/20 text-rose-400" : "bg-emerald-500/20 text-emerald-400")}>
                            GPU: {isCrashed ? "OOM ERROR" : "GTX 1650 (4GB)"}
                        </div>
                        <div className="text-xs font-mono text-slate-500 hidden md:block">
                            MEM: {isCrashed ? "99%" : isActive ? "85%" : "12%"}
                        </div>
                    </div>

                    <button
                        onClick={startSimulation}
                        disabled={isActive && !isCrashed}
                        className={cn(
                            "flex items-center space-x-2 px-6 py-2 rounded-lg font-bold transition-all",
                            isCrashed
                                ? "bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-900/40"
                                : isActive
                                    ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                                    : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/40"
                        )}
                    >
                        {isCrashed ? (
                            <>
                                <RefreshCw className="w-4 h-4" />
                                <span>Retry Audit</span>
                            </>
                        ) : isActive ? (
                            <>
                                <Activity className="w-4 h-4 animate-pulse" />
                                <span className="uppercase">Auditing Code...</span>
                            </>
                        ) : (
                            <>
                                <ShieldAlert className="w-4 h-4" />
                                <span>Run Deep Audit</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Glitch Overlay on Crash */}
            {isCrashed && (
                <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden rounded-xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-rose-500/10 mix-blend-overlay animate-pulse"></div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.1 }}
                        className="bg-black/90 p-8 rounded-xl border border-rose-500 text-center shadow-2xl z-50 max-w-md mx-4"
                    >
                        <XCircle className="w-16 h-16 text-rose-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-2">Simulated Failure</h2>
                        <p className="text-rose-400 font-mono mb-4">Hardware resources exhausted before patch generation.</p>
                        <div className="bg-slate-900 p-2 rounded text-xs text-left font-mono text-slate-400">
                            <div>Error: CUDA_OUT_OF_MEMORY</div>
                            <div>Attempted allocation: 18.00 GiB</div>
                            <div>Free memory: 0.12 GiB</div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
