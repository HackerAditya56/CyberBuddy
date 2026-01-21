import { HeroSection } from "@/components/landing/HeroSection";
import { TerminalDemo } from "@/components/landing/TerminalDemo";
import { FailureAnalysis } from "@/components/landing/FailureAnalysis";
import { Roadmap } from "@/components/landing/Roadmap";
import { GrantRequest } from "@/components/landing/GrantRequest";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30">
            <HeroSection />

            <section className="relative z-10 -mt-20 md:-mt-32">
                <TerminalDemo />
                <div className="flex justify-center mt-8">
                    <a
                        href="https://github.com/HackerAditya56/CyberBuddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 text-slate-300 hover:text-white px-6 py-3 rounded-full transition-all duration-300 group"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current group-hover:text-emerald-400 transition-colors">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.313-3.369-1.313-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.556-1.11-4.556-5.467 0-1.281.35-2.292.933-3.15-.091-.296-.405-1.49.091-3.09 0 0 .972-.311 3.19 1.192.933-.26 1.936-.39 2.924-.393 1.005.003 1.994.133 2.925.393 2.217-1.503 3.187-1.192 3.187-1.192.497 1.6.184 2.794.09 3.09.584.858.931 1.869.931 3.15 0 4.296-2.345 5.213-4.578 5.454.362.312.683.928.683 1.872 0 1.352-.012 2.441-.012 2.772 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                        <span className="font-mono text-sm">For more info check github repo</span>
                    </a>
                </div>
            </section>

            <FailureAnalysis />
            <Roadmap />
            <GrantRequest />
        </main>
    );
}
